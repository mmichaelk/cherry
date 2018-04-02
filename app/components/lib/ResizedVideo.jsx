import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Video from './Video';

const StyledVideo = styled(Video)`
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const VideoResizer = styled.div`
  position: relative;
  padding-bottom: ${p => (p.height / p.width) * 100}%;
  height: 0;
  overflow: hidden;
`;

const ResizedVideo = props => (
  <VideoResizer {...props}>
    <StyledVideo
      {...props}
    />
  </VideoResizer>
);

ResizedVideo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default ResizedVideo;
