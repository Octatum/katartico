import React from 'react';
import { Link as _Link } from 'gatsby';
import styled from 'styled-components';

import Section from '../Section';
import Video from './Video';

const Header = styled.h2`
  position: relative;
  padding: 0.5em 0;
  margin: 0 1em;
  font-size: 1.5em;
  font-weight: bold;
`;

const Link = styled(_Link)`
  text-decoration: none;
  color: inherit;
`;

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
`;

const About = () => (
  <Section>
    <Header>
      <Link to="/about">Nosotros</Link>
    </Header>
    <Quote>Insert your inspirational quote right here...</Quote>
    <Video />
  </Section>
);

export default About;
