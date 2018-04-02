import React from 'react';
import { theme, cols10, lessThanCols6, mobile, fontSize, cols6, cols8 } from 'lib/theme';
import styled from 'styled-components';
import Close from 'material-ui/svg-icons/navigation/close';

const Modal = styled.div`
  position: fixed;
  background-color: #202627;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  z-index: 999;
  display: flex;
  justify-content: center;
  overflow: auto;
  padding: 110px 0px 0px;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 820px;
  border-radius: 8px;
  background-color: #ffffff;
  height: 100%;
  height: 80%;
  overflow: auto;
  border-radius: 8px;
  ${cols10(`
    width: 700px;
  `)}
  ${cols8(`
    width: 560px;
  `)}
  ${mobile(`
    width: 300px;
  `)}
`;

const Header = styled.div`
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);
  height: 60px;
  border-radius: 8px 8px 0px 0px;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 15px;
  position: fixed;
  width: 820px;
  top: 58px;
  left: 0px;
  right: 0px;
  margin: 0px auto;
  background: white;
  z-index: 5;
  box-sizing: border-box;
  svg {
    color: #ff5a59 !important;
    height: 30px !important;
    width: 30px !important;
    cursor: pointer;
  }
  ${cols10(`
    width: 700px;
  `)}
  ${cols8(`
    width: 560px;
  `)}
  ${mobile(`
    width: 300px;
  `)}
`;

export default class ModalText extends React.Component {
  render() {
    const {
      content,
      close
    } = this.props;

    return (
      <Modal>
        <Header>
          <Close onClick={() => close()}/>
        </Header>
        <Container>
          {content}
        </Container>
      </Modal>
    );
  }
}
