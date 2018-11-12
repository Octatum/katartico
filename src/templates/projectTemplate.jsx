import React from 'react';
import { Link as _Link, graphql } from 'gatsby';
import styled from 'styled-components';
import _ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout';
import { device } from '../utilities/device';

import apostropheImg from '../components/assets/apostrophe.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  margin: 2rem 8vw;
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.white};
`;

const BackButton = styled(_Link)`
  position: relative;
  height: 6em;
  align-self: flex-start;
  margin: 2em 0;
  text-decoration: none;
  color: inherit;

  ::after {
    content: "Regresar";
    position: absolute;
    top: 10px;
    left: 5px;
    font-size: 1.3rem;
  }
`

const Apostrophe = styled.img`
  height: 100%;
`

const ReactMarkdown = styled(_ReactMarkdown)`
  margin-bottom: 3rem;

  h2 {
    font-size: 1.7em;
    font-weight: bold;
  }

  h3 {
    font-size: 1.4em;
    font-style: italic;
  }

  p {
    padding: 0.5em 0;
  }

  p:first-of-type {
    padding-top: 1em;
  }

  ${device.tablet} {
    h2 {
      font-size: 2em;
    }

    h3 {
      font-size: 1.7em;
    }

    p {
      font-size: 1.2em;
    }
  }
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template: 1fr / 1fr;
  width: 100%;

  ${device.tablet} {
    grid-template-columns: 3.3fr 1fr 2fr 1.5fr 1fr;
    grid-template-rows: 3fr 2.1fr 4fr;
    grid-template-areas:
      'a1 a2 a2 a4 a4'
      'a3 a3 a3 a4 a4'
      'a5 a5 a6 a6 a7';
    grid-gap: 1em;
    position: relative;
    height: 84vw;
    max-height: 750px;
    width: 84vw;
    max-width: 750px;
  }
`;

const Picture = styled.div`
  height: 16em;
  width: calc(100% - 2em);
  margin: 0.5em 1em;
  background: ${props => props.theme.main};

  ${device.tablet} {
    height: 100%;
    width: 100%;
    margin: 0;
    grid-area: ${props => props.area};
  }
`;

export default function Template({ data }) {
  const {
    markdownRemark: { rawMarkdownBody },
  } = data;

  return (
    <Layout>
      <Container>
        <BackButton to="/portafolio">
          <Apostrophe src={apostropheImg} />
        </BackButton>
        <ReactMarkdown source={rawMarkdownBody} />
        <PhotoGrid>
          <Picture area="a1" />
          <Picture area="a2" />
          <Picture area="a3" />
          <Picture area="a4" />
          <Picture area="a5" />
          <Picture area="a6" />
          <Picture area="a7" />
        </PhotoGrid>
        <BackButton to="/portafolio">
          <Apostrophe src={apostropheImg} />
        </BackButton>
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      rawMarkdownBody
    }
  }
`;
