import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import YouTube from 'react-youtube';

import SoundControl from './SoundControl';

const mergeVars = (vars = {}) => {
  const defaultVars = {
    autoplay: 1,
    mute: 1,
    controls: 0,
    playsinline: 1,
    modestbranding: 1,
    showinfo: 0,
    rel: 0,
  };
  return Object.assign({}, defaultVars, vars);
};

const Container = styled.div`
`;

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = { muted: null };
    this.onReady = this.onReady.bind(this);
    this.onPlay = this.onPlay.bind(this);
    this.onPause = this.onPause.bind(this);
    this.toggleSound = this.toggleSound.bind(this);
    this.ref = this.ref.bind(this);
    this.checkVisible = this.checkVisible.bind(this);
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  onReady(e) {
    this.player = e.target;
    this.player.pauseVideo();
    this.checkVisible();
    this.setState({ muted: this.player.isMuted() });
    if (this.props.videoPlayerRef) {
      this.props.videoPlayerRef(this.player);
    }
    // setInterval(this.checkVisible, 500);
  }

  onPlay() { // eslint-disable-line
    this.timeout = setTimeout(() => {
      if (this.player) {
        this.player.seekTo(0);
      }
    }, this.player.getDuration() * 1000);
  }

  onPause() {
    if (this.autoPause) {
      this.autoPause = false;
    } else {
      this.paused = true;
    }
  }

  isVisible() {
    // TODO: auto pause if out of viewport
    if (this.element) {
      let parent = this.element;
      while (parent) {
        if (parent.style) {
          const styles = window.getComputedStyle(parent, null);
          if (styles && styles.display === 'none') {
            return false;
          }
        }
        parent = parent.parentNode;
      }
      return true;
    }
    return false;
  }

  checkVisible() {
    if (this.isVisible()) {
      if (!this.paused) {
        this.player.playVideo();
      }
    } else {
      this.autoPause = true;
      this.player.pauseVideo();
    }
  }

  toggleSound() {
    if (this.player) {
      if (this.player.isMuted()) {
        this.player.unMute();
        this.setState({ muted: false });
      } else {
        this.player.mute();
        this.setState({ muted: true });
      }
    }
  }

  ref(el) {
    this.element = el;
  }

  render() {
    const { videoId, width, height, className, playerVars, hasSoundControl } = this.props;
    const { muted } = this.state;
    const { onReady, onPlay, onPause, toggleSound, ref } = this;
    return (
      <Container innerRef={ref}>
        <YouTube
          {...{ videoId, onReady, onPlay, onPause, className }}
          opts={{
            width,
            height,
            playerVars: mergeVars(playerVars),
          }}
        />
        { hasSoundControl &&
          <SoundControl onClick={toggleSound} muted={muted} />
        }
      </Container>
    );
  }
}

Video.propTypes = {
  videoId: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  playerVars: PropTypes.object,
  hasSoundControl: PropTypes.bool,
  videoPlayerRef: PropTypes.func,
};

export default Video;
