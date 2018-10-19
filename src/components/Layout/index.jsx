import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';

import Navbar from '../Navbar';
import './index.css';

const theme = {
  white: '#fff',
  main: '#9c2420',
  black: '#000',
};

const Layout = ({ children, path }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Helmet
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
        integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
        crossOrigin="anonymous"
      />
      <div id="top" />
      <Navbar path={path} />
      {children}
    </React.Fragment>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string,
};

export default Layout;
