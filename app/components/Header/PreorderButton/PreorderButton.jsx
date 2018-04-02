import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, mobile, desktop } from 'lib/theme';
import preorderButtonContainer from './preorderButtonContainer';
import { Link } from 'react-router-dom';

// TODO: refactor, merge with preorder/PreorderButton
const StyledPreorderButton = styled.div`
  color: ${theme.colors.white};
  white-space: nowrap;
  a {
    text-decoration: none;
  }
  ${desktop(`
    height: 100%;
    position: absolute;
    right: 0;
    bottom: -52px;
    height: 44px;
  `)}
  ${mobile(`
    overflow: hidden;
    height: 50px;
    border-radius: 25px;
    box-shadow: 0 12px 32px 0 rgba(0,0,0,0.25);
  `)}
`;

const ContainerLink = styled.div`
  text-align: center;
  background: ${theme.colors.red};
  ${theme.fontSize(16)}
  ${theme.fonts.futuraBold}
  text-transform: uppercase;
  color: #FFFFFF;
  letter-spacing: 1px;
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 13px 22px 0 24px;
  cursor: pointer;
  transition: opacity 0.2s linear;
  border-radius: 22px;
  &:hover {
    background: ${theme.colors.redHover};
  }
  ${mobile(`
    border-radius: 25px;
    padding: 16px 27px 0 28px;
  `)}
  ${p => p.hidden && `
    ${desktop(`
      opacity: 0;
    `)}
  `}
  ${p => p.visibleOrder && `
    ${mobile(`
      display: none;
    `)}
  `}
`;


const PreorderButton = ({ className, hidden, onClick, visibleOrder }) => (
  <StyledPreorderButton {...{ className }}>
    <Link to="/products">
      <ContainerLink {...{ hidden, visibleOrder }}>Pre-order</ContainerLink>
    </Link>
  </StyledPreorderButton> // TODO: i18n
);

PreorderButton.propTypes = {
  className: PropTypes.string,
  hidden: PropTypes.bool,
  onClick: PropTypes.func,
  visibleOrder: PropTypes.bool,
};

export default preorderButtonContainer(PreorderButton);
