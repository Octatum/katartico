import React from 'react';
import { Link as _Link } from 'gatsby';
import styled from 'styled-components';
import { device } from '../../utilities/device';

import Section from '../Section';
import bissuImg from '../assets/logos/bissu.svg';
import incubadoraImg from '../assets/logos/incubadora.svg';
import jimjamsImg from '../assets/logos/jimjams.svg';
import newMariasImg from '../assets/logos/new-marias.svg';
import tecImg from '../assets/logos/tec-de-mty.svg';
import torreLuzImg from '../assets/logos/torre-luz.svg';

const Header = styled.h2`
  position: relative;
  padding: 0.5em;
  margin-left: 1em;
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
`;

const Link = styled(_Link)`
  text-decoration: none;
  color: inherit;
`;

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  max-height: 25em;
  margin: 1.5em;
  align-items: center;

  ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 2em;
    height: 20em;
    max-height: none;
    padding: 0 1em;
  }

  ${device.laptop} {
    max-height: 25em;
  }
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

  ${device.tablet} {
    justify-content: center !important;
    height: 100%;
    padding: 0 10%;

    & > img {
      padding: 0 !important;
    }
  }
`;

const Logo = styled.img`
  height: 100%;
  width: 100%;
  max-width: 300px;
  margin: 1em;

  ${device.tablet} {
    margin: 0;
  }
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
        <GridItem key={index}>
          <Logo src={item} />
        </GridItem>
      ))}
    </LogoGrid>
    <BigPicture />
  </Section>
);

export default Portafolio;
