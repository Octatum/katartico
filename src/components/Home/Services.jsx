import React from 'react';
import styled from 'styled-components';

import Section from '../Section';
import apostropheImg from '../assets/apostrophe.svg';

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

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   grid-template-rows: repeat(2, 1fr);
//   grid-gap: 2em;
//   height: 300px;
//   padding: 1em 0;
//   margin: 0 20%;
// `
//
// const GridItem = styled.div`
//   position: relative;
//   ${'' /* height: 100%;
//   width: 100%; */}
//   ${'' /* background: url(${apostropheImg}) no-repeat center center;
//   background-size: contain; */}
// `
//
// const GridImage = styled.img`
//
// `
//
// const GridText = styled.p`
//   position: absolute;
//   top: 16px;
//   left: 36px;
//   right: 0;
//   font-weight: bold;
// `

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
    <Header>Servicios</Header>
    <Apostrophes>
      {content.map((item) => (
        <Item>
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
