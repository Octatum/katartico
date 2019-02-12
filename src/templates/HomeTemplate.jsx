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
  padding: 3em 0;
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.white};
`;

const Presentation = props => {
  const { location } = props;
  const {
    intro,
    slogan,
    customers,
    portfolioImage,
  } = props.data.markdownRemark.frontmatter;

  return (
    <HomeLayout path={location.pathname}>
      <Helmet title="Inicio" />
      <Container>
        <IntroVideo data={intro} />
        <About data={slogan} />
        <Services />
        <Portafolio data={{ customers, portfolioImage }} />
        <Element name="contacto">
          <Contact />
        </Element>
      </Container>
    </HomeLayout>
  );
};

export default Presentation;
