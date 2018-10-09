import React from 'react';
import styled from 'styled-components';
import AppLayout from '../components/Layout';

import backgroundImage from '../components/assets/background.svg';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import Portafolio from '../components/Home/Portafolio';
import Contact from '../components/Home/Contact';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  padding-top: 1em;
  background-image: url('${backgroundImage}');
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.white};
`;

const IndexPage = () => (
  <AppLayout>
    <Layout>
      <About/>
      <Services/>
      <Portafolio/>
      <Contact/>
    </Layout>
  </AppLayout>
);

export default IndexPage;
