import React from 'react';

import styled from 'styled-components';
import { theme, fontSize } from 'lib/theme';

const Container = styled.div`
  display: block;
`;

const Button = styled.div`
  border: 1px solid ${theme.colors.red};
  border-radius: 8px;
  color: ${theme.colors.red};
  ${fontSize(14, 25)}
  letter-spacing: 0.21px;
  display: inline-block;
  padding: 4px 16px 4px 15px;
`;

const Available2018 = () => <Container><Button>Available 2018</Button></Container>;

export default Available2018;
