import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  padding: 5rem 8vw;
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.white};
`;

const MarkdownContainer = styled.div`
  h2 {
    font-size: 1.5em;
  }

  h3 {
    font-size: 1.3em;
  }

  p {
    padding: 0.5em 0;
  }

  p:first-of-type {
    padding-top: 1em;
  }
`

export default function Template({ data }) {
  const {
    markdownRemark: {
      frontmatter,
      html
    }
  } = data;

  return (
    <Layout>
      <Container>
        <MarkdownContainer dangerouslySetInnerHTML={{__html: html}} />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      frontmatter {
        title
        path
      }
      html
    }
  }
`
