import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';

const Header = styled.h1`
  font-size: 3em;
  color: darkred;
`;


const IndexPage = () => (
  <Layout>
    <Header>Hi people</Header>
  </Layout>
);

export default IndexPage;
