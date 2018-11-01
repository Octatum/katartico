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

const Viewport = styled.div`
  max-height: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ChildrenContainer = styled.div`
  overflow-y: scroll;
  flex: 5;
`;

const Layout = ({ children, path }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Helmet
        titleTemplate={"%s - Katartico"}
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
      <Viewport>
        <Navbar path={path} />
        <ChildrenContainer>
          <div id="top" />
          {children}
        </ChildrenContainer>
      </Viewport>
    </React.Fragment>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string,
};

export default Layout;
