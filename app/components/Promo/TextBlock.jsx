import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { theme, mobile, desktop, cols10, cols8, cols6, lessThanCols6, fontSize } from 'lib/theme';

const StyledTextBlock = styled.div`
  overflow: visible;
  position: relative;
  width: 460px;
  ${cols10(`
    width: 380px;
  `)}
  ${cols8(`
    width: 620px;
    margin: 0 auto;
  `)}
  ${cols6(`
    width: 460px;
    margin: 0 auto;
  `)}
  ${lessThanCols6(`
    text-align: center;
    margin: 0 29px 0 30px;
    width: auto;
  `)}

  ${p => p.horizontal && `
    ${desktop(`
      width: 100%;
      display: flex;
      justify-content: space-between;
    `)}
    ${cols10(`
      display: flex;
      justify-content: space-between;
    `)}
  `}

  ${p => p.mobileIcon && `
    padding-top: 70px;
  `}
`;

const color = p => theme.colors[p.color || 'darkGrey'];

const Title = styled.h3`
  font-family: futura-pt, Arial, sans-serif;
  font-weight: 500;
  padding: 0;
  width: 381px;
  color: ${color};

  ${mobile(`
    ${fontSize(20, 26)}
    margin: 0 0 20px 0;
  `)}

  ${p => (p.compact ? `
    ${theme.fontSize(20, 30)}
    margin: 0 0 14px 0;
    ${mobile(`
      margin: 0 0 17px 0;
    `)}
  ` : `
    ${theme.fontSize(36, 44)}
    margin: 0 0 35px 0;
  `)}

  ${p => p.horizontal && `
    ${desktop(`
      width: 430px;
      position: relative;
      top: -8px;
    `)}
    ${cols10(`
      width: 220px;
      position: relative;
      top: -8px;
    `)}
  `}

  ${lessThanCols6(`
    width: auto;
    margin-left: 10px;
    margin-right: 10px;
  `)}

  ${p => p.icon && `
    ${cols10(`
      padding-left: 80px;
    `)}
    ${cols8(`
      padding-left: 80px;
    `)}
    ${cols6(`
      padding-left: 80px;
    `)}
  `}
`;

const Text = styled.div`
  color: ${color};
  opacity: 0.85;
  letter-spacing: 0.3px;

  p {
    margin: 0 0 14px 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    ${desktop(`
      margin-top: 27px;
    `)}
  }

  li {
    position: relative;
    margin: 0 0 14px 0;
    padding-left: 20px;
    ${mobile(`
      top: 10px;
      padding-left: 22px;
      $::before {
        left: -13px;
      }
    `)}
    &::before {
      content: '';
      display: block;
      width: 4px;
      height: 4px;
      border-radius: 2px;
      position: absolute;
      left: 0px;
      top: 11px;
      ${mobile(`
        top: 10px;
        left: 0;
      `)}
      background: ${theme.colors.red}
    }
  }

  ${mobile(`
    color: ${color}
  `)}

  ${p => p.horizontal && `
    ${desktop(`
      width: 460px;
    `)}
    ${cols10(`
      width: 460px;
    `)}
  `}

  ${p => (p.compact ? `
    ${theme.fontSize(18, 27)}
    ${mobile(`
      ${fontSize(14, 25)}
      letter-spacing: 0.2px;
      p, li {
        margin-bottom: 10px;
      }
    `)}
  ` : `
    ${theme.fontSize(20, 30)}
    ${mobile(`
      ${fontSize(16, 25)}
      letter-spacing: 0.24px;
    `)}
  `)}

  ${p => p.icon && `
    ${cols10(`
      padding-left: 80px;
    `)}
    ${cols8(`
      padding-left: 80px;
    `)}
    ${cols6(`
      padding-left: 80px;
    `)}
  `}

`;

const Icon = styled.div`
  margin: 0 0 9px 0;
  ${mobile(`
    display: none;
  `)}

  ${cols10(`
    position: absolute;
    margin-top: -18px;
  `)}
  ${cols8(`
    position: absolute;
    margin-top: -18px;
  `)}
  ${cols6(`
    position: absolute;
    margin-top: -18px;
  `)}
`;

const MobileIcon = styled(Icon)`
  padding-bottom: 5px;
  display: block;
  ${desktop(`
    display: none;
  `)}
`;

const TextBlock = ({
  className,
  title,
  children,
  icon,
  mobileIcon,
  compact,
  horizontal,
  color,
}) => (
  <StyledTextBlock {...{ compact, horizontal, className, color, icon, mobileIcon }}>
    { icon &&
      <Icon>{ icon }</Icon>
    }
    { mobileIcon &&
      <MobileIcon>{ mobileIcon }</MobileIcon>
    }
    <Title {...{ compact, horizontal, color, icon, mobileIcon }}>{ title }</Title>
    <Text {...{ compact, horizontal, color, icon, mobileIcon }}>{ children }</Text>
  </StyledTextBlock>
);

TextBlock.propTypes = {
  className: PropTypes.string,
  title: PropTypes.node,
  children: PropTypes.node,
  icon: PropTypes.node,
  mobileIcon: PropTypes.node,
  compact: PropTypes.bool,
  horizontal: PropTypes.bool,
  color: PropTypes.string,
};

export default TextBlock;
