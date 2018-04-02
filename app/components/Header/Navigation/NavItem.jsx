import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { theme, mobile, desktop, fontSize } from 'lib/theme';
import { Link } from 'react-router-dom';

import arrowSvg from './arrow.svg';

const StyledNavItem = styled.li`
  ${desktop(`
    ${theme.fontSize(16)}
    color: ${theme.colors.darkHeader};
    height: 100%;
    margin: 0 40px 0 0;
    display: inline-block;
    a:hover {
      border-bottom: 2px solid ${theme.colors.red};
    }
  `)}
  ${mobile(`
    display: block;
    position: relative;
  `)}

  ${p => p.hideOnMobile && mobile(`
    display: none;
  `)}

  ${p => p.active && `
    a {
      ${desktop(`
        color: ${theme.colors.red};
        border-bottom: 2px solid ${theme.colors.red};
      `)}
    }
  `}

  ${p => p.white && `
    ${desktop(`
      color: ${theme.colors.darkBlue};
    `)}
  `}
`;

const StyledLink = styled(Link)`
  ${desktop(`
    padding: 22px 0 0 0;
    display: inline-block;
    box-sizing: border-box;
    height: 100%;
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  `)}

  ${mobile(`
    color: ${theme.colors.darkGrey};
    text-decoration: none;
    display: block;
    height: 80px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    padding: 29px 0 0 0;
    ${fontSize(18, 22)}
    text-align: left;
  `)}
`;

const Arrow = styled(arrowSvg)`
  ${desktop(`
    display: none;
  `)}
  ${mobile(`
    position: absolute;
    top: 31px;
    right: 16px;
  `)}
`;

const NavItem = ({ title, active, href, hideOnMobile, white }) => (
  <StyledNavItem {...{ hideOnMobile, white, active }}>
    <StyledLink to={href}>
      { title }
    </StyledLink>
    <Arrow />
  </StyledNavItem>
);

NavItem.propTypes = {
  title: PropTypes.string,
  anchor: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  hideOnMobile: PropTypes.bool,
  href: PropTypes.string,
  white: PropTypes.bool,
};

const mapStateToProps = ({ router: { location } }, { href }) => ({
  active: (location.pathname + location.hash) === href,
});

export default connect(mapStateToProps)(NavItem);

