import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';

import Video from '../components/Home/Video';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import Portafolio from '../components/Home/Portafolio';
import Contact from '../components/Home/Contact';

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
  <Layout path={props.location.pathname}>
    <Helmet title="Inicio" />
    <Container>
      <About />
      <Services />
      <Portafolio />
      <Element name="contact">
        <Contact />
      </Element>
    </Container>
  </Layout>
);

export default IndexPage;
