import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showFullscreenSubscribe } from 'actions/ui';
import { theme, mobile, desktop, fontSize } from 'lib/theme';

import { MobileLogo, MobileClose } from 'components/Header/Navigation/Navigation';
import styled from 'styled-components';
import PreorderForm from './PreorderForm';
import CloseSvg from './close.svg';
import FormSentSvg from './form-sent.svg';
import FormSentMobileSvg from './form-sent-mobile.svg';


const FullScreen = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 500;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.1s, opacity 0.1s linear;
  ${desktop(`
    background: ${theme.colors.footerBg};
    width: 100%;
    height: 100%;
  `)}
  ${mobile(`
    background: ${theme.colors.white};
  `)}

  ${p => p.visible && `
    visibility: visible;
    opacity: 1;
  `}
  ${p => p.formSent && `
    cursor: pointer;
  `}
`;
const Center = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 500px;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const Text = styled.div`
  width: 481px;
  color: #AAADAD;
  ${fontSize(20, 30)}
  letter-spacing: 0.3px;
  margin: 0 auto 32px auto;
  ${mobile(`
    color: ${theme.colors.darkGrey};
    ${fontSize(16, 25)}
    letter-spacing: 0.18px;
    width: 250px;
    margin-bottom: 29px;
  `)}
`;

const Close = styled(CloseSvg)`
  margin: 41px 0 0 0;
  cursor: pointer;
  ${mobile(`
    display: none;
  `)}
`;

const FormSent = styled(FormSentSvg)`
  margin: 0 0 27px 0;
  ${mobile(`
    display: none;
  `)}
`;
const FormSentMobile = styled(FormSentMobileSvg)`
  display: none;
  ${mobile(`
    display: block;
    margin: 0 auto 19px auto;
  `)}
`;

const FullscreenPreorderForm = ({ visible, showFullscreenSubscribe, formSent }) => (
  <FullScreen
    {...{ visible, formSent }}
    onClick={() => formSent && showFullscreenSubscribe(false)}
  >
    <MobileClose visible onClick={() => showFullscreenSubscribe(false)} />
    <MobileLogo visible white />
    <Center>
      { formSent ?
        <Container>
          <FormSent />
          <FormSentMobile />
          <Text>
            <b>Thank you!</b><br />We will keep you posted!
          </Text>
        </Container>
      :
        <Container>
          <Text>
            Reserve your Cherry home and&nbsp;stay connected
            to the latest news and information from us!
          </Text>
          <PreorderForm />
          <Close onClick={() => showFullscreenSubscribe(false)} />
        </Container>
      }
    </Center>
  </FullScreen>
);

FullscreenPreorderForm.propTypes = {
  visible: PropTypes.bool,
  showFullscreenSubscribe: PropTypes.func,
  formSent: PropTypes.bool,
};

const mapStateToProps = state => ({
  visible: state.ui.showFullscreenSubscribe,
  formSent: state.ui.subscribeFormSent,
});

export default connect(
  mapStateToProps,
  { showFullscreenSubscribe },
)(FullscreenPreorderForm);
