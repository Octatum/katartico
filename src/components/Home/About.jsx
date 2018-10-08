import React from 'react';
import styled from 'styled-components';

import Section from '../Section';

const Header = styled.h2`
  position: relative;
  font-size: 1.5em;
  padding: 0.5em 0;
  margin: 0 1em;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    height: 1px;
    width: 100%;
    background: ${props => props.theme.white};
  }
`

const Quote = styled.div`
  position: relative;
  padding: 1.5em 0;
  margin: 1em 2em;
  font-size: 1.3em;
  text-align: center;

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 30%;
    height: 4px;
    background: ${props => props.theme.main};
  }
`

const BigPicture = styled.div`
  height: 300px;
  width: 100%;
  margin: 2em 0;
  background: ${props => props.theme.main};
`

const About = () => (
  <Section>
    <Header>Nosotros</Header>
    <Quote>
      Insert your inspirational quote right here...
    </Quote>
    <BigPicture/>
  </Section>
);

export default About;
