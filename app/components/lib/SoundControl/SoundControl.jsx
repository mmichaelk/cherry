import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import throttle from 'lodash/throttle';

import SoundOnSvg from './sound-on.svg';
import SoundOffSvg from './sound-off.svg';

const SoundOn = styled(SoundOnSvg)`
  position: absolute;
  top: -44px;
  opacity: 0;
  ${p => !p.muted && `
    opacity: 0.5;
  `}
  ${p => p.muted && `
    &:hover {
      opacity: 1;
    }
  `}
`;

const SoundOff = styled(SoundOffSvg)`
  position: absolute;
  top: -44px;
  opacity: 0;
  ${p => p.muted && `
    opacity: 1;
    &:hover {
      opacity: 0;
    }
  `}
`;

const SoundControl = styled.div`
  position: absolute;
  bottom: 16px; left: 50%;
  z-index: 200;
  cursor: pointer;
  transition: padding-bottom 0.1s linear;
  ${p => p.offset && `
    padding-bottom: ${p.offset}px;
  `}
`;

class SoundControlContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { offset: 0 };
    this.handleScroll = throttle(this.handleScroll.bind(this), 100);
    this.innerRef = this.innerRef.bind(this);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleScroll);
  }

  handleScroll() {
    if (this.element) {
      const offset = Math.max(
        0,
        (16 - window.innerHeight) + this.element.getBoundingClientRect().bottom,
      );
      this.setState({ offset });
    }
  }

  innerRef(element) {
    this.element = element;
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleScroll);
  }

  render() {
    const { muted, onClick } = this.props;
    const { offset } = this.state;
    const { innerRef } = this;
    if (muted === null) {
      return null;
    }
    return (
      <SoundControl {...{ onClick, innerRef, offset }}>
        <SoundOff muted={muted} />
        <SoundOn muted={muted} />
      </SoundControl>
    );
  }
}

SoundControlContainer.propTypes = {
  muted: PropTypes.bool,
  onClick: PropTypes.func,
};

export default SoundControlContainer;
