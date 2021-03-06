import React, { useState } from 'react';
import styled from 'styled-components';

import { device } from '../../utilities/device';
import Section from '../../components/Section';
import AnimatedApostrophe from './AnimatedApostrophe';
import { Formik, Field } from 'formik';
import { encode } from '../../utilities/functions';

const Header = styled.h2`
  position: relative;
  padding: 0.8em 0;
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
  padding-left: 1em;
  padding-right: 0.5em;
  flex: 1;

  ${device.laptop} {
    padding: 0 5%;
  }
`;

const Form = styled('form')`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  font-size: 1.2em;
  max-width: 37.5rem;

  ${device.laptop} {
    margin-left: 4em;
  }
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
`;

const LabelInput = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
`;

const Label = styled.p`
  position: relative;
  bottom: ${props => (props.top ? '0' : '-3px')};
  min-width: 5em;
  padding-right: 0.5em;
  align-self: ${props => (props.top ? 'flex-start' : 'flex-end')};
  top: ${({ top }) => top && '10px'};
  font-size: 0.9rem;
`;

const Input = styled(Field)`
  flex: 1;
  min-width: 0;
  padding: 0.2em;
  border: 0;
  font-family: inherit;
  font-size: 0.8em;
  border: 0;
  border-radius: 0;
`;

const TextArea = styled(Field)`
  flex: 1;
  min-width: 0;
  min-height: 100px;
  padding: 0.3em;
  font-family: inherit;
  font-size: 0.8em;
  resize: none;
  border-radius: 0;
`;

const Button = styled.button`
  min-width: 15%;
  padding: 0.5em 1.5em;
  margin-left: auto;
  margin-top: 1em;
  border: none;
  background: ${props => props.theme.main};
  color: inherit;
  font-family: inherit;
  font-size: 0.7em;
  text-align: center;
`;

const ApostropheDiv = styled.div`
  display: none;
  padding-top: 1em;
  margin-left: 6em;

  ${device.laptop} {
    display: flex;
    align-items: flex-start;
  }
`;

const formName = 'Contacto';

function Contact(props) {
  const { labels, title } = props.data;
  const [messageSent, setMessageSent] = useState(false);
  const [formError, setFormError] = useState(false);

  return (
    <Section>
      <Header>{title}</Header>
      <FormContainer>
        <Formik
          initialValues={{
            name: '',
            email: '',
            message: '',
          }}
          onSubmit={async (values, actions) => {
            setFormError(false);
            try {
              await fetch('/', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: encode({
                  'form-name': formName,
                  ...values,
                }),
              });
              setMessageSent(true);
              alert('Your message has been sent');
              actions.resetForm();
            } catch (exception) {
              setFormError(true);
            } finally {
              actions.setSubmitting(false);
            }
          }}
          render={({ isSubmitting, handleSubmit }) => {
            const disabled = isSubmitting || messageSent;

            return (
              <Form
                onSubmit={handleSubmit}
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                name={formName}
              >
                <Data>
                  <p hidden>
                    <label>
                      Don’t fill this out: <Field name="bot-field" />
                    </label>
                  </p>
                  <LabelInput>
                    <Label>{labels.name}</Label>
                    <Input
                      disabled={disabled}
                      name="name"
                      autoComplete="name"
                      required
                    />
                  </LabelInput>
                  <LabelInput>
                    <Label>{labels.email}</Label>
                    <Input
                      disabled={disabled}
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                    />
                  </LabelInput>
                  <LabelInput>
                    <Label top>{labels.message}</Label>
                    <TextArea
                      disabled={disabled}
                      name="message"
                      component="textarea"
                      required
                    />
                  </LabelInput>
                </Data>
                <Button disabled={disabled} type="submit">
                  {labels.sendButton}
                </Button>
              </Form>
            );
          }}
        />
        <ApostropheDiv>
          <AnimatedApostrophe />
        </ApostropheDiv>
      </FormContainer>
    </Section>
  );
}

export default Contact;
