import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import '../components/Layout/index.css';

import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

import quoteImg from '../components/assets/quote.svg';
import logoImg from '../components/assets/logo.svg';
import lineImg from '../components/assets/line.svg';
import Layout from '../components/Layout';

const Header = styled.h1`
  font-size: 3em;
  color: darkred;
`;

const QuoteStyleTop = styled.img `
  width: 164.41px;
  height: 248.41px;
  position: absolute;
  left: 3.7%;
  top: 5.5%;
`

const QuoteStyleBottom = styled.img `
  width: 164.41px;
  height: 248.41px;
  position: absolute;
  right: 3.7%;
  bottom: 5.5%;
`

const LogoContainer = styled.div `
  top: 11.9%;
  left: 37.8%;
  position: absolute;
`

const Logo = styled.img `
  width: 444.27px;
  height: 339.48px;
  top: 70px;
  margin: 0 auto;
  display: block;
  position: relative;
`

const H3 = styled.p `
  font-size: 48px;
  font-family: 'COCOGOOSE', sans-serif;
  font-style: DemiBold;
  line-height: 56px;
  color: white;
  text-align: center;
  text-transform: uppercase;
  top: 130.96px;
  position: relative;
`

const Line = styled.img `
  text-align: center;
  height: 4.5px;
  margin: 0 auto;
  display: block;
  position: relative;
  top: 140px;
`

const Container = styled.div `
  position: relative;
  top: 170px;
`

const H4 = styled.div `
  font-size: 30px;
  font-family: 'COCOGOOSE', sans-serif;
  line-height: 30px;
  color: white;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  margin: 5px;
`

const Span = styled.span `
  font-family: 'COCOGOOSE', sans-serif;
  font-size: 60px;
  text-transform: uppercase;
`


const P = styled.p `
  font-size: 22px;
  font-family: 'Berthold', sans-serif;
  line-height: 26px;
  color: white;
  text-align: center;
  position: relative;
`

const Footer = styled.div `
  font-family: 'Berthold', sans-serif;
  font-size: 16px;
  height: 19px;
  text-align: center;
  color: white;
  position: fixed;
  bottom: 37px;
  width: 100%;
`

Splitting();

const IndexPage = () => (
  <Layout>
    <QuoteStyleTop src={quoteImg} />
    <Logo src={logoImg} />
    <H3><Span>N</Span>os <Span>e</Span>stamos <Span>r</Span>enovando</H3>
    <Line src={lineImg} />
    <Container>
      <H4>Contáctanos</H4>
      <P>rafael@katartico.mx</P>
      <P>(644) 145 1956</P>
    </Container>
    <Footer>Copyright © Todos los derechos reservados. Katartico 2018. Desarrollo por Katartico | Octatum</Footer>
    <QuoteStyleBottom src={quoteImg} />
  </Layout>
);

export default IndexPage;
