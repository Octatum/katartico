import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import quoteImg from '../components/assets/quote.svg';
import logoImg from '../components/assets/logo.svg';
import Layout from '../components/Layout';

const Header = styled.h1`
  font-size: 3em;
  color: darkred;
`;

const QuoteStyleTop = styled.img `
  width: 164.41px;
  height: 248.41px;
  position: absolute;
  left: 70.66px;
  top: 59.63px;
`

const QuoteStyleBottom = styled.img `
  width: 164.41px;
  height: 248.41px;
  position: absolute;
  right: 70.66px;
  bottom: 59.63px;
`

const Logo = styled.img `
  width: 444.27px;
  height: 339.48px;
  top: 128.56px;
  position: relative;
  margin: 0 auto;
  display: block;
`

const H3 = styled.p `
  font-size: 48px;
  font-family: 'COCOGOOSE', sans-serif;
  font-style: DemiBold;
  line-height: 56px;
  color: white;
  text-align: center;
  text-transform: uppercase;
  top: 140.96px;
  position: relative;
`

const IndexPage = () => (
  <Layout>
    <QuoteStyleTop src={quoteImg} />
    <Logo src={logoImg} />
    <H3>Nos estamos renovando</H3>
    <QuoteStyleBottom src={quoteImg} />
  </Layout>
);

export default IndexPage;
