import React from 'react';

import styled from 'styled-components';

import Block1 from './Block1';
import Block2 from './Block2';
import Block3 from './Block3';
import Block4 from './Block4';
import Block5 from './Block5';
import Block6 from './Block6';
import Block7 from './Block7';

const StyledPromo = styled.div`
`;

const Promo = () => (
  <StyledPromo>
    <Block1 />
    <Block2 />
    <Block3 />
    <Block4 />
    <Block5 />
    <Block6 />
    <Block7 />
  </StyledPromo>
);

export default Promo;
