import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { throttle } from 'lodash';
import { mobile } from 'lib/theme';

const Img = styled.img`
  width: 120%;
  position: relative;
  ${mobile(`
    width: auto;
    height: 360px;
  `)}
  ${p => `
    margin-left: ${p.center}%;
    transform: translateX(-${p.center}%);
  `}
`;

const Overlay = styled(Img)`
  position: absolute;
  z-index: 100;
  opacity: ${p => p.opacity || 0};
`;

const StyledOverlayImg = styled.div`
`;

const OverlayImg = ({ img, overlay, overlayOpacity, elementRef, center }) => (
  <StyledOverlayImg>
    <Overlay src={overlay} center={center || 50} opacity={overlayOpacity} innerRef={elementRef} />
    <Img src={img} center={center || 50} />
  </StyledOverlayImg>
);

class OverlayImgContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { overlayOpacity: 0 };
    this.handleScroll = throttle(this.handleScroll.bind(this), 10);
    this.elementRef = this.elementRef.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  outOfScope() {
    if (!this.element) {
      return true;
    }
    return this.element.getBoundingClientRect().top > window.innerHeight ||
      this.element.getBoundingClientRect().top < -this.element.offsetHeight;
  }

  handleScroll() { // eslint-disable-line
    if (this.outOfScope()) {
      return null;
    }
    const windowHeight = window.innerHeight;
    const elHeight = this.element.offsetHeight;
    const startOffset = Math.max(200, windowHeight - elHeight - 50);
    const coeff = 100 / (startOffset - 50);
    const opacity = Math.min(100,
      Math.max(0,
        (startOffset - this.element.getBoundingClientRect().top) * coeff,
      ),
    );
    this.setState({ overlayOpacity: opacity / 100 });
  }

  elementRef(el) {
    this.element = el;
    this.handleScroll();
  }

  render() {
    const { elementRef } = this;
    return (
      <OverlayImg
        {...this.props}
        {...this.state}
        {...{ elementRef }}
      />
    );
  }
}

OverlayImg.propTypes = {
  img: PropTypes.string,
  overlay: PropTypes.string,
  overlayOpacity: PropTypes.number,
  elementRef: PropTypes.func,
  center: PropTypes.number,
};

export default OverlayImgContainer;
