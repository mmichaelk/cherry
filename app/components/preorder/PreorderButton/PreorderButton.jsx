import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, mobile } from 'lib/theme';
import { Link } from 'react-router-dom';

import mobileButtonSvg from './mobile-button.svg';

const StyledPreorderButton = styled.label`
  color: ${theme.colors.white};
  white-space: nowrap;
  display: inline-block;
  border-radius: 30px;
  height: 60px;
  overflow: hidden;
  a {
    text-decoration: none;
  }
  ${mobile(`
    width: 52px;
    height: 52px;
    margin: 4px;
  `)}
`;

const Submit = styled.input.attrs({
  type: 'submit',
})`
  display: inline-block;
  text-align: center;
  border: none;
  border-radius: 0;
  margin: 0;
  background: ${theme.colors.red};
  ${theme.fontSize(16, 18)}
  display: block;
  ${theme.fonts.futuraBold}
  color: #FFFFFF;
  letter-spacing: 1px;
  box-sizing: border-box;
  padding: 0 62px 0 63px;
  height: 60px;
  cursor: pointer;
  transition: padding 0.2s linear;
  &:hover {
    background: ${theme.colors.redHover};
  }
  &:focus {
    outline: none;
  }
  ${mobile(`
    width: 52px;
    height: 52px;
    border-radius: 26px;
    background: ${theme.colors.red};
    color: ${theme.colors.red};
    padding: 0;
  `)}

  ${p => p.disabled && `
    &, &:hover {
      background: ${theme.colors.halfRed};
    }
    ${mobile(`
      display: none;
    `)}
  `}
  ${p => !p.collapsed && `
    padding: 0 62px 0 63px;
  `}
`;

const MobileSubmit = styled(mobileButtonSvg)`
  ${mobile(`
    display: block;
    position: absolute;
    top: 18px;
    left: 23px;
  `)}
`;

const PreorderButton = ({ className, disabled, collapsed, text, onClick }) => (
  <StyledPreorderButton {...{ className, disabled, collapsed }}>
    <Link to="/products">
      <Submit {...{ disabled, collapsed }} value={text || 'PRE-ORDER'} />
    </Link>
  </StyledPreorderButton> // TODO: i18n
);

PreorderButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  collapsed: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default PreorderButton;
