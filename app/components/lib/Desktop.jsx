import styled from 'styled-components';
import { respondTo } from './../../lib/theme';

export default styled.div`
  ${respondTo('mobile', `
    display: none;
  `)}
`;
