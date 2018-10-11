import React from 'react';
import styled from 'styled-components';
import AppLayout from '../components/Layout';

import backgroundImage from '../components/assets/background.svg';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
  padding-top: 1em;
  background-image: url('${backgroundImage}');
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.white};

  h3, h4 {
    padding: 1rem;
    text-align: center;
  }

  h3 {
    font-size: 2em;
    font-weight: bold;
  }

  h4 {
    font-size: 1.5em;
    font-style: italic;
  }
`;

const Portafolio = (props) => (
  <AppLayout>
    <Layout>
      <h3>Still making this site! Thanks for your patience!~</h3>
      <h4>Portafolio → {props.location.pathname}</h4>
    </Layout>
  </AppLayout>
);

export default Portafolio;
