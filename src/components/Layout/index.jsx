import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import ChildViewport from '../ChildViewport';

import '../assets/font-awesome-all.css';

import './index.css';

const theme = {
  white: '#fff',
  main: '#950900',
  black: '#000',
};

const GeneralLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Helmet
        titleTemplate={'Katartico Agencia de Publicidad - %s'}
        meta={[
          { name: 'description', content: 'Creando momentos Katarticos.' },
          { name: 'keywords', content: 'Agencia de publicidad, publicidad, agencia de marketing, marketing digital, marketing' },
        ]}
      >
        <html lang="en" />
      </Helmet>
      {children}
    </React.Fragment>
  </ThemeProvider>
);

function Layout(props) {
  return (
    <GeneralLayout>
      <ChildViewport {...props} />
    </GeneralLayout>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string,
};

export default Layout;

export const HomeLayout = props => (
  <GeneralLayout>
    <ChildViewport includeLanding={true} {...props} />
  </GeneralLayout>
);
