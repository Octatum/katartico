import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import ChildViewport from '../ChildViewport';
import { CookiesProvider } from 'react-cookie';

import '../assets/font-awesome-all.css';

import './index.css';
import HomeViewport from '../../page-components/home/HomeViewport';

const theme = {
  white: '#fff',
  main: '#950900',
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
        </Helmet>
        <HomeViewport path={path} children={children} />
      </React.Fragment>
    </ThemeProvider>
  </CookiesProvider>
);
