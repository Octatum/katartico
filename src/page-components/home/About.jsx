import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link as _Link, StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactLottie from 'react-lottie';

import { device } from '../../utilities/device';
import Section from '../../components/Section';
import animationData from './assets/anim_nosotros.json';

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

const Link = styled(_Link)`
  text-decoration: none;
  color: inherit;
`;

const Quote = styled(ReactMarkdown)`
  position: relative;
  padding: 0.7em 0;
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
    height: 2px;
    background: ${props => props.theme.main};
  }

  ${device.laptop} {
    font-size: 1.5em;
  }
`;

const AnimationArea = styled('div')`
  position: relative;
  width: 100%;
  min-height: 20vh;

  ${device.laptop} {
    min-height: 45vh;
  }
`;

const About = props => {
  const { title, slogan, animation } = props.data;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  };

  return (
    <Section>
      <Header>
        <Link to="/nosotros">{title}</Link>
      </Header>
      <Link to="/nosotros">
        <Quote source={slogan} />
      </Link>
      <AnimationArea>
        <ReactLottie options={defaultOptions} />
      </AnimationArea>
    </Section>
  );
};

export default About;
