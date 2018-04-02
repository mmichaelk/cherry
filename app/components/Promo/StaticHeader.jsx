import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Arrow from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import { mobile } from 'lib/theme';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  padding-left: 60px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);
`;

const Button = styled(Link)`
  background: #ff5a59;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  svg {
    color: #fff !important;
    height: 30px !important;
    width: 30px !important;
  }
  ${mobile(`
    background: transparent;
    width: auto;
    width: auto;
    svg {
      color: #ff5a59 !important;
    }
  `)}
`;

const StaticHeader = () => (
  <StyledHeader>
    <Button to="/products"><Arrow /></Button>
  </StyledHeader>
);

export default StaticHeader;
