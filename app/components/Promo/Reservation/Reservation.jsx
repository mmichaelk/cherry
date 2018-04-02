import React from 'react';
import styled from 'styled-components';
import { theme, cols10, lessThanCols6, mobile, fontSize, cols6, cols8 } from 'lib/theme';

import ContentBlock from 'components/lib/ContentBlock';
import StaticHeader from '../StaticHeader';
import TextBlock from "../TextBlock";

const reservationContent = [
  {
    title: '1. Cherry Home Reservation',
    description: `
    Thank you for placing a reservation (the “Reservation”) for Cherry Home,
    a product developed by Cherry Labs, Inc., a Delaware corporation (the “Company”).
    By making your Reservation, you have secured the approximate priority
    within your region for taking delivery of your Cherry Home.
    `,
  },
  {
    title: '2. Effective Date',
    description: `
      Your Reservation becomes effective when
      (1) you place your Reservation on www.cherryhome.ai and (2)
      we receive your reservation payment of $100 (the “Reservation Payment”).
    `
  },
  {
    title: '3. Order Process',
    description: `
      While this Reservation secures the approximate delivery priority within your region,
      it does not constitute the purchase or order of a product.
      When the Company receives your Reservation, we will create an order for your product and you will
      receive a Purchase Agreement indicating the purchase price of the product, plus estimates of any
      applicable taxes, duties, transport and delivery charges, and any other applicable fees.
      If you proceed with the order, we will apply your Reservation Payment towards the total order cost.
      Until you enter into a Purchase Agreement, your Reservation may be cancelled by you or
      the Company at any time, in which case you will receive a full refund of your Reservation Payment.
      Delivery of the product is subject to availability. If the Company is unable to deliver the
      product to you following your entering into a Purchase Agreement, the Company will cancel
      your Purchase Agreement and refund any amounts paid by you to
      the Company for the product, including the Reservation Payment.
    `
  },
  {
    title: '4. Acknowledgements; Non-Transferable',
    description: `
      You understand that we will not hold your Reservation Payment separately or in an escrow
      or trust fund or pay any interest on your Reservation Payment. Your Reservation is not
      transferable or assignable to another party without the prior written approval of the Company.
    `
  },
  {
    title: '5. Your Details',
    description: `
      From time to time we will ask you to provide information so that we can perform our obligations
      under these terms and conditions. We will maintain your personal information in
      accordance with our Privacy Policy, which is available at https://www.cherryhome.ai/privacy.
    `
  }
];

const ContnetPrivacy = styled(ContentBlock)`
  padding: 65px 100px 0px;
  background-color: #ffffff;
  box-sizing: border-box;
  border-radius: 0px 0px 8px 8px;
  margin-bottom: 50px;
  ${mobile(`
    padding: 65px 20px 75px;
  `)}
  ${cols8(`
    padding: 65px 20px 75px;
  `)}
  ${cols10(`
    padding: 65px 40px 75px;
  `)}
  ${lessThanCols6(`
   padding: 65px 20px 75px;
  `)}
`;

const TitlePage = styled.h1`
  ${theme.fonts.futura}
  font-size: 36px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #404e54;
  margin: 0px 0px 14px;
  ${mobile(`
    font-size: 32px;
    margin: 0px 0px 5px;
    font-weight: bold;
  `)}
`;

const BlockContent = styled.div`
  padding-bottom: 20px;
  ${mobile(`
    padding-bottom: 20px;
  `)}
`;

const Text = styled.p`
  font-family: Arial;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: 0.3px;
  text-align: left;
  color: #404e54;
  margin: 0px 0px 20px;
  
  &.title {
    font-weight: bold;
    ${theme.fonts.futura}
    font-size: 24px;
    margin: 0px 0px 10px;
  }
  &.text-title {
    margin-bottom: 40px;
  }
  li{
    list-style-type: none;
    text-indent: 0px;
  }
  ${mobile(`
    font-size: 14px;
    li{
      text-indent: 0px;
    }
    &.title {
      font-size: 14px;
      margin-bottom: 10px;
    }
  `)}
`;

const Border = styled.div`
  height: 50px;
  width: 100%;
`;

const Privacy = () => (
  <div>
    <ContnetPrivacy>
      <TitlePage>Cherry Home Reservation.</TitlePage>
      <Text className="text-title">Terms and conditions.</Text>
      {
        reservationContent.map((item, index) => (
          <BlockContent key={index}>
            <Text className="title">{item.title}</Text>
            <Text>{item.description}</Text>
          </BlockContent>
        ))
      }
    </ContnetPrivacy>
    <Border/>
  </div>
);

export default Privacy;
