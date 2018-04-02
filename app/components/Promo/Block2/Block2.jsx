import React from 'react';
import styled from 'styled-components';

import { theme, mobile } from 'lib/theme';

import Divider from 'components/lib/Divider';
import Anchor from 'components/Header/Navigation/Anchor';
import ContentBlock from 'components/lib/ContentBlock';
import Mobile from 'components/lib/Mobile';
import Desktop from 'components/lib/Desktop';
import BlockTitle from './../BlockTitle';
import TextBlock from './../TextBlock';

import iphoneImg from './iPhone7.png';
import checkinsImg from './checkins.jpg';
import updatesImg from './updates.jpg';

import phone1video from './video/phone1.mp4';
import phone2video from './video/phone2.mp4';

const StyledBlock = styled(ContentBlock)`
  position: relative;
  overflow: visible;
  padding: 186px 0 0 0;
  &::before {
    content: '';
    display: block;
    box-shadow: 0 0 40px 5px rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
  }
  ${mobile(`
    padding: 82px 0 0 0;
    overflow: hidden;
  `)}
`;

const StyledSecondBlock = styled(ContentBlock)`
  overflow: hidden;
  padding: 0 0 40px 0;
  &::before {
    display: none;
  }
  ${mobile(`
    background: ${theme.colors.white};
    padding: 0 0 0 0;
  `)}
`;

const StyledDivider = styled(Divider)`
  margin-top: 73px;
  padding: 0 0 231px 0;
  ${mobile(`
    padding: 0;
  `)}
`;

const Phone = styled.div`
  width: 380px;
  height: 686px;
  background: url('${iphoneImg}') top left/380px 686px no-repeat;
  position: absolute;
  top: 59px;
  right: -411px;
  box-sizing: border-box;
  padding: 97px 0 0 61px;
  pointer-events: none;
  ${p => p.second && `
    top: 105px;
  `}
  ${mobile(`
    display: none;
  `)}
`;

const Img = styled.img.attrs({
  width: 920,
  height: 360,
})`
  position: relative;
  margin: 74px 0 0 50%;
  transform: translateX(-50%);
`;

const StyledTextBlock = styled(TextBlock)`
  padding: 237px 0 90px 0;
  position: relative;
  overflow: visible;
  ${mobile(`
    padding: 25px 0 5px 0;
  `)}
`;

const Block2 = () => (
  <div>
    <StyledBlock>
      <Anchor id="insights" offset="-100" mobileOffset="-40" />
      <BlockTitle>You always know what’s going on in your house.</BlockTitle> {/* TODO: i18n */}
      <Mobile>
        <Img src={checkinsImg} />
      </Mobile>
      <StyledTextBlock
        title={
          <span>Comprehensive and&nbsp;quick&nbsp;check-ins.</span>
        }
      >
        <Desktop>
          <Phone>
            <video
              src={phone1video}
              width="255"
              height="450"
              autoPlay
              loop
              muted
            />
          </Phone>
        </Desktop>
        Cherry’s smart sensors create a virtual floor
        plan of&nbsp;your house, giving you a&nbsp;snapshot
        of&nbsp;your entire home in&nbsp;just one glance. You’ll
        be&nbsp;able to&nbsp;view the location of family members,
        pets, objects without wasting time scanning
        through empty rooms.
      </StyledTextBlock>
    </StyledBlock>
    <StyledSecondBlock>
      <Mobile>
        <Img src={updatesImg} />
      </Mobile>
      <StyledTextBlock title={<span>Quick and convenient updates.</span>}>
        <Desktop>
          <Phone second>
            <video
              src={phone2video}
              width="255"
              height="450"
              autoPlay
              loop
              muted
            />
          </Phone>
        </Desktop>
        We know you’re busy, that’s why your Cherry updates
        are just what you want to know and convenient.
        Tell us which home events you’re most interested and
        receive skimmable text summaries twice a&nbsp;day.
        Just what’s needed, on&nbsp;your time.
      </StyledTextBlock>
      <StyledDivider />
    </StyledSecondBlock>
  </div>
);

export default Block2;
