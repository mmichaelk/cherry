import React from 'react';
import styled from 'styled-components';
import { theme, fontSize, mobile } from 'lib/theme';

import Anchor from 'components/Header/Navigation/Anchor';
import Mobile from 'components/lib/Mobile';
import Desktop from 'components/lib/Desktop';
import ContentBlock from 'components/lib/ContentBlock';
import BlockTitle from './../BlockTitle';

import PreorderButton from './../../preorder/PreorderButton';

import img from './barely-know.jpg';
import imgMobile from './barely-know-mobile.jpg';

const BgBlock = styled(ContentBlock)`
`;

const TitleBlock = styled(ContentBlock)`
  position: absolute;
  margin-top: 101px;
  z-index: 200;
  ${mobile(`
    margin-top: 94px;
  `)}
`;

const Bg = styled.img`
  width: 100%;
  height: auto;
`;

const BgMobile = styled.img`
  position: relative;
  margin-left: 50%;
  transform: translateX(-50%);
`;

const PreorderBlock = styled(ContentBlock)`
  position: absolute;
  margin-top: -174px;
`;

const Preorder = styled.div`
  display: flex;
`;

const PreorderText = styled.div`
  ${fontSize(20, 30)}
  letter-spacing: 0.3px;
  color: ${theme.colors.white};
  width: 240px;
  flex-grow: 0;
  margin: 3px 80px 0 0;
`;

const Form = styled(PreorderButton)`
`;

const MobileText = styled.div`
  ${fontSize(16, 25)}
  color: ${theme.colors.white};
  letter-spacing: 0.24px;
  opacity: 0.85;
  position: absolute;
  margin: 202px 0 0 0;
  z-index: 200;
  text-align: center;
  width: 100%;
`;


const Block4 = () => (
  <div>
    <Anchor id="product" mobileOffset="40" />
    <TitleBlock>
      <BlockTitle white>You barely know it’s&nbsp;there.</BlockTitle>
    </TitleBlock>
    <Desktop>
      <BgBlock outer={<Bg src={img} width="1440" height="1000" />} />
      <PreorderBlock>
        <Preorder>
          <PreorderText>Cherry was designed to&nbsp;blend into your home.</PreorderText>
          <Form />
        </Preorder>
      </PreorderBlock>
    </Desktop>
    <Mobile>
      <MobileText>Cherry was designed<br />to&nbsp;blend into your home.</MobileText>
      <BgBlock outer={<BgMobile src={imgMobile} width="950" height="670" />} />
    </Mobile>
  </div>
);

export default Block4;
