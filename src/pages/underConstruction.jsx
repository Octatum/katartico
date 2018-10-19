import React from 'react';
import styled from 'styled-components';
import quoteImg from '../components/assets/quote.svg';
import logoImg from '../components/assets/logo.svg';
import AppLayout from '../components/Layout';
import { device } from '../utilities/device';

const Layout = styled.div`
  --margin-size: 2em;
  background-size: 100%;
  background-color: black;
  min-height: calc(100vh - var(--margin-size) * 2);
  box-sizing: border-box;
  margin: var(--margin-size);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${device.tablet} {
    --margin-size: 1em;
    background-size: initial;
  }

  ${device.mobile} {
    --margin-size: 0em;
  }
`;

const QuoteStyle = styled.img`
  --margin: 1em;
  width: 7em;
  position: absolute;

  ${device.laptop} {
    --margin: 1.3em;
    width: 6em;
  }

  ${device.tablet} {
    --margin: 1.2em;
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

const Logo = styled.img`
  flex: 3;
  width: 20vw;
  min-width: 15em;
  margin-bottom: 1em;
`;

const H3 = styled.p`
  font-size: 1.7em;
  font-family: 'COCOGOOSE', sans-serif;
  font-style: DemiBold;
  line-height: 56px;
  color: white;
  text-align: center;
  text-transform: uppercase;

  ${device.tablet} {
    font-size: 1.5em;
  }

  ${device.mobile} {
    font-size: 1em;
  }
`;

const Line = styled.div`
  height: 2px;
  width: 45%;
  background-color: #950900;
  margin: 0.2em 0;
`;

const H4 = styled.div`
  font-size: 1.5em;
  font-family: 'COCOGOOSE', sans-serif;
  line-height: 1.2em;
  color: white;
  text-align: center;
  text-transform: uppercase;
  margin: 5px;

  ${device.tablet} {
    font-size: 1.2em;
  }

  ${device.mobile} {
    font-size: 1em;
  }
`;

const Span = styled.span`
  font-family: 'COCOGOOSE', sans-serif;
  font-size: 1.2em;
  text-transform: uppercase;
`;

const P = styled.p`
  font-size: 1em;
  font-family: 'Berthold', sans-serif;
  color: white;
  text-align: center;

  ${device.mobile} {
    font-size: 0.7em;
  }
`;

const Footer = styled.div`
  font-family: 'Berthold', sans-serif;
  text-align: center;
  width: 70%;
  color: white;
  justify-self: flex-end;
  position: absolute;
  bottom: 0px;
  font-size: 0.8em;

  ${device.tablet} {
    font-size: 0.6em;
    bottom: 1em;
  }
`;

const ImgContainer = styled.div`
  flex: 5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContactContainer = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1em;
`;

const IndexPage = () => (
  <AppLayout>
    <Layout>
      <QuoteStyleTop src={quoteImg} />
      <QuoteStyleBottom src={quoteImg} />
      <ImgContainer>
        <Logo src={logoImg} />
      </ImgContainer>
      <HeaderContainer>
        <H3>
          <Span>N</Span>
          os <Span>e</Span>
          stamos <Span>r</Span>
          enovando
        </H3>
        <Line />
      </HeaderContainer>
      <ContactContainer>
        <H4>Contáctanos</H4>
        <P>rafael@katartico.mx</P>
        <P>(644) 145 1956</P>
      </ContactContainer>
      <Footer>
        Copyright © Todos los derechos reservados. Katartico 2018. Desarrollo
        por Katartico | Octatum
      </Footer>
    </Layout>
  </AppLayout>
);

export default IndexPage;
