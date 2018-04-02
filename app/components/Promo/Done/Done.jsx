import React from 'react';
import styled from 'styled-components';
import { theme, cols10, lessThanCols6, mobile, fontSize } from 'lib/theme';

import ContentBlock from 'components/lib/ContentBlock';
import BlockTitle from './../BlockTitle';
import product from './product.jpg';

import FacebookIco from '../../Footer/facebook.svg';
import YoutubeIco from '../../Footer/youtube.svg';
import TwitterIco from '../../Footer/twitter.svg';

const StyledBlock = styled(ContentBlock)`
  overflow: hidden;
  padding: 157px 0 130px 0;
`;

const MainTitle = styled(BlockTitle)`
`;

const TextBlock = styled.p`
  width: 580px;
  height: 88px;
  ${theme.fonts.futura};
  font-size: 34px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #404e54;
  margin: 8px auto 0px;
  ${mobile(`
    width: 284px;
    height: auto;
    text-align: center;
  `)}
`;

const Photo = styled.img.attrs({
  width: 446,
  height: 257,
})`
  margin: 54px auto 0px;
  display: block;
  ${mobile(`
    width: 250px;
    height: 150px;
    margin: 62px auto 0px;
  `)}
`;

const BottomText = styled.p`
  width: 322px;
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
  margin: 30px auto 0px;
  ${mobile(`
    width: 284px;
    height: auto;
    text-align: center;
    margin: 35px auto 0px;
  `)}
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
`;

const Social = styled.div`
  margin: 60px 0px 0 0;
  svg {
    display: inline-blok;
    margin: 0 10px 0 0;
    cursor: pointer;
  }
  ${mobile(`
    margin: 51px 0 0 0px;
  `)}
  ${cols10(`
    white-space: nowrap;
  `)}
`;

const Link = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  &:hover {
    opacity: 0.9;
  }
`;

const Done = () => (
  <div>
    <StyledBlock>
      <MainTitle>
        Thanks!
      </MainTitle>
      <TextBlock>
        We have sent you a confirmation email
        with your pre-order details.
      </TextBlock>
      <Photo src={product} />
      <BottomText>
        Follow us on social media and connect
        with the growing Cherry community.
      </BottomText>
      <Column>
        <Social>
          <Link href="https://www.youtube.com/watch?v=QnqW1CV9Xx8">
            <YoutubeIco />
          </Link>
          <Link href="https://www.facebook.com/cherryhomeai">
            <FacebookIco />
          </Link>
          <Link href="https://twitter.com/cherryhomeai">
            <TwitterIco />
          </Link>
        </Social>
      </Column>
    </StyledBlock>
  </div>
);

export default Done;
