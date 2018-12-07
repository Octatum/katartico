import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import Helmet from 'react-helmet';
import { HomeLayout } from '../components/Layout';

import IntroVideo from '../components/Home/IntroVideo';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import Portafolio from '../components/Home/Portafolio';
import Contact from '../components/Home/Contact';
import Landing from '../components/Home/Landing';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  padding: 3em 0;
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.white};
`;

const IndexPage = props => (
  <HomeLayout path={props.location.pathname}>
    <Helmet title="Inicio" />
    <Container>
      <IntroVideo />
      <About />
      <Services />
      <Portafolio />
      <Element name="contacto">
        <Contact />
      </Element>
    </Container>
  </HomeLayout>
);

export default IndexPage;
