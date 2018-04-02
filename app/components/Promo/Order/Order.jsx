import React from 'react';
import styled from 'styled-components';
import { browserHistory } from 'react-router-dom';
import Checkbox from 'material-ui/Checkbox';
import CircularProgress from 'material-ui/CircularProgress';
import ModalText from '../ModalText/ModalText';
import Privacy from '../Privacy/Privacy';
import Terms from '../Terms/Terms';
import Reservation from '../Reservation/Reservation';
import Preloader from '../Preloader';
// material ui
import TextField from 'material-ui/TextField';

import apiCall from '../../lib/apiCall';

import {
  StripeProvider,
  Elements,
  injectStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement
} from 'react-stripe-elements';

import {
  theme,
  desktop,
  mobile,
  cols10,
  gridWidth,
  fontSize,
  medium,
  cols8,
  lessThanCols6
} from 'lib/theme';

import ContentBlock from 'components/lib/ContentBlock';
import { Columns } from 'components/lib/Columns';

import plus from './plus.jpg';
import basic from './basic.jpg';
import ultimate from './ultimate.jpg';

import BlockTitle from './../BlockTitle';

import american from './american.png';
import visa from './visa.png';
import mastercard from './mastercard.png';

const checkBox = {
  style: {
    width: 24,
  },
  iconStyle: {
    fill: '#ff5a59',
  }
};

const fieldContentUser = [
  {
    name: 'Name',
    state: 'name'
  },
  {
    name: 'Email',
    state: 'email'
  },
  {
    name: 'Phone number (optional)',
    state: 'phone'
  }
];

const fieldContentAddress = [
  {
    name: 'Billing country',
    state: 'country'
  },
  {
    name: 'City',
    state: 'city'
  },
  {
    name: 'Billing address',
    state: 'address'
  }
];

const fieldStyle = {
  style: {
    width: '100%',
    fontSize: 20,
    letterSpacing: 0.2,
    fontFamily: 'Arial',
    marginBottom: 20,
  },
  floatingLabelStyle: {
    color: theme.colors.darkGrey,
    opacity: 0.5,
    fontSize: 20,
    letterSpacing: 0.2,
    fontFamily: 'Arial',
  },
  underlineStyle: {
    borderColor: theme.colors.divider
  },
  error: {
    borderColor: '#ff5a59'
  },
  underlineFocusStyle: {
    borderColor: theme.colors.darkGrey
  },
  styleCardNumber: {
    width: 270,
    fontSize: 20,
    letterSpacing: 0.2,
    fontFamily: 'Arial',
    marginTop: 90
  },
  styleNoMargin: {
    width: '100%',
    fontSize: 20,
    letterSpacing: 0.2,
    fontFamily: 'Arial',
  },
  styledCardData: {
    width: 110,
    fontSize: 20,
    letterSpacing: 0.2,
    fontFamily: 'Arial',
  },
  styledCardCVC: {
    width: 90,
    fontSize: 20,
    letterSpacing: 0.2,
    fontFamily: 'Arial',
    marginTop: 30,
    marginLeft: 300
  }
};

const StyledBlock = styled(ContentBlock)`
  overflow: hidden;
  padding: 133px 0 0 0;

  ${cols10(`
    padding: 267px 0 0 0;
  `)}
  ${lessThanCols6(`
    padding: 159px 0 0 0;
  `)}
`;

const StyledBlockTitle = styled(BlockTitle)`
  padding-bottom: 112px;

  span {
    text-transform: capitalize;
  }
  ${lessThanCols6(`
    padding-bottom: 41px;
  `)}
`;

const Block1 = styled(Columns)`
  justify-content: space-between;
  ${cols10(`
    flex-wrap: wrap;
    justify-content: center;
  `)}
  ${mobile(`
    flex-wrap: wrap;
    justify-content: center;
  `)}
`;

const BlockInfoUser = styled.div`
  width: 460px;
  padding: 31px 20px 0px;
  box-sizing: border-box;
  align-items: center;

  ${cols10(`
    width: 420px;
    padding: 61px 0px 0px;
  `)}
  ${mobile(`
    width: 420px;
    padding: 61px 0px 0px;
  `)}
  ${lessThanCols6(`
    width: 260px;
    padding: 33px 0px 0px;
  `)}
`;

const Photo = styled.img.attrs({
  width: 460
})`
  ${lessThanCols6(`
    width: 250px;
  `)}
`;

const Text = styled.p`
  margin-top: 140px;
  text-align: center;
  width: 100%;
  ${fontSize(34, 34)}
  ${theme.fonts.futura}
  font-weight: 500;
  color: ${theme.colors.darkGrey};
  span {
    color: ${theme.colors.red};
  }

  ${cols10(`
    width: 619px;
    margin: 140px auto 26px;
  `)}
  ${mobile(`
    width: 100%;
    margin: 119px auto 35px;
    ${fontSize(20, 20)}
    span {
      color: ${theme.colors.darkGrey};
    }
  `)}
`;

const CheckBoxContainer = styled.div`
  width: 600px;
  height: 60px;
  border-radius: 30px;
  border: solid 1px #ff5a59;
  cursor: pointer;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mobile(`
    width: 420px;
    height: 40px;
  `)}
  ${lessThanCols6(`
    width: 280px;
  `)}
`;

const TypePay = styled.span`
  width: 300px;
  height: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  ${theme.fonts.futura}
  color: #ff5a59;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.active-pay {
    background-color: #ff5a59;
    color: white;
  }
  ${mobile(`
    width: 210px;
    height: 41px;
    font-size: 10px;
  `)}
`;

const BlockImagePay = styled.div`
  width: 270px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 90px auto 0px;

  ${mobile(`
     margin: 50px auto 0px;
  `)}
`;

const Icon = styled.img.attrs({
  height: 40,
})`
  &.visa {
    height: 22px;,
  }
`;

const CardBlock = styled.div`
  width: 780px;
  height: 370px;
  position: relative;
  margin: 30px auto 0px;

  .card-style {
    border-bottom: 1px solid rgba(64, 78, 84, 0.25);
    color: #404e54;
  }

  .card-error {
    border-color: red;
  }

  .number {
    margin-top: 120px;
    width: 270px;
  }

  .expiry {
    width: 110px;
    margin-bottom: 8px;
  }

  .cvc {
    width: 90px;
    margin-top: 60px;
    margin-left: 300px
  }
  .card-holders {
    width: 270px;
  }

  ${mobile(`
     margin: 50px auto 0px;
     width: 460px;
     height: auto;

     .cvc {
        width: 420px;
        margin-top: 60px;
        margin-left: 0px
      }
      .number {
        margin-top: 0px;
        width: 420px;
      }
      .expiry {
        width: 420px;
        margin-top: 60px;
      }
      .card-holders {
        width: 420px;
        margin-top: 35px;
      }
  `)}

  ${lessThanCols6(`
    width: 100%;
    .cvc {
      width: 260px;
    }
    .number {
      width: 260px;
    }
    .expiry {
      width: 260px;
    }
    .card-holders {
      width: 260px;
    }
  `)}
`;

const FrontCard = styled.div`
  width: 460px;
  height: 290px;
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0 19px 26px 0 rgba(24, 29, 36, 0.05);
  border: solid 1px rgba(64, 78, 84, 0.25);
  position: relative;
  z-index: 3;
  padding-left: 20px;
  box-sizing: border-box;

  ${mobile(`
     width: 100%;
     height: auto;
     border-radius: 0px;
     box-shadow: none;
     border: 0px;
     padding: 0px;
     display: flex;
     justify-content: center;
     flex-wrap: wrap;
  `)}
`;

const BackCard = styled.div`
  width: 460px;
  height: 290px;
  border-radius: 16px;
  background-color: #ffffff;
  border: solid 1px rgba(64, 78, 84, 0.25);
  position: absolute;
  top: 80px;
  left: 320px;
  box-sizing: border-box;

  ${mobile(`
     width: 100%;
     height: auto;
     border-radius: 0px;
     box-shadow: none;
     border: 0px;
     padding: 0px;
     display: flex;
     justify-content: center;
     flex-wrap: wrap;
     position: relative;
     top: auto;
     left: auto;
  `)}
`;

const CardChooseImage = styled.img`
  position: absolute;
  top: 45px;
  right: 65px;
  height: 50px;
  .visa {
    height: 20px;
  }
  ${mobile(`
    display: none;
    opacity: 0;
  `)}
`;

const BottomCardBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-right: 20px;
  margin-top: 20px;

  ${mobile(`
    padding-right: 0px;
    margin-top: 0px;
    justify-content: center;
    flex-wrap: wrap;
  `)}
`;

const BorderCard = styled.div`
  width: 100%;
  height: 60px;
  background-color: #c7cfd2;
  margin-top: 60px;
  ${mobile(`
    display: none;
  `)}
`;

const AddressBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 40px;

  .card-style {
    border-bottom: 1px solid rgba(64, 78, 84, 0.25);
    color: #404e54;
    padding-bottom: 2px;
  }

  .card-error {
    border-color: red;
  }

  .zip {
    margin-top: 38px;
  }
  ${cols10(`
    justify-content: center;
  `)}

  ${mobile(`
    justify-content: center;
  `)}
`;

const TextFieldContainer = styled.div`
  width: 420px;
  ${lessThanCols6(`
    width: 260px;
  `)}
`;

const BottomText = styled.span`
  width: 740px;
  height: 60px;
  font-family: Arial;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.67;
  letter-spacing: 0.2px;
  text-align: center;
  color: #404e54;
  display: block;
  margin: 98px auto 0px;

  ${mobile(`
    margin: 120px auto 0px;
    width: 499px;
    height: auto;
  `)}
  ${lessThanCols6(`
    width: 270px;
    font-size: 16px;
  `)}
`;

const Button = styled.button`
  margin: 32px auto 120px;
  width: 210px;
  height: 60px;
  border-radius: 30px;
  background-color: #ff5c5d;
  box-shadow: 0 12px 42px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${theme.fonts.futura};
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 1px;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  border: 0px;

  &:focus {
    outline: none;
  }

  ${mobile(`
    margin: 29px auto 90px;
    width: 188px;
    height: 40px;
    font-size: 14px;
  `)}
`;

const PrivacyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;

  .container-check {
    position: relative;
  }

  .error-check-container {
    width: 24px !important;
    height: 24px !important;
    z-index: 800;
    div {
      div {
        margin-right: 0px !important;
      }
    }
  }

  .error-check-box {
    background: #ff5a59;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
  }

  .label-check-box {
    font-family: Arial;
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.67;
    letter-spacing: 0.2px;
    text-align: left;
    color: #404e54;
    margin-left: 20px;
  }
  .link {
    text-decoration: none;
    color: #ff5a59;
    cursor: pointer;
  }
  ${mobile(`
    width: 400px;
    margin: 35px auto 0px;
    align-items: flex-start;

    .label-check-box {
      font-family: Arial;
      font-size: 16px;
    }
  `)}
  ${lessThanCols6(`
    width: 270px;
    margin: 35px auto 0px;
    align-items: flex-start;
  `)}
`;

const ErrorCheck = styled.div`
  position: absolute;
  background: #ff5a59;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  left: -8px;
  top: -8px;
  opacity: 0;
  transition: 0.6s;
  &.show {
    opacity: 1;
  }
`;

const createOptions = (fontSize) => {
  return {
    border: '1px solid red',
    style: {
      base: {
        fontSize,
        color: '#404e54',
        letterSpacing: '0.2px',
        fontFamily: 'Arial',
        '::placeholder': {
          color: 'rgba(64,78,84,0.45)',
          fontFamily: 'Arial',
          letterSpacing: '0.2px',
        },
      },
      invalid: {
        color: 'rgb(244, 67, 54)',
      },
    },
  };
};

class _SplitForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {
        name: '',
        email: '',
        phone: '',
        city: '',
        country: '',
        address: '',
        card_name: '',
        card: '',
        cvc: '',
        expiry: '',
        code: ''
      },
      brand: '',
      submit: false,
      checked: false,
      check: '',
      modalText: false,
      textContent: null
    };
  }

  handleSubmitWithSource(ev) {
    const {
      name,
      email,
      city,
      country,
      address,
      card_name
    } = this.props.obj;

    const {
      card,
      cvc,
      expiry,
      code,
    } = this.state.errors;

    ev.preventDefault();
    this.setState({submit: true});

    const _this = this;

    if (
      email.trim() === '' ||
      name.trim() === '' ||
      city.trim() === '' ||
      country.trim() === '' ||
      address.trim() === '' ||
      card_name.trim() === '' ||
      !this.state.checked
    ) {
      let errors = Object.assign({}, this.state.errors);
      this.setState({submit: false});
      if (card === '') {
        errors.card = false
      }
      if (code === '') {
        errors.code = false
      }
      if (expiry === '') {
        errors.expiry = false
      }
      if (cvc === '') {
        errors.cvc = false
      }
      if (!this.state.checked) {
        _this.setState({check: true})
      }
      this.setState({errors});
      this.errorsField();
    } else {
      this.createToken();
    }
  }
  openModalText(state) {
    if (state === 'privacy') {
      this.setState({ textContent: <Privacy/> })
    } else if (state === 'terms') {
      this.setState({ textContent: <Terms/> })
    } else if (state === 'reservation') {
      this.setState({ textContent: <Reservation/> })
    }
    this.setState({ modalText: true });
  }

  closeModalText() {
    this.setState({ modalText: false });
  }

  errorsField() {
    const {
      name,
      email,
      city,
      country,
      address,
      card_name
    } = this.props.obj;

    let errors = Object.assign({}, this.state.obj);

    if (name.trim() === '') {
      errors.name = 'error';
    }
    if (email.trim() === '') {
      errors.email = 'error';
    }
    if (city.trim() === '') {
      errors.city = 'error';
    }
    if (country.trim() === '') {
      errors.country = 'error';
    }
    if (address.trim() === '') {
      errors.address = 'error';
    }
    if (card_name.trim() === '') {
      errors.card_name = 'error';
    }

    this.setState({errors});
  }

  createToken() {
    const _this = this;

    this.props.stripe.createToken().then(function (result) {
      if (result.error) {
        _this.setState({submit: false});
        alert(result.error.message);
      } else {
        _this.submitFormCard(result.token.id);
      }
    });
  }

  submitFormCard(stripeToken) {
    const {
      email,
      name,
      phone
    } = this.props.obj;

    const {path} = this.props.match;
    const bundle = path.slice(1).charAt(0).toUpperCase() + path.slice(1).substr(1);

    apiCall({
      method: 'POST',
      path: '/pre-order',
      data: {
        stripeToken,
        email,
        name,
        phoneNumber: phone,
        bundle
      }
    }).then(response => {
      if (response.data.status === 'ok') {
        this.props.history.push('/done');
      } else {
        this.setState({submit: false});
        alert(response.error.message);
      }
    });
  }

  changeCardParams(state, e) {
    if (state === 'card') {
      this.setState({brand: e.brand});
    }
    let errors = Object.assign({}, this.state.errors);
    if (!e.complete) {
      errors[state] = '';
    } else {
      errors[state] = e.complete;
    }
    this.setState({errors});
  }


  setErorrs(state, e) {
    let errors = Object.assign({}, this.state.errors);
    errors[state] = '';
    this.setState({errors});
    this.props.onChangeField(e.target.value, state);
  }

  updateCheck() {
    this.setState({check: ''});
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }

  render() {
    const {
      obj
    } = this.props;

    const {
      brand
    } = this.state;

    const {
      card,
      cvc,
      expiry,
      code
    } = this.state.errors;

    const {path} = this.props.match;
    const product = path === '/basic' ? basic : path === '/plus' ? plus : ultimate;
    const cardBrand = brand === 'visa' ? visa :
      brand === 'mastercard' ? mastercard :
        brand === 'amex' ? american : 'none';

    return (
      <form onSubmit={this.handleSubmitWithSource.bind(this)}>
        <StyledBlock>
          <StyledBlockTitle>
            Cherry Home <span>{path.slice(1)}</span>
          </StyledBlockTitle>
          <Block1>
            <div>
              <Photo
                src={product}
              />
            </div>
            <BlockInfoUser>
              {
                fieldContentUser.map((item, index) => (
                  <TextField
                    floatingLabelText={item.name}
                    underlineStyle={
                      this.state.errors[item.state] === 'error' ?
                        fieldStyle.error :
                        fieldStyle.underlineStyle
                    }
                    style={fieldStyle.style}
                    floatingLabelStyle={fieldStyle.floatingLabelStyle}
                    underlineFocusStyle={fieldStyle.underlineFocusStyle}
                    key={index}
                    onChange={this.setErorrs.bind(this, item.state)}
                    value={obj[item.state]}
                  />
                ))
              }
            </BlockInfoUser>
          </Block1>
          <Text>
            Cherry Home requires a <span>$100</span> refundable pre-order deposit.
          </Text>
          {/* <CheckBoxContainer>
            <TypePay className="active-pay">Credit / Debit Card</TypePay>
            <TypePay>PayPal</TypePay>
          </CheckBoxContainer>*/}
          <BlockImagePay>
            <Icon src={mastercard}/>
            <Icon className="visa" src={visa}/>
            <Icon src={american}/>
          </BlockImagePay>
          <CardBlock>
            <FrontCard>
              <CardChooseImage
                src={cardBrand}
                style={{
                  height: `${ brand === 'visa' ? '30px' : '50px' }`,
                  display: `${ cardBrand === 'none' ? 'none' : 'block'}`
                }}
              />
              <CardNumberElement
                placeholder="Credit card number"
                className={`card-style number ${!card && card !== '' && 'card-error'}`}
                {...createOptions('20px')}
                onChange={this.changeCardParams.bind(this, 'card')}
              />
              <BottomCardBlock>
                <div className="card-holders">
                  <TextField
                    floatingLabelText="Cardholder’s name"
                    style={fieldStyle.styleNoMargin}
                    floatingLabelStyle={fieldStyle.floatingLabelStyle}
                    underlineStyle={
                      this.state.errors.card_name === 'error' ?
                        fieldStyle.error :
                        fieldStyle.underlineStyle
                    }
                    underlineFocusStyle={fieldStyle.underlineFocusStyle}
                    onChange={this.setErorrs.bind(this, 'card_name')}
                    value={obj.card_name}
                  />
                </div>
                <CardExpiryElement
                  placeholder="Expiration"
                  className={`card-style expiry ${!expiry && expiry !== '' && 'card-error'}`}
                  {...createOptions('20px')}
                  onChange={this.changeCardParams.bind(this, 'expiry')}
                />
              </BottomCardBlock>
            </FrontCard>
            <BackCard>
              <BorderCard/>
              <CardCVCElement
                placeholder="CVC"
                className={`card-style cvc ${!cvc && cvc !== '' && 'card-error'}`}
                {...createOptions('20px')}
                onChange={this.changeCardParams.bind(this, 'cvc')}
              />
            </BackCard>
          </CardBlock>
          <AddressBlock>
            {
              fieldContentAddress.map((item, index) => (
                <TextFieldContainer key={index}>
                  <TextField
                    floatingLabelText={item.name}
                    style={fieldStyle.style}
                    floatingLabelStyle={fieldStyle.floatingLabelStyle}
                    underlineFocusStyle={fieldStyle.underlineFocusStyle}
                    onChange={this.setErorrs.bind(this, item.state)}
                    value={obj[item.state]}
                    underlineStyle={
                      this.state.errors[item.state] === 'error' ?
                        fieldStyle.error :
                        fieldStyle.underlineStyle
                    }
                  />
                </TextFieldContainer>
              ))
            }
            <TextFieldContainer>
              <PostalCodeElement
                placeholder="Zip code"
                className={`card-style zip ${!code && code !== '' && 'card-error'}`}
                {...createOptions('20px')}
                onChange={this.changeCardParams.bind(this, 'code')}
              />
            </TextFieldContainer>
          </AddressBlock>
          {/* <BottomText>
            By clicking “Pre-order” I agree to be contacted at the email provided with more information
            or offers about Cherry Home products. This consent is not a condition of purchase.
          </BottomText>*/}
          <PrivacyContainer>
            <div className='container-check'>
              <Checkbox
                style={checkBox.style}
                iconStyle={{fill: this.state.check ? '#fff' : '#ff5a59'}}
                checked={this.state.checked}
                onCheck={this.updateCheck.bind(this)}
                className="error-check-container"
              />
              {
                <ErrorCheck className={this.state.check && 'show'}/>
              }
            </div>
            <div className="label-check-box">
              I agree to the Cherry Home&nbsp;
              <span
                className="link"
                onClick={this.openModalText.bind(this, 'reservation')}
              >
                Reservation Agreement
              </span>,&nbsp;
              <span
                className="link"
                onClick={this.openModalText.bind(this, 'terms')}
              >
                Terms of Use
              </span> and&nbsp;
              <span
                className="link"
                onClick={this.openModalText.bind(this, 'privacy')}
              >
                Privacy Policy
              </span>.
            </div>
          </PrivacyContainer>
          <Button disabled={this.state.submit}>
            {
              this.state.submit ?
                <CircularProgress color="#fff"/> :
                'Place pre-order'
            }
          </Button>
        </StyledBlock>
        {
          this.state.submit && <Preloader/>
        }
        {
          this.state.modalText &&
            <ModalText
              content={this.state.textContent}
              close={this.closeModalText.bind(this)}
            />
        }
      </form>
    );
  }
}

const SplitForm = injectStripe(_SplitForm);

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        name: '',
        email: '',
        phone: '',
        city: '',
        country: '',
        zip_code: '',
        address: '',
        card_name: ''
      }
    };
    this.onChangeField = this.onChangeField.bind(this);
  }

  onChangeField(e, state) {
    let obj = Object.assign({}, this.state.obj);
    obj[state] = e;
    this.setState({ obj });
  };

  render() {
    const { onChangeField } = this;
    return (
      <StripeProvider apiKey="pk_live_f3kub7arZcQvExCv6YD9mWpt">
        <Elements>
          <SplitForm
            {...this.state}
            {...this.props}
            {...{ onChangeField }}
          />
        </Elements>
      </StripeProvider>
    );
  }
}

export default Order;
