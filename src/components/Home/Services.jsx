import React from 'react';
import { Link as _Link } from 'gatsby';
import styled from 'styled-components';
import { device } from '../../utilities/device';

import Section from '../Section';
import apostropheImg from '../assets/apostrophe.svg';

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
  position: relative;
  text-decoration: none;
  color: inherit;
`;

const Apostrophes = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  padding: 1em 0;
  margin: 5% 5%;
  align-self: center;

  ${device.tablet} {
    width: 90%;
  }
`;

const Item = styled.div`
  position: relative;
  flex: 1 1 50%;
  display: flex;
  justify-content: center;
  padding: 1em;

  ${device.tablet} {
    flex: 1;
  }
`;

const Image = styled.img`
  height: 115px;

  ${device.tablet} {
    height: 150px;
  }

  ${device.laptop} {
    height: 250px;
  }
`;

const Text = styled.p`
  position: absolute;
  top: 8px;
  left: 6px;
  font-size: 1.1em;
  font-weight: regular;

  ${device.tablet} {
    font-size: 1.3em;
    top: 12px;
    left: 9px;
  }

  ${device.laptop} {
    font-size: 1.6em;
    top: 30px;
    left: 16px;
  }
`;

const content = [
  'Construcción de Marca',
  'Campañas Publicitarias',
  'Presencia Digital',
  'Ejecuciones Creativas',
];

const Services = () => (
  <Section>
    <Header>
      <Link to="/servicios">Servicios</Link>
    </Header>
    <Apostrophes>
      {content.map((item, index) => (
        <Item key={item}>
          <Link to="/servicios">
            <Image src={apostropheImg} />
            <Text>{item}</Text>
          </Link>
        </Item>
      ))}
    </Apostrophes>
  </Section>
);

export default Services;
