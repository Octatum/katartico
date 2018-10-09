import React from 'react';
import styled from 'styled-components';

import Section from '../Section';
import bissuImg from '../assets/logos/bissu.svg';
import incubadoraImg from '../assets/logos/incubadora.svg';
import jimjamsImg from '../assets/logos/jimjams.svg';
import newMariasImg from '../assets/logos/new-marias.svg';
import tecImg from '../assets/logos/tec-de-mty.svg';
import torreLuzImg from '../assets/logos/torre-luz.svg';

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

const LogosDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 1em;
`

const Logo = styled.img`
  padding: 1em;
`

const BigPicture = styled.div`
  height: 130px;
  width: 90%;
  margin: 3em auto 1em;
  background: ${props => props.theme.main};
`

const content = [
  tecImg,
  bissuImg,
  incubadoraImg,
  newMariasImg,
  jimjamsImg,
  torreLuzImg
]

const Portafolio = () => (
  <Section>
    <Header>Portafolio</Header>
    <LogosDiv>
      {content.map((image) => (
        <Logo src={image}/>
      ))}
    </LogosDiv>
    <BigPicture/>
  </Section>
);

export default Portafolio;
