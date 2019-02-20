import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import Helmet from 'react-helmet';

import { HomeLayout } from '../components/Layout';
import IntroVideo from '../page-components/home/IntroVideo';
import About from '../page-components/home/About';
import Services from '../page-components/home/Services';
import Portafolio from '../page-components/home/Portafolio';
import Contact from '../page-components/home/Contact';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 1em;
  padding-bottom: 3em;
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.white};
`;

const Presentation = props => {
  const { location } = props;
  const {
    intro,
    aboutUs,
    homeServices,
    portfolio,
    contact,
  } = props.data.markdownRemark.frontmatter;

  return (
    <HomeLayout path={location.pathname}>
      <Helmet title="Inicio" />
      <Container>
        <IntroVideo data={intro} />
        <About data={aboutUs} />
        <Services data={homeServices} />
        <Portafolio data={portfolio} />
        <Element name="contacto">
          <Contact data={contact} />
        </Element>
      </Container>
    </HomeLayout>
  );
};

export default Presentation;
