import styled from 'styled-components';
import { mobile } from 'lib/theme';

const Anchor = styled.a.attrs({
  className: 'navAnchor',
})`
  ${p => p.offset && `
    position: absolute;
    margin-top: ${p.offset}px;
  `}
  ${p => p.mobileOffset && `
    ${mobile(`
      position: absolute;
      margin-top: ${p.mobileOffset}px;
    `)}
  `}
`;

export default Anchor;
