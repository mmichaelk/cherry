import React from 'react';
import { theme, cols10, lessThanCols6, mobile, fontSize, cols6, cols8 } from 'lib/theme';
import styled from 'styled-components';
import product from './product.png';
import TextField from 'material-ui/TextField';
import CloseImage from 'material-ui/svg-icons/navigation/close';
import message from './message.png';
import Preloader from '../Preloader';
import apiCall from '../../lib/apiCall';

const regexForEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const fieldStyle = {
  style: {
    width: '100%',
    fontSize: 16,
    letterSpacing: 0.2,
    fontFamily: 'Arial',
    color: '#fff',
  },
  floatingLabelStyle: {
    color: '#fff',
    opacity: 0.5,
    fontSize: 16,
    letterSpacing: 0.2,
    fontFamily: 'Arial',
  },
  underlineStyle: {
    borderColor: 'rgba(255, 255, 255, 0.25)'
  },
  error: {
    borderColor: '#ff5a59'
  },
  underlineFocusStyle: {
    borderColor: '#ffffff'
  }
};

const Modal = styled.div`
  position: fixed;
  background-color: rgba(32, 38, 39, 0.95);
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  z-index: 999;
  display: flex;
  justify-content: center;
  overflow: auto;
  align-items: center;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 820px;
  border-radius: 8px;
  background-image: radial-gradient(circle at 49% 32%, #ff7475, #ea4d4e);
  padding: 67px 0px 50px;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  
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
  padding-right: 20px;
  
  svg {
    color: #ff5a59 !important;
    height: 30px !important;
    width: 30px !important;
    cursor: pointer;
  }
`;

const Title = styled.div`
  width: 575px;
  ${theme.fonts.futura}
  font-size: 34px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  margin-bottom: 70px;
  
  ${cols10(`
    font-size: 32px;
  `)}
  ${cols8(`
    width: 556px;
  `)}
  ${mobile(`
    width: 293px;
    font-size: 20px;
    margin-bottom: 40px;
  `)}
`;

const Photo = styled.div`
  width: 570px;
  height: 270px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  ${mobile(`
    width: 250px;
    height: 120px;
  `)}
`;

const Form = styled.div`
  width: 460px;
  height: 60px;
  background: #fff;
  display: flex;
  box-shadow: 0 12px 32px 0 rgba(0, 0, 0, 0.15);
  border-radius: 40px;
  overflow: hidden;
  margin-top: 20px;
  
  .desktop-field {
    border: 0px;
    width: 282px;
    height: 100%;
    font-family: Arial;
    font-size: 20px;
    letter-spacing: 0.2px;
    color: #404e54;
    padding-left: 25px;
    box-sizing: border-box;
    
   &:focus {
    outline: none;
   }
  }
  
  .desktop-field::placeholder {
    opacity: 0.5;
  }
  
  .mobile-field {
    display: none;
  }
  
  .button {
    width: 178px;
    height: 60px;
    border-radius: 30px 0px 0px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: rgba(255, 92, 93, 0.5);
    ${theme.fonts.futura}
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;
    text-decoration: uppercase;
    box-sizing: border-box;
    border: 0px;
    
    &:focus {
      outline: none;
    }
  }
  
  .active {
    background-color: #ff5c5d;
  }
  
  ${mobile(`
    background: transparent;
    width: 100%;
    box-shadow: none;
    border-radius: 0px;
    flex-wrap: wrap;
    height: auto;
    justify-content: center;
    overflow: visible;
  
    .desktop-field {
      display: none;
    }
    .mobile-field {
      display: block;
      width: 260px;
      
      div {
        input::placeholder {
          color: #fff;
          opacity: 0.5;
        }
      }
    }
    .button {
      margin-top: 20px;
      border-radius: 30px;
      background-color: rgba(255, 255, 255, 0.5);
      box-shadow: 0 12px 32px 0 rgba(0, 0, 0, 0.15);
      font-size: 14px;
      font-weight: bold;
      color: #ff5c5d;
      height: 40px;
    }
    .active {
      background: #fff;
    }
  `)}
`;

const Close = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  background-color: rgba(32, 38, 39, 0.95);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ThanksContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 250px;
  
  span {
    width: 100%;
    ${theme.fonts.futura}
    font-size: 52px;
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.35;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    display: inline-block;
    margin-top: 20px;
  }
  p {
    width: 100%;
    height: 30px;
    font-family: Arial;
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: 0.3px;
    text-align: center;
    color: #aaadad;
    margin: 10px 0px 0px;
  }
  
  ${mobile(`
    span {
      font-size: 32px;
    }
    p {
      font-size: 16px;
    }
  `)}
`;

const Message = styled.img`
  width: 56px;
  height: 34px;
`;

export default class ModalSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      timeout: false,
      preloader: false
    };
  }
  onChangeField(e) {
    this.setState({email: e.target.value });
  }

  submitForm() {
    const {
      email
    } = this.state;

    this.setState({ preloader: true });

    apiCall({
      method: 'POST',
      path: '/newsletter',
      data: {
        email
      }
    }).then(response => {
      if (response.data.status === 'ok') {
        this.setState({
          preloader: false,
          timeout: true
        });
        setTimeout(() => {
          this.setState({ timeout: false });
          this.props.close();
        }, 2000);
      } else {
        this.setState({
          preloader: false,
          timeout: true
        });
        setTimeout(() => {
          this.setState({ timeout: false });
          this.props.close();
        }, 2000);
      }
    }).catch(e => {
      alert(e.toString());
      this.setState({ preloader: false })
    });
  }

  render() {
    const {
      email,
      timeout,
      preloader
    } = this.state;

    const valid = regexForEmail.test(this.state.email);

    return (
      <Modal>
        {
          !timeout ?
            <Container>
              <Close onClick={() => this.props.close()}>
                <CloseImage
                  color="rgba(225,225,225,0.5)"
                  hoverColor="#fff"
                />
              </Close>
              <Title>
                Subscribe to Cherry Home newsletter to stay informed on special deals.
              </Title>
              <Photo>
                <img alt="" src={product} />
              </Photo>
              <Form>
                <input
                  className="desktop-field"
                  type="text"
                  placeholder="Enter your e-mail"
                  onChange={this.onChangeField.bind(this)}
                  value={email}
                />
                <div className="mobile-field">
                  <TextField
                    style={fieldStyle.style}
                    hintStyle={fieldStyle.floatingLabelStyle}
                    underlineStyle={fieldStyle.underlineStyle}
                    underlineFocusStyle={fieldStyle.underlineFocusStyle}
                    placeholder="Enter your e-mail"
                    inputStyle={{ color: '#fff' }}
                    onChange={this.onChangeField.bind(this)}
                    value={email}
                    id='text-field'
                  />
                </div>
                <button
                  className={`button ${ valid && 'active' }`}
                  disabled={!valid}
                  onClick={this.submitForm.bind(this)}
                >
                  GET NEWSLETTER
                </button>
              </Form>
            </Container>
            :
            <ThanksContainer>
              <Message src={message} />
              <span>Thanks!</span>
              <p>We will keep you posted!</p>
            </ThanksContainer>
        }
        {
          preloader && <Preloader />
        }
      </Modal>
    );
  }
}
