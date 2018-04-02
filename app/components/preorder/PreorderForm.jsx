import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { theme, mobile, fontSize } from 'lib/theme';
import { subscribeFormSent } from 'actions/ui';

import PreorderButton from './PreorderButton';

const StyledPreorderForm = styled.form`
  vertical-align: top;
  display: flex;
  border-radius: 30px;
  overflow: hidden;
  height: 60px;
  position: relative;
  margin-left: 25px;
  ${mobile(`
    margin: 0 20px 0 20px;
  `)}
`;

const Input = styled.input.attrs({
  type: 'text',
})`
  ${fontSize(16, 1)}
  letter-spacing: 1.14px;
  margin: 0;
  outline: none;
  border: none;
  background: inherit;
  width: 100%;
  &::placeholder {
    color: ${theme.colors.greyText};
    font-size: inherit;
    letter-spacing: 0;
  }
`;

const InputContainer = styled.div`
  box-sizing: border-box;
  height: 60px;
  width: 300px;
  border-radius: 30px 0 0 30px;
  margin: 0;
  padding: 18px 5px 0 25px;
  background-color: ${theme.colors.white};
  transition: width 0.2s linear, padding 0.2s linear, background-color 0.1s linear;
  ${mobile(`
    border: 1px solid ${theme.colors.darkGrey};
    border-radius: 30px;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    position: relative;
  `)}

  ${p => p.collapsed && `
    width: 0;
    padding-left: 0;
    padding-right: 0;
    background-color: ${theme.colors.red};
    * {
      display: none;
    }
  `}
`;

const Button = styled(PreorderButton)`
  border-radius: 0 30px 30px 0;
  ${mobile(`
    position: absolute;
    right: 1px;
  `)}
`;

const PreorderForm = ({
  className,
  onSubmit,
  onChange,
  onClickButton,
  email,
  sent,
  disabled,
  collapsed,
}) => (
  <StyledPreorderForm {...{ onSubmit, sent, className }}>
    <InputContainer collapsed={sent || collapsed}>
      <Input name="email" value={email} onChange={onChange} placeholder="Enter your e-mail" />
    </InputContainer>
    <Button
      onClick={onClickButton}
      disabled={!collapsed && disabled}
      collapsed={collapsed}
      text={sent ? 'Thank you' : null}
    />
  </StyledPreorderForm>
);

PreorderForm.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  onClickButton: PropTypes.func,
  email: PropTypes.string,
  sent: PropTypes.bool,
  disabled: PropTypes.bool,
  collapsed: PropTypes.bool,
};

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line

class PreorderFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sent: false,
      disabled: true,
      collapsed: props.collapsed,
      email: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
  }

  onChange(event) {
    this.setState({
      email: event.target.value,
      disabled: !event.target.value.match(EMAIL_REGEX),
    });
  }

  onSubmit(event) {
    event.preventDefault();
    if (!this.state.disabled) {
      fetch(`${process.env.API_HOST || ''}/subscribe`, {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: this.state.email }),
      })
        // .then(res => res.json())
        .then(() => {
          this.setState({
            sent: true,
            disabled: false,
          });
          this.props.subscribeFormSent();
        });
    }
  }

  onClickButton(e) {
    if (this.state.collapsed) {
      e.preventDefault();
      this.setState({
        collapsed: false,
      });
    }
  }

  render() {
    const { onSubmit, onChange, onClickButton } = this;
    return (
      <PreorderForm
        {...this.props}
        {...this.state}
        {...{ onSubmit, onChange, onClickButton }}
      />
    );
  }
}

PreorderFormContainer.propTypes = PreorderForm.propTypes;

export default connect(null, { subscribeFormSent })(PreorderFormContainer);
