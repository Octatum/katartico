import React from 'react';
import { Link as _Link } from 'gatsby';
import styled from 'styled-components';
import { device } from '../../../utilities/device';

import Section from '../../Section';
import ServiceApostrophe from './ServiceApostrophe';

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
      {content.map(item => (
        <ServiceApostrophe key={item} item={item} />
      ))}
    </Apostrophes>
  </Section>
);

export default Services;
