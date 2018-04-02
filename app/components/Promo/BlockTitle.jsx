import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { theme, cols10, cols8, cols6, lessThanCols6, mobile } from 'lib/theme';

const StyledBlockTitle = styled.h2`
  ${theme.fontSize(52, 70)}
  ${p => (p.white ? `
    color: ${theme.colors.white};
  ` : `
    color: ${theme.colors.darkGrey};
  `)}
  font-family: futura-pt, Arial, sans-serif;
  font-weight: 700;
  width: 780px;
  margin: 0 auto;
  padding: 35px 0 0 0;
  text-align: center;

  ${cols10(`
    width: 780px;
  `)}
  ${cols8(`
    width: 620px;
  `)}
  ${cols6(`
    width: 460px;
  `)}
  ${lessThanCols6(`
    text-align: center;
    margin-left: 30px;
    margin-right: 30px;
    width: auto;
  `)}

  ${mobile(`
    padding: 15px 0 0 0;
    ${theme.fontSize(32, 41)}
  `)}
`;

const BlockTitle = ({ className, children, white }) => (
  <StyledBlockTitle {...{ className, white }}>
    { children }
  </StyledBlockTitle>
);

BlockTitle.propTypes = {
  children: PropTypes.node,
  white: PropTypes.bool,
  className: PropTypes.string,
};

export default BlockTitle;
