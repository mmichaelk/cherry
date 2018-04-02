import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, cols10 } from 'lib/theme';

const Outer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Inner = styled.div`
  max-width: ${theme.gridWidth}px;
  margin: 0 auto;
  position: relative;
  height: 100%;
  ${cols10(`
    max-width: 780px;
  `)}
  ${p => p.wide && `
    ${cols10(`
      max-width: ${theme.gridWidth}px;
    `)}
  `}
`;

const ContentBlock = ({ className, children, outer, onClick, wide }) => (
  <Outer {...{ className, onClick }}>
    { outer }
    <Inner {...{ wide }}>{ children }</Inner>
  </Outer>
);

ContentBlock.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  outer: PropTypes.node,
  onClick: PropTypes.func,
  wide: PropTypes.bool,
};

export default ContentBlock;
