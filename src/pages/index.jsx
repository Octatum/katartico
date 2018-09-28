import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import quoteImg from '../components/assets/quote.svg';
import logoImg from '../components/assets/logo.svg';
import lineImg from '../components/assets/line.svg';
import AppLayout from '../components/Layout';
import backgroundImage from '../components/assets/background.svg';
import { device } from '../utilities/device';

const Header = styled.h1`
  font-size: 3em;
  color: darkred;
`;

const Layout = styled.div`
  background-image: url('${backgroundImage}');
  background-color: black;
  min-height: 100vh;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const QuoteStyle = styled.img`
  --margin: 2em;
  width: 7em;
  position: absolute;

  ${device.laptop} {
    --margin: 1.5em;
    width: 7em;
  }

  ${device.tablet} {
    --margin: 1.5em;
    width: 5em;
  }

  ${device.mobile} {
    --margin: 1em;
    width: 2em;
  }
`;

const QuoteStyleTop = styled(QuoteStyle)`
  top: var(--margin);
  left: var(--margin);
`;

const QuoteStyleBottom = styled(QuoteStyle)`
  bottom: var(--margin);
  right: var(--margin);
`;

const LogoContainer = styled.div`
  top: 11.9%;
  left: 37.8%;
`;

const Logo = styled.img`
  width: 30vw;
  min-width: 15em;
  margin-bottom: 1em;
`;

const H3 = styled.p`
  font-size: 2.5em;
  font-family: 'COCOGOOSE', sans-serif;
  font-style: DemiBold;
  line-height: 56px;
  width: 80%;
  color: white;
  text-align: center;
  text-transform: uppercase;

  ${device.tablet} {
    font-size: 2em;
  }

  ${device.mobile} {
    font-size: 1.5em;
  }
`;

const Line = styled.div`
  height: 4.5px;
  width: 30%;
  background-color: #950900;
  margin: 0.5em 0;
`;

const Container = styled.div`
`;

const H4 = styled.div`
  font-size: 2em;
  font-family: 'COCOGOOSE', sans-serif;
  line-height: 30px;
  color: white;
  text-align: center;
  text-transform: uppercase;
  margin: 5px;

  ${device.tablet} {
    font-size: 1.5em;
  }

  ${device.mobile} {
    font-size: 1.2em;
  }
`;

const Span = styled.span`
  font-family: 'COCOGOOSE', sans-serif;
  font-size: 1.5em;
  text-transform: uppercase;
`;

const P = styled.p`
  font-size: 1.5em;
  font-family: 'Berthold', sans-serif;
  line-height: 1.2em;
  color: white;
  text-align: center;
  
  ${device.mobile} {
    font-size: 1.2em;
  }
`;

const Footer = styled.div`
  font-family: 'Berthold', sans-serif;
  text-align: center;
  width: 70%;
  color: white;
  justify-self: flex-end;
  position: absolute;
  bottom: 1em;

  ${device.tablet} {
    font-size: 0.8em;
  }
`;

const IndexPage = () => (
  <AppLayout>
    <Layout>
      <QuoteStyleTop src={quoteImg} />
      <QuoteStyleBottom src={quoteImg} />
      <Logo src={logoImg} />
      <H3>
        <Span>N</Span>
        os <Span>e</Span>
        stamos <Span>r</Span>
        enovando
      </H3>
      <Line />
      <Container>
        <H4>Contáctanos</H4>
        <P>rafael@katartico.mx</P>
        <P>(644) 145 1956</P>
      </Container>
      <Footer>
        Copyright © Todos los derechos reservados. Katartico 2018. Desarrollo por
        Katartico | Octatum
      </Footer>
    </Layout>
  </AppLayout>
);

export default IndexPage;
