import styled from 'styled-components';
import { theme, cols10, cols8, cols6, lessThanCols6 } from 'lib/theme';

export default styled.div`
  border-bottom: 1px solid ${theme.colors.divider};
  max-width: ${theme.gridWidth}px;
  margin-left: auto;
  margin-right: auto;

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
    margin: 0 30px;
    width: auto;
  `)}
`;
