import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import Helmet from 'react-helmet';

import { HomeLayout } from '../../components/Layout';
import IntroVideo from './IntroVideo';
import About from './About';
import Services from './Services';
import Portafolio from './Portafolio';
import Contact from './Contact';
import { StaticQuery, graphql } from 'gatsby';

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
  const { intro, slogan, customers, portfolioImage } = props.data.pagesJson;

  return (
    <HomeLayout path={location.pathname}>
      <Helmet title="Inicio" />
      <Container>
        <IntroVideo data={intro} />
        <About data={slogan} />
        <Services />
        <Portafolio data={{customers, portfolioImage}} />
        <Element name="contacto">
          <Contact />
        </Element>
      </Container>
    </HomeLayout>
  );
}


export default props => (
  <StaticQuery
    query={graphql`
      query {
        pagesJson(type: { eq: "page-home" }) {
          slogan
          intro {
            video
            image
          }
          customers {
            name
            logo
            url
          }
          portfolioImage
        }
      }
    `}
    render={data => <Presentation data={data} {...props} />}
  />
);
