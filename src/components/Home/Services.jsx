import React from 'react';
import { Link as _Link } from 'gatsby';
import styled from 'styled-components';

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
`

const Link = styled(_Link)`
  text-decoration: none;
  color: inherit;
`

const Apostrophes = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1em 0;
  margin: 0 10%;
`

const Item = styled.div`
  flex: 1 1 50%;
  display: flex;
  justify-content: center;
  padding: 1em;
`

const InnerItem = styled.div`
  position: relative;
`

const Image = styled.img`
  height: 160px;
`

const Text = styled.p`
  position: absolute;
  top: 18px;
  left: 14px;
  right: 0;
  font-size: 1.2em;
  font-weight: bold;
`

const content = [
  "Construcción de Marca",
  "Campañas Publicitarias",
  "Presencia Digital",
  "Ejecuciones Creativas"
]

const Services = () => (
  <Section>
    <Header><Link to='/services'>Servicios</Link></Header>
    <Apostrophes>
      {content.map((item, index) => (
        <Item key={index}>
          <InnerItem>
            <Image src={apostropheImg}/>
            <Text>{item}</Text>
          </InnerItem>
        </Item>
      ))}
    </Apostrophes>
  </Section>
);

export default Services;
