import React from 'react';
import styled from 'styled-components';
import AppLayout from '../components/Layout';

import branding from '../components/Services/assets/branding.png';
import campania from '../components/Services/assets/campania.png';
import ejecuciones from '../components/Services/assets/ejecuciones.png';
import presencia from '../components/Services/assets/presencia.png';

const Layout = styled.div`
  position: relative;
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.white};
  padding: 5rem 5vw;

  grid-gap: 2rem;

  @supports (display: grid) {
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  }
`;

const Item = styled.div`
  width: 100%;
  max-height: 230px;
  max-width: 230px;
  margin: 0 auto;
  background-image: url('${({ image }) => image}');
  background-size: cover;
  background-position: center;
  position: relative;
  transition: 0.3s linear all;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(71, 11, 11, 0.5);
    transition: inherit;
  }

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  &:hover {
    ::before {
      background-color: rgba(71, 11, 11, 0.8);
    }
  }

  color: white;
  text-align: center;
  text-shadow: 0px 0.3em 0.3em black;
`;

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 100%;
  width: 100%;
`;

const ElementHeader = styled.div`
  text-transform: uppercase;
  max-width: 70%;

  ${Item}:hover & {
    position: absolute;
    bottom: 60%;
  }

  ${Item}:hover &::after {
    content: '';
    display: block;
    background-image: radial-gradient(
      at center center,
      white,
      rgba(255, 255, 255, 0) 70%
    );
    height: 0.2em;
    width: 100%;
    margin-top: 0.5em;
    margin-bottom: 0.75em;
    transition: inherit;
  }
`;

const ElementBody = styled.div`
  max-width: 70%;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 0;
  transform: scaleY(0);

  ${Item}:hover & {
    position: absolute;
    top: 40%;
    height: auto;
    transform: scaleY(1);
  }
`;

const ListItem = styled.div`
  padding-bottom: 1em;
`;

const content = [
  {
    image: branding,
    header: 'Construcción de marca',
    body: (
      <ElementBody>
        <ListItem>Naming</ListItem>
        <ListItem>Branding</ListItem>
      </ElementBody>
    ),
  },
  {
    image: campania,
    header: 'Campañas publicitarias',
    body: (
      <ElementBody>
        <ListItem>ATL</ListItem>
        <ListItem>BTL</ListItem>
      </ElementBody>
    ),
  },
  {
    image: ejecuciones,
    header: 'Ejecuciones creativas',
    body: (
      <ElementBody>
        <ListItem>Diseño gráfico</ListItem>
        <ListItem>Fotografía</ListItem>
        <ListItem>Video</ListItem>
      </ElementBody>
    ),
  },
  {
    image: presencia,
    header: 'Presencia digital',
    body: (
      <ElementBody>
        <ListItem>Desarrollo web</ListItem>
        <ListItem>Community management</ListItem>
        <ListItem>Marketing digital</ListItem>
      </ElementBody>
    ),
  },
];

const Services = props => (
  <AppLayout>
    <Layout>
      {content.map((item, index) => (
        <Item key={index} image={item.image}>
          <ItemContent>
            <ElementHeader>{item.header}</ElementHeader>
            {item.body}
          </ItemContent>
        </Item>
      ))}
      {/* <Item image={branding}>
        <ItemContent>
          <ElementHeader>
        Construcción de marca
          </ElementHeader>
          <ElementBody>
        <ListItem>Naming</ListItem>
        <ListItem>Branding</ListItem>
          </ElementBody>
        </ItemContent>
      </Item> */}
    </Layout>
  </AppLayout>
);

export default Services;
