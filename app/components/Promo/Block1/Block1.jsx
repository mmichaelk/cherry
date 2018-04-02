import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontSize, theme, mobile, desktop } from 'lib/theme';
import Mobile from 'components/lib/Mobile';

import Video from 'components/lib/ResizedVideo';

import ContentBlock from 'components/lib/ContentBlock';

import CloseSvg from 'components/preorder/close.svg';
import mobileImg from './mobile-top.jpg';
import playVideoImg from './play-video.png';

import BlockTitle from './../BlockTitle';

import PreorderForm from '../../preorder/PreorderForm';

const StyledBlock = styled.div`
  overflow: hidden;
  ${desktop(`
    background: #000;
  `)}
  ${mobile(`
    height: 560px;
  `)}
`;

const DesktopVideo = styled.div`
  min-width: 1152px;
  position: relative;
  right: -50%;
  transform: translateX(-50%);
  max-width: 1600px;
  opacity: 0.8;
  background: black;
  ${mobile(`
    display: none;
  `)}
`;

const StyledContentBlock = styled(ContentBlock)`
  position: absolute;
  top: -500px;
  z-index: 200;
  overflow: visible;
  ${mobile(`
    top: 140px;
  `)}
`;

export const StyledBlockTitle = styled(BlockTitle)`
  ${desktop(`
    text-align: left;
    width: 435px;
    margin: 0;
    padding: 30px 0 0 0;
    left: -1px;
    ${theme.fontSize(60, 70)}
  `)}
  ${mobile(`
    position: relative;
    ${theme.fontSize(38, 45)}
    padding: 0;
  `)}
`;

const Text = styled.div`
  ${desktop(`
    ${theme.fontSize(18, 27)}
    width: 335px;
    color: ${theme.colors.white};
    margin: 21px 0 86px 2px;
    letter-spacing: 0.2px;
  `)}
  ${mobile(`
    ${theme.fontSize(16, 25)}
    width: 100%;
    text-align: center;
    color: ${theme.colors.white};
    margin: 15px 0 16px 2px;
    letter-spacing: 0.18px;
  `)}
`;

const MobileImg = styled.img`
  display: inline-block;
  height: 560px;
  width: auto;
  position: relative;
  margin-left: 50%;
  transform: translateX(-50%);
  z-index: -100;
  display: none;
  ${mobile(`
    display: block;
  `)}
`;

const StyledPreorderForm = styled(PreorderForm)`
  ${mobile(`
    display: none;
  `)}
`;

const ZIndexWorkaround = styled.div`
  ${desktop(`
    display: inline-block;
    position: relative;
    bottom: -617px;
  `)}
`;

const VideoLink = styled.a`
  display: block;
  margin: 0 auto;
  position: relative;
  margin-top: -150px;
  width: 140px;
  text-align: center;
  color: rgba(255, 255, 255, 0.65);
  ${fontSize(14)}
`;

const VideoLinkImg = styled.img.attrs({
  width: 140,
  height: 75,
  alt: '',
})`
  margin-bottom: 21px;
`;

const MobileVideoContainer = styled.div`
  display: none;
  ${mobile(`
    position: fixed;
    background: ${theme.colors.footerBg};
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 300;
    display: flex;
    align-items: center;
    justify-content: center;
  `)}
  ${p => p.hidden && `
    ${mobile(`
      display: none;
    `)}
  `}
`;

const MobileVideo = styled.div`
  width: 100%;
`;

const Close = styled(CloseSvg)`
  margin: 41px 0 0 0;
  cursor: pointer;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;



const Block1 = ({ showMobileVideo, hideMobileVideo, mobileVideoShown, videoPlayerRef }) => (
  <StyledBlock>
    <Mobile>
      <MobileImg src={mobileImg} width="980" height="560" alt="" />
      <VideoLink onClick={showMobileVideo}>
        <VideoLinkImg src={playVideoImg} />
        Watch full video
      </VideoLink>
      <MobileVideoContainer hidden={!mobileVideoShown} onClick={hideMobileVideo}>
        <MobileVideo>
          <Video
            videoId="QnqW1CV9Xx8"
            width="560"
            height="315"
            videoPlayerRef={videoPlayerRef}
          />
          <Close />
        </MobileVideo>
      </MobileVideoContainer>
    </Mobile>
    <DesktopVideo>
      <Video
        videoId="QnqW1CV9Xx8"
        width="560"
        height="315"
        hasSoundControl
      />
    </DesktopVideo>
    <StyledContentBlock>
      <ZIndexWorkaround>
        <StyledBlockTitle white>Experience<br />the new level<br />of safety.</StyledBlockTitle>
        <Text>
          Cherry’s best-in-class AI provides<br />
          your family with the safest, smartest<br />
          and most-private home possible.
        </Text>
        <StyledPreorderForm collapsed />
      </ZIndexWorkaround>
    </StyledContentBlock>
  </StyledBlock>
);

Block1.propTypes = {
  showMobileVideo: PropTypes.func,
  hideMobileVideo: PropTypes.func,
  mobileVideoShown: PropTypes.bool,
  videoPlayerRef: PropTypes.func,
};

class Block1Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mobileVideoShown: false };
    this.showMobileVideo = this.showMobileVideo.bind(this);
    this.hideMobileVideo = () => this.showMobileVideo(false);
    this.videoPlayerRef = this.videoPlayerRef.bind(this);
  }

  showMobileVideo(value) {
    this.setState({ mobileVideoShown: !!value });
    if (this.player) {
      if (value) {
        this.player.unMute();
        this.player.playVideo();
      } else {
        this.player.pauseVideo();
      }
    }
  }

  videoPlayerRef(player) {
    this.player = player;
  }

  render() {
    const { props, state, showMobileVideo, hideMobileVideo, videoPlayerRef } = this;
    return (
      <Block1 {...props} {...state} {...{ showMobileVideo, hideMobileVideo, videoPlayerRef }} />
    );
  }
}

export default Block1Container;
