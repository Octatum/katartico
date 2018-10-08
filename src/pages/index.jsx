import React from 'react';
import styled from 'styled-components';
import AppLayout from '../components/Layout';

import backgroundImage from '../components/assets/background.svg';
import About from '../components/Home/About';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  padding-top: 1em;
  background-image: url('${backgroundImage}');
  background-color: black;
  color: white;
`;

const IndexPage = () => (
  <AppLayout>
    <Layout>
      <About/>
    </Layout>
  </AppLayout>
);

export default IndexPage;
