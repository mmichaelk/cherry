import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, mobile, desktop } from 'lib/theme';
import throttle from 'lodash/throttle';
import { connect } from 'react-redux';
import { whiteNavigation } from 'actions/ui';

import ContentBlock from 'components/lib/ContentBlock';
import Logo from './Logo';
import Navigation from './Navigation';

import MobileMenuSvg from './mobileMenu.svg';
import MobileMenuBlackSvg from './mobileMenuBlack.svg';

const StyledHeader = styled(ContentBlock)`
  position: fixed;
  background: ${theme.colors.footerBg};
  height: 60px;
  z-index: 300;
  transition: background 0.14s linear;
  ${mobile(`
    position: absolute;
    text-align: center;
    height: 50px;
    z-index: 200;
  `)}

  ${p => p.white && `
    background: rgba(255, 255, 255, 0.95);
    box-shadow: inset 0 -1px 0 0 rgba(0,0,0,0.10);
  `}
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 16px;
  left: 21px;

  ${desktop(`
    display: none;
  `)}
  ${mobile(`
    display: block;
  `)}
`;

const Header = ({ showNav, hideNav, navOpened, white }) => (
  <div>
    <Navigation {...{ navOpened, hideNav, white }} />
    <StyledHeader onClick={showNav} {...{ white }} wide >
      <MobileMenu>
        { white ? <MobileMenuBlackSvg /> : <MobileMenuSvg /> }
      </MobileMenu>
      <Logo {...{ white }} />
    </StyledHeader>
  </div>
);

Header.propTypes = {
  showNav: PropTypes.func,
  hideNav: PropTypes.func,
  navOpened: PropTypes.bool,
  white: PropTypes.bool,
};

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpened: false,
    };
    this.showNav = this.showNav.bind(this);
    this.hideNav = this.hideNav.bind(this);
    this.handleScroll = throttle(this.handleScroll.bind(this), 100);
  }

  componentDidMount() {
    if (!this.props.alwaysWhite) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (!this.props.white && window.scrollY > 500) {
      this.props.whiteNavigation(true);
    } else if (this.props.white && window.scrollY <= 500) {
      this.props.whiteNavigation(false);
    }
  }

  showNav() {
    this.setState({ navOpened: true });
  }

  hideNav() {
    this.setState({ navOpened: false });
  }

  render() {
    const { showNav, hideNav } = this;
    return (
      <div>
        {
          this.props.showHeader &&
          <Header
            {...this.props}
            {...this.state}
            {...{ showNav, hideNav }}
          />
        }
      </div>
    );
  }
}

HeaderContainer.propTypes = {
  white: PropTypes.bool,
  alwaysWhite: PropTypes.bool,
  whiteNavigation: PropTypes.func,
};

const mapStateToProps = (state) => {
  let white = false;
  let showHeader = true;
  const pathname = state.router.location.pathname;

  if (
    pathname === '/about' ||
    pathname === '/plus' ||
    pathname === '/ultimate' ||
    pathname === '/basic' ||
    pathname === '/products' ||
    pathname === '/done'
  ) { white = true; }

  if (
    pathname === '/privacypolicy' ||
    pathname === '/terms' ||
    pathname === '/reservation'
  ) { showHeader = false; }

  return {
    white: state.ui.whiteNavigation || white,
    alwaysWhite: white,
    showHeader
  };
};

export default connect(mapStateToProps, { whiteNavigation })(HeaderContainer);
