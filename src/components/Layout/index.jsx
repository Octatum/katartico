import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import ChildViewport from '../ChildViewport';

import '../assets/font-awesome-all.css';

import './index.css';
import { useSessionStorage } from 'react-use';

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
          {
            name: 'keywords',
            content:
              'Agencia de publicidad, publicidad, agencia de marketing, marketing digital, marketing',
          },
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

export const LandingContext = React.createContext(null);

export const HomeLayout = props => {
  const initialValue = 'true';
  const [showLanding, setShowLanding] = useSessionStorage(
    'showLanding',
    initialValue
  );

  function hideLanding() {
    setShowLanding('false');
  }

  return (
    <GeneralLayout>
      <LandingContext.Provider
        value={[showLanding === initialValue, hideLanding]}
      >
        <ChildViewport includeLanding={true} {...props} />
      </LandingContext.Provider>
    </GeneralLayout>
  );
};
