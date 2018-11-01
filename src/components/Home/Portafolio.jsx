import React from 'react';
import { Link as _Link } from 'gatsby';
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
  padding: 0.5em 0;
  margin: 0 1.5rem;
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

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 40% 10% 10% 40%;
  grid-template-rows: 1.5fr 2fr 2fr;
  grid-template-areas:
    'a0 a0 a0 a1'
    'a2 a2 a3 a3'
    'a4 a5 a5 a5';
  margin: 1.5em;
  align-items: center;
`;

const GridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  grid-area: ${props => props.area};

  &:nth-child(2n + 1) > img {
    padding-right: 1em;
  }

  &:nth-child(2n) {
    justify-content: flex-end;
  }

  &:nth-child(2n) > img {
    padding-left: 1em;
  }
`;

const Logo = styled.img`
  height: 100%;
  max-width: 100%;
`;

const BigPicture = styled.div`
  height: 130px;
  width: 90%;
  margin: 3em auto 1em;
  background: ${props => props.theme.main};
`;

const content = [
  tecImg,
  bissuImg,
  incubadoraImg,
  newMariasImg,
  jimjamsImg,
  torreLuzImg,
];

const Portafolio = () => (
  <Section>
    <Header>
      <Link to="/portafolio">Portafolio</Link>
    </Header>
    <LogoGrid>
      {content.map((item, index) => (
        <GridItem key={index} area={`a${index}`}>
          <Logo src={item} />
        </GridItem>
      ))}
    </LogoGrid>
    <BigPicture />
  </Section>
);

export default Portafolio;
