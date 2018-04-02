import React from 'react';
import styled from 'styled-components';
import { theme, desktop, mobile, cols10, fontSize } from 'lib/theme';

import Desktop from 'components/lib/Desktop';
import Mobile from 'components/lib/Mobile';
import ContentBlock from 'components/lib/ContentBlock';
import { connect } from 'react-redux';

import BlockTitle from './../Promo/BlockTitle';

import FacebookIco from './facebook.svg';
import YoutubeIco from './youtube.svg';
import TwitterIco from './twitter.svg';

const StyledFooter = styled(ContentBlock)`
  height: 180px;
  background: ${theme.colors.footerBg};
  color: ${theme.colors.white};
  ${mobile(`
    position: relative;
    margin-top: -5px;
    height: 358px;
    text-align: center;
  `)}
`;

const Columns = styled.div`
  display: flex;
  ${mobile(`
    display: block;
  `)}
  ${desktop(`
    padding-left: 80px;
  `)}
  ${cols10(`
    position: relative;
    padding-left: 0;
  `)}
`;

const Column = styled.div`
  flex-grow: 0;
`;

const Copyright = styled.div`
  margin-top: 78px;
  ${fontSize(18, 27)}
  letter-spacing: 0.2px;
  width: 210px;
  ${cols10(`
    width: 210px;
  `)}
`;

const Social = styled.div`
  margin: 60px 61px 0 0;
  svg {
    display: inline-blok;
    margin: 0 10px 0 0;
    cursor: pointer;
  }
  ${mobile(`
    margin: 51px 0 0 10px;
  `)}
  ${cols10(`
    white-space: nowrap;
  `)}
`;

const Contact = styled.div`
  margin: 55px 0 0 0;
  ${theme.fonts.futura}
  ${fontSize(22, 36)}
  white-space: nowrap;
  a {
    color: ${theme.colors.red};
    text-decoration: none;
    &:hover {
      color: ${theme.colors.redHover};
    }
  }
  ${mobile(`
    margin-top: 20px;
    font-family: inherit;
    ${fontSize(16, 18)}
  `)}
`;

const Title = styled(BlockTitle).attrs({
  white: true,
})`
  margin-top: 52px;
  font-weight: normal;
  ${fontSize(24, 30)}
`;

const Link = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  &:hover {
    opacity: 0.9;
  }
`;

const FooterContent = () => (
  <StyledFooter>
    <Columns>
      <Desktop>
        <Column>
          <Copyright>© Cherry Home</Copyright>
        </Column>
      </Desktop>
      <Mobile>
        <Title>Have a question?</Title>
        <Contact>
          Contact us at <a href="mailto:social@cherryhome.ai">social@cherryhome.ai</a>
        </Contact>
      </Mobile>
      <Column>
        <Social>
          <Link href="https://www.youtube.com/watch?v=QnqW1CV9Xx8">
            <YoutubeIco />
          </Link>
          <Link href="https://www.facebook.com/cherryhomeai">
            <FacebookIco />
          </Link>
          <Link href="https://twitter.com/cherryhomeai">
            <TwitterIco />
          </Link>
        </Social>
      </Column>
      <Desktop>
        <Column>
          <Contact>
            Have a question?<br />
            Contact us at <a href="mailto:social@cherryhome.ai">social@cherryhome.ai</a>
          </Contact>
        </Column>
      </Desktop>
    </Columns>
  </StyledFooter>
);

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { path } = this.props;
    const pathname = path === '/products' ||
      path === '/done' || path === '/plus' ||
      path === '/basic' || path === '/ultimate' ||
      path === '/privacypolicy' || path === '/terms' ||
      path === '/reservation';
    return (
      <div>
        {!pathname ? <FooterContent /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    path: state.router.location.pathname,
  };
};

export default connect(mapStateToProps)(Footer);