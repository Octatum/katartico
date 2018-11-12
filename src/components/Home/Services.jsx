import React from 'react';
import { Link as _Link } from 'gatsby';
import styled from 'styled-components';
import { device } from '../../utilities/device';

import Section from '../Section';
import apostropheImg from '../assets/apostrophe.svg';

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

const Link = styled(_Link)`
  text-decoration: none;
  color: inherit;
`;

const Apostrophes = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  padding: 1em 0;
  margin: 0 5%;
  align-self: center;

  ${device.tablet} {
    width: 90%;
  }
`;

const Item = styled.div`
  flex: 1 1 50%;
  display: flex;
  justify-content: center;
  padding: 1em;

  ${device.tablet} {
    flex: 1 1 25%;
  }
`;

const InnerItem = styled.div`
  position: relative;
`;

const Image = styled.img`
  height: 115px;

  ${device.tablet} {
    height: 150px;
  }

  ${device.laptop} {
    height: 190px;
  }
`;

const Text = styled.p`
  position: absolute;
  top: 8px;
  left: 7px;
  font-size: 1.1em;
  font-weight: bold;

  ${device.tablet} {
    font-size: 1.3em;
    top: 12px;
    left: 10px;
  }

  ${device.laptop} {
    font-size: 1.4em;
    top: 20px;
    left: 12px;
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
      <Link to="/services">Servicios</Link>
    </Header>
    <Apostrophes>
      {content.map((item, index) => (
        <Item key={item}>
          <InnerItem>
            <Image src={apostropheImg} />
            <Text>{item}</Text>
          </InnerItem>
        </Item>
      ))}
    </Apostrophes>
  </Section>
);

export default Services;
