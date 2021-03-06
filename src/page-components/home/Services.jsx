import React from 'react';
import styled from 'styled-components';

import { device } from '../../utilities/device';
import Section from '../../components/Section';
import AnimatedApostrophe from './AnimatedApostrophe';
import LocalizedLink from '../../components/LocalizedLink';

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

const Link = styled(LocalizedLink)`
  position: relative;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const Apostrophes = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  padding: 1em 0;
  margin: 5% 0;
  align-self: center;

  ${device.tablet} {
    width: 90%;
  }
`;

const Text = styled.p`
  position: absolute;
  top: 10%;
  right: 10%;
  font-size: 0.9rem;
  font-weight: regular;
  width: 4.9rem;

  ${device.tablet} {
    font-size: 1rem;
    top: 12px;
    right: 10%;
    width: 6rem;
  }

  ${device.laptop} {
    font-size: 1.6rem;
    top: 15%;
    right: 13%;
    width: 10rem;
  }
`;

const Services = props => {
  const { title, list } = props.data;

  return (
    <Section>
      <Header>
        <Link to="/servicios">{title}</Link>
      </Header>
      <Apostrophes>
        {list.map(item => (
          <AnimatedApostrophe as={Link} to="/servicios" key={item}>
            <Text>{item}</Text>
          </AnimatedApostrophe>
        ))}
      </Apostrophes>
    </Section>
  );
};

export default Services;
