import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { theme, mobile, desktop, fontSize } from 'lib/theme';
import { throttle } from 'lodash';
import { history } from 'lib/store';

import AdditiveAnimation from 'additive-animation';

import NavItem from './NavItem';
import PreorderButton from './../PreorderButton';
import Logo from './../Logo';

import CloseSvg from './close.svg';

const StyledNavigation = styled.div`
  ${desktop(`
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    height: 60px;
    width: 100%;
    max-width: ${theme.gridWidth}px;
    font-size: 0;
    z-index: 400;
    top: -60px;
  `)}
  ${mobile(`
    position: fixed;
    z-index: 300;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    transition: visibility 0.2s, opacity 0.2s linear
  `)}
  ${p => p.navOpened && `
    ${mobile(`
      opacity: 1;
      visibility: visible;
    `)}
  `}
`;

const NavItems = styled.ul`
  ${desktop(`
    list-style-type: none;
    margin: 0 0 0 220px;
    padding: 0;
    height: 100%;
    white-space: nowrap;
    position: relative;
    bottom: -60px;
  `)}
  ${mobile(`
    padding: 60px 0 0 20px;
    margin: 0;
    position: fixed;
    background: white;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    box-sizing: border-box;
  `)}
`;

const StyledClose = styled.div`
  display: none;
  ${mobile(`
    position: absolute;
    z-index: 300;
    top: 5px;
    left: 10px;
  `)}
  ${p => p.visible && `
    ${mobile(`
      display: block;
    `)}
  `}
`;

const MobileCopyright = styled.div`
  ${desktop(`
    display: none;
  `)}
  ${mobile(`
    position: absolute;
    bottom: 36px;
    z-index: 200;
    width: 100%;
    text-align: center;
    ${fontSize(14, 27)}
    color: ${theme.colors.darkGrey};
    opacity: 0.45;
    letter-spacing: 0.16px;
  `)}
`;

export const MobileLogo = styled(Logo)`
  display: none;
  ${mobile(`
    position: relative;
    z-index: 200;
    text-align: center;
  `)}
  ${p => p.visible && `
    ${mobile(`
      display: block;
    `)}
  `}
`;

export const MobileClose = props =>
  <StyledClose {...props}><CloseSvg /></StyledClose>;

const Navigation = ({ items, currentItem, navOpened, hideNav, white }) => (
  <StyledNavigation {...{ navOpened, white }}>
    <MobileClose onClick={hideNav} visible={navOpened} />
    <MobileLogo visible={navOpened} white />
    <NavItems {...{ navOpened }}>
      { items.map((item, index) => (
        <NavItem
          key={item.title}
          {...{ white }}
          {...item}
          active={index === currentItem}
        />
      ))}
    </NavItems>
    <PreorderButton />
    <MobileCopyright>© Cherry Home</MobileCopyright>
  </StyledNavigation>
);
Navigation.propTypes = {
  items: PropTypes.array,
  currentItem: PropTypes.number,
  hideNav: PropTypes.func,
  navOpened: PropTypes.bool,
  white: PropTypes.bool,
};

class NavigationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = throttle(this.handleScroll.bind(this), 100);
    this.items = [
      { title: 'Insights', href: '/#insights' },
      { title: 'Technology', href: '/#technology' },
      { title: 'Product', href: '/#product' },
      { title: 'Get started', href: '/#getstarted', hideOnMobile: true },
      { title: 'About us', href: '/about' },
    ];
    this.currentItem = null;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentDidUpdate(prevProps) {
    if (this.skipScroll) {
      this.skipScroll = false;
      return null;
    }
    if (this.props.hash !== '' && prevProps.hash !== this.props.hash) {
      this.currentItem = this.items.find(i =>
        i.href === this.props.pathname + this.props.hash,
      );
      this.scrollToHash();
    } else if (prevProps.pathname !== this.props.pathname || (this.props.hash === '' && prevProps.hash !== '')) {
      this.currentItem = null;
      this.scrollTo(0);
    }
    return null;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  scrollToHash() {
    const scrollToEl = document.getElementById(this.props.hash.slice(1));
    this.scrollTo(window.scrollY + scrollToEl.getBoundingClientRect().top);
  }

  scrollTo(y) { // eslint-disable-line
    window.removeEventListener('scroll', this.handleScroll);
    this.props.hideNav();
    const scrollFrom = window.scrollY;
    const scrollTo = y;
    const animation = new AdditiveAnimation({
      onRender: state => window.scrollTo(0, state.y),
      onFinish: () => window.addEventListener('scroll', this.handleScroll),
    });
    animation.animate({ y: scrollFrom }, { y: scrollTo }, 400);
  }

  handleScroll() {
    let currentItem = null;
    this.items.some((item, index) => { // eslint-disable-line
      const anchorEl = document.getElementById(item.href.slice(2));
      if (anchorEl) {
        if (anchorEl.getBoundingClientRect().y < 50) {
          currentItem = item;
        } else {
          return index;
        }
      }
    });
    if (this.currentItem !== currentItem) {
      this.skipScroll = true;
      this.currentItem = currentItem;
      history.push(currentItem ? currentItem.href : '/');
    }
  }

  render() {
    return (
      <Navigation
        {...this.props}
        items={this.items}
      />
    );
  }
}

NavigationContainer.propTypes = {
  hideNav: PropTypes.func,
  href: PropTypes.string,
  pathname: PropTypes.string,
  hash: PropTypes.string,
};

const mapStateToProps = ({ router: { location: { pathname, hash } } }) => ({
  pathname,
  hash,
});

export default connect(mapStateToProps)(NavigationContainer);
