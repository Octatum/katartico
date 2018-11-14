import React from 'react';
import { Link as _Link } from 'gatsby';
import styled from 'styled-components';
import { device } from '../../utilities/device'

import Section from '../Section';
import Video from './Video';

const Header = styled.h2`
  position: relative;
  padding: 0.5em;
  margin-left: 1em;
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

  ${device.laptop} {
    font-size: 1.5em;
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
