import path from 'path';
import express from 'express';
import sslRedirect from 'heroku-ssl-redirect';
import auth from 'http-auth';
import request from 'request';
import bodyParser from 'body-parser';
import cors from 'cors';
import Promise from 'bluebird';
import stripePackage from 'stripe';
import Mailchimp from 'mailchimp-api-v3';
import Mandrill from 'mandrill-api/mandrill';

require('dotenv').config();

const app = express();
const stripe = stripePackage(process.env.STRIPE_SECRET_API_KEY);
const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);
const mandrill = new Mandrill.Mandrill(process.env.MANDRILL_API_KEY);

const stripeCreateCharge = (
  amount,
  description,
  source,
  metadata = null,
  receiptEmail = null,
  currency = 'usd',
) =>
  stripe.charges
    .create({
      amount,
      currency,
      description,
      source,
      metadata,
      receipt_email: receiptEmail,
    })
    .then(charge => ({ status: 'ok', info: charge }))
    .catch(err => ({ status: 'error', error: err }));

const mailchimpSubscribeToList = (listId, email, mergeFields = {}) =>
  mailchimp
    .post(`/lists/${listId}/members`, {
      email_address: email,
      status: 'subscribed',
      merge_fields: mergeFields,
    })
    .then(info => ({ status: 'ok', info }))
    .catch(err => ({ status: 'error', error: err }));

const mandrillSendTemplate = opts =>
  new Promise((resolve, reject) => {
    mandrill.messages.sendTemplate(opts, resolve, reject);
  });

const sendPreOrderEmail = (email, name, bundle) => {
  const subject = `Your Cherry Home ${bundle} pre-order is confirmed.`;
  const templateName = process.env.MANDRILL_PRE_ORDER_TEMPLATE_NAME;
  const templateContent = [];
  const message = {
    subject,
    from_email: process.env.MANDRILL_FROM_EMAIL,
    from_name: process.env.MANDRILL_FROM_NAME,
    to: [
      {
        email,
        name,
        type: 'to',
      },
    ],
    headers: {
      'Reply-To': process.env.MANDRILL_FROM_EMAIL,
    },
    global_merge_vars: [
      {
        name: 'SUBJECT',
        content: subject,
      },
      {
        name: 'BUNDLE',
        content: bundle,
      },
      {
        name: 'CUSTOMER_NAME',
        content: name,
      },
      {
        name: 'CUSTOMER_EMAIL',
        content: email,
      },
      {
        name: 'COMPANY',
        content: 'Cherry Home',
      },
      {
        name: 'COMPANY_EMAIL',
        content: process.env.MANDRILL_FROM_EMAIL,
      },
    ],
    important: false,
    track_opens: true,
    track_clicks: true,
    auto_text: true,
    inline_css: true,
  };
  const async = false;

  return mandrillSendTemplate({
    template_name: templateName,
    template_content: templateContent,
    message,
    async,
  })
    .then(info => ({ status: 'ok', info }))
    .catch(err => ({ status: 'error', error: err }));
};

const authMiddleware = (req, res, next) => {
  if (
    req.originalUrl !== '/subscribe' &&
    process.env.HTTP_AUTH_USER &&
    process.env.HTTP_AUTH_PASS
  ) {
    auth.connect(
      auth.basic(
        {
          realm: 'Cherry',
        },
        (username, password, callback) => {
          callback(
            username === process.env.HTTP_AUTH_USER &&
              password === process.env.HTTP_AUTH_PASS
          );
        },
      ),
    )(req, res, next);
  } else {
    next();
  }
};

app.use(sslRedirect());

app.use(authMiddleware);

app.use(express.static(`${__dirname}/build`));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'about.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV.trim() === 'development') {
  app.use(cors());
}

app.post('/subscribe', (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    res.send(JSON.stringify({ status: 'ok' }));
  } else {
    const options = {
      url: `https://${process.env.MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${
        process.env.MAILCHIMP_LIST_ID
      }/members/`,
      method: 'POST',
      body: JSON.stringify({
        email_address: req.body.email,
        status: 'subscribed',
      }),
      headers: {
        Authorization: `Basic ${new Buffer(
          `user:${process.env.MAILCHIMP_API_KEY}`,
        ).toString('base64')}`,
      },
    };

    request(options, (error, response, body) => {
      const statusCode = response.statusCode;
      const parsedBody = JSON.parse(body);
      if (
        statusCode < 300 ||
        (statusCode === 400 && parsedBody.title === 'Member Exists')
      ) {
        res.send(JSON.stringify({ status: 'ok' }));
      } else {
        res.send(
          JSON.stringify({ status: 'error', error: parsedBody, statusCode }),
        );
      }
    });
  }
});

app.post('/pre-order', (req, res) => {
  const price = process.env.PRE_ORDER_CHARGE_USD * 100; // in cents

  const body = req.body;

  const stripeToken = body.stripeToken;
  const bundle = body.bundle;
  const email = body.email || null;
  const name = body.name || null;
  const phoneNumber = body.phoneNumber || null;
  const metadata = {
    email,
    name,
    phone_number: phoneNumber,
    bundle,
  };
  const mergeFields = {
    NAME: name || '',
    PHO_NUMBER: phoneNumber || '',
    BUNDLE: bundle || '',
  };

  const description = `Cherry Home ${bundle} pre-order`;

  return stripeCreateCharge(price, description, stripeToken, metadata, email)
    .tap((result) => {
      if (result.status === 'ok') {
        return Promise.join(
          mailchimpSubscribeToList(process.env.MAILCHIMP_LIST_ID_PREORDER, email, mergeFields),
          sendPreOrderEmail(email, name, bundle),
        );
      }

      return Promise.resolve();
    })
    .then(result => res.send(result));
});

app.post('/newsletter', (req, res) => {
  const body = req.body;
  const email = body.email;

  return mailchimpSubscribeToList(process.env.MAILCHIMP_LIST_ID_NEWSLETTER, email)
    .then(result => res.send(result));
});

// Make sure this route is the last one!
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3350;
app.listen(
  PORT,
  () => console.log(`Server is now running on http://localhost:${PORT}`) //eslint-disable-line
);
