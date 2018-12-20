import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import ChildViewport from '../ChildViewport';
import { CookiesProvider } from 'react-cookie';

import './index.css';
import HomeViewport from '../Home/HomeViewport';

const theme = {
  white: '#fff',
  main: '#9c2420',
  black: '#000',
};

const Layout = ({ children, path }) => (
  <CookiesProvider>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Helmet
          titleTemplate={'Katartico Agencia de Publicidad - %s'}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
            integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
            crossOrigin="anonymous"
          />
        </Helmet>
        <ChildViewport path={path} children={children} />
      </React.Fragment>
    </ThemeProvider>
  </CookiesProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string,
};

export default Layout;

export const HomeLayout = ({ children, path }) => (
  <CookiesProvider>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Helmet
          titleTemplate={'Katartico Agencia de Publicidad - %s'}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
            integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
            crossOrigin="anonymous"
          />
        </Helmet>
        <HomeViewport path={path} children={children} />
      </React.Fragment>
    </ThemeProvider>
  </CookiesProvider>
);
