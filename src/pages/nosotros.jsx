import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import fotoKat from '../components/assets/fotoKatartico.jpg';
import fotoRafa from '../components/assets/fotoRafa.jpg';
import fotoMaria from '../components/assets/fotoMaria.jpg';
import _ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout';
import { device } from '../utilities/device';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  padding: 3em 6vw 1em;
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.white};
`;

const Introduction = styled.p`
  line-height: 1.2;
  font-size: 17px;
  text-align: center;
  margin: 2rem 0;

  ${device.tablet} {
    font-size: 1.3em;
  }
`;

const Picture = styled.img`
  
  width: 100%;
  margin: 1em 0;
  background: ${props => props.theme.main};

  ${device.tablet} {
    height: auto;
  }
`;

const PeopleDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${device.laptop} {
    flex-direction: row;
    justify-content: space-around;
  }
`

const Person = styled.div`
  font-size: 1em;
  text-align: left;
  margin-bottom: 2em;

  ${device.laptop} {
    width: 40%;
    max-width: 400px;
    margin: 0 1em 1em;
  }
`;

const PersonPicture = styled(Picture)`
  ${device.laptop} {
    height: 250px;
  }
`

const ReactMarkdown = styled(_ReactMarkdown)`
  h2 {
    font-size: 1.5em;
    font-weight: bold;
    width: 100%;
  }

  p {
    font-size: 17px;
    line-height: 1.2;
    margin: 1em 0;
  }

  em {
    font-style: italic;
  }

  ${device.tablet} {
    h2 {
      font-size: 2em;
    }
  }
`

const About = props => {
  const {
    data: {
      allMarkdownRemark: { edges: people },
    },
  } = props;

  return (
    <Layout path={props.location.pathname}>
      <Helmet title="Nosotros" />
      <Container>
        <Picture src = {fotoKat} />
        <Introduction center fontSize="1.3">
          ¿Qué piensan de nosotros? &nbsp; Que somos intensos.
          <br />
          <br />
          Decidimos plasmar esa intensidad en un proyecto tangible.
          <br />
          <br />
          <strong>
            Katartico es la combinación de nuestras habilidades y la pasión con
            la que hacemos las cosas.
          </strong>
        </Introduction>
        <PeopleDiv>
          {people.map((item, index) => (
            <Person key={index}>
              <PersonPicture />
              <ReactMarkdown source={item.node.rawMarkdownBody} />
            </Person>
          ))}
        </PeopleDiv>
      </Container>
    </Layout>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: { fields: frontmatter___index }
          filter: { fileAbsolutePath: { regex: "/.+/about/.+/" } }
        ) {
          edges {
            node {
              rawMarkdownBody
            }
          }
        }
      }
    `}
    render={data => <About data={data} {...props} />}
  />
);
