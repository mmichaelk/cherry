import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme, { respondTo } from 'lib/theme';
import { Link } from 'react-router-dom';


const StyledLogo = styled.div`
  display: inline-block;
  margin-top: 16px;
  font-family: futura-pt-bold, Arial, sans-serif;
  font-weight: bold;
  ${theme.fontSize(21, 26)}
  color: ${theme.colors.red};
  span {
    color: ${theme.colors.darkHeader};
  }
  cursor: pointer;
  a {
    color: inherit;
    text-decoration: inherit;
  }
  ${respondTo('mobile', `
    margin-top: 11px;
    ${theme.fontSize(18, 25)}
  `)}
  ${p => p.white && `
    span {
      color: ${theme.colors.darkBlue};
    }
  `}
`;

const Logo = ({ className, white, onClick }) => (
  <StyledLogo {...{ onClick, className, white }}>
    <Link to="/">
      Cherry <span>Home</span>
    </Link>
  </StyledLogo>
);

Logo.propTypes = {
  className: PropTypes.string,
  white: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Logo;
