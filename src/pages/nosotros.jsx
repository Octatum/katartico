import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import _ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  padding: 4em 6vw;
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.white};
`;

const Introduction = styled.p`
  line-height: 1.2;
  font-size: 17px;
  text-align: center;
  margin: 2rem 0;
`;

const Picture = styled.div`
  height: ${props => (props.large ? '270px' : '200px')};
  width: 100%;
  margin: 1em 0;
  background: ${props => props.theme.main};
`;

const Person = styled.div`
  font-size: 1em;
  text-align: left;
  margin-bottom: 2em;
`;

const ReactMarkdown = styled(_ReactMarkdown)`
  h2 {
    font-size: 1.3em;
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
        <Picture />
        <Introduction center fontSize="1.3">
          ¿Qué piensan de nosotros? Que somos intensos.
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
        {people.map((item, index) => (
          <Person key={index}>
            <Picture />
            <ReactMarkdown source={item.node.rawMarkdownBody} />
          </Person>
        ))}
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
