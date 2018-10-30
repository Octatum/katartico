import React, { Component } from 'react';
import styled from 'styled-components';

import Section from '../Section';

const Header = styled.h2`
  position: relative;
  padding: 0.5em 0;
  margin: 0 1em;
  font-size: 1.5em;
  font-weight: bold;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    height: 1px;
    width: 100%;
    background: ${props => props.theme.white};
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 3rem;
  font-size: 1.2em;
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
  bottom: ${props => props.top ? '0' : '-3px'};
  min-width: 5em;
  padding-right: 0.5em;
  align-self: ${props => props.top ? 'flex-start' : 'flex-end'};
`;

const Input = styled.input`
  flex: 1;
  padding: 0.3em;
  border: 0;
  font-family: inherit;
  font-size: inherit;
  border: 0;
`;

const TextArea = styled.textarea`
  flex: 1;
  min-height: 100px;
  padding: 0.3em;
  font-family: inherit;
  font-size: inherit;
  resize: none;
`;

const Button = styled.button`
  width: 25%;
  padding: 0.5em;
  margin-left: auto;
  border: none;
  background: ${props => props.theme.main};
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  text-align: center;
  cursor: pointer;
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
    </Section>
  );
}

export default Contact;
