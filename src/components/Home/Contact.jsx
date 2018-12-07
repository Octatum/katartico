import React, { Component } from 'react';
import styled from 'styled-components';
import { device } from '../../utilities/device';

import Section from '../Section';
import apostropheImg from '../assets/apostrophe.svg';
import AnimatedApostrophe from './AnimatedApostrophe';

const Header = styled.h2`
  position: relative;
  padding: 0.8em 0.1em;
  margin-left: 0.5em;
  font-size: 1.5em;
  font-weight: bold;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: -1em;
    right: 0;
    height: 1px;
    background: ${props => props.theme.white};
  }

  ${device.laptop} {
    margin-left: 0.5em;
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: right;
  flex: 1;
  padding: 0 5%;
`;

const Form = styled('form')`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  max-width: 600px;
  font-size: 1.2em;

  ${device.laptop} {
    margin-left: 4em;
  }
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  padding: 1em 0;
`;

const Label = styled.p`
  position: relative;
  bottom: ${props => (props.top ? '0' : '-3px')};
  min-width: 5em;
  padding-right: 0.5em;
  align-self: ${props => (props.top ? 'flex-start' : 'flex-end')};
  top: ${({ top }) => top && '10px'};
`;

const Input = styled.input`
  flex: 1;
  min-width: 0;
  padding: 0.2em;
  border: 0;
  font-family: inherit;
  font-size: inherit;
  border: 0;
`;

const TextArea = styled.textarea`
  flex: 1;
  min-width: 0;
  min-height: 100px;
  padding: 0.3em;
  font-family: inherit;
  font-size: inherit;
  resize: none;
`;

const Button = styled.button`
  min-width: 15%;
  padding: 0.5em;
  margin-left: auto;
  margin-top: 01em;
  border: none;
  background: ${props => props.theme.main};
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  text-align: center;
  cursor: pointer;
`;

const ApostropheDiv = styled.div`
  display: none;
  width: 10em;
  padding-top: 1em;
  margin-left: 6em;

  ${device.laptop} {
    display: flex;
    align-items: flex-start;
  }
`;

const Apostrophe = styled.img`
  width: 100%;
  opacity: 0.8;
`;

class Contact extends Component {
  state = {
    messageSent: false,
    name: '',
    email: '',
    message: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  dummyAlert = () => {
    alert(`
      This is a test alert!\n
      Name: ${this.state.name}\n
      Email: ${this.state.email}\n
      Message: ${this.state.message}
    `);
    this.setState({
      name: '',
      email: '',
      message: '',
    });
  };

  render = () => (
    <Section>
      <Header>Contacto</Header>
      <FormContainer>
        <Form>
          <Data>
            <Field>
              <Label>Nombre</Label>
              <Input
                disabled={this.state.messageSent}
                type="text"
                name="name"
                autoComplete="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </Field>
            <Field>
              <Label>Correo</Label>
              <Input
                disabled={this.state.messageSent}
                type="text"
                name="email"
                autoComplete="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </Field>
            <Field>
              <Label top>Mensaje</Label>
              <TextArea
                disabled={this.state.messageSent}
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
                required
              />
            </Field>
          </Data>
          <Button disabled={this.state.messageSent} onClick={this.dummyAlert}>
            Enviar
          </Button>
        </Form>
        <ApostropheDiv>
          <AnimatedApostrophe />
        </ApostropheDiv>
      </FormContainer>
    </Section>
  );
}

export default Contact;
