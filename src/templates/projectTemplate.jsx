import React, { Component } from 'react';
import ReactHelmet  from 'react-helmet';
import { Link as _Link, graphql } from 'gatsby';
import styled from 'styled-components';
import _ReactMarkdown from 'react-markdown';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import Layout from '../components/Layout';
import { device } from '../utilities/device';
import apostropheImg from '../components/assets/apostrophe.svg';
import PortfolioItem from '../components/Portfolio/PortfolioItem';
import GatsbyImage from 'gatsby-image';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  margin: 2rem 8vw;
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.white};

  ${device.laptop} {
    margin: 2rem 2vw;
  }
`;

const ContentLayout = styled('div')`
  ${device.laptop} {
    margin: 2rem 5rem;
  }
`;

const BackButton = styled(_Link)`
  position: relative;
  height: 4em;
  align-self: flex-start;
  margin: 2em 0;
  text-decoration: none;
  color: inherit;

  ::after {
    content: 'Regresar';
    position: absolute;
    top: 8px;
    left: 5px;
    font-size: 1rem;
  }
`;

const Apostrophe = styled.img`
  height: 100%;
`;

const ReactMarkdown = styled(_ReactMarkdown)`
  margin-bottom: 3rem;

  h1 {
    font-size: 1.7em;
    font-weight: bold;
  }

  h2 {
    font-size: 1.4em;
    font-style: italic;
  }

  em {
    font-style: italic;
  }

  p {
    padding: 0.5em 0;
  }

  p:first-of-type {
    padding-top: 1em;
  }

  ${device.tablet} {
    flex: 3;
    h1 {
      font-size: 2.2em;
    }

    h2 {
      font-size: 1.6em;
    }

    p {
      font-size: 1.2em;
    }
    margin-right: 2rem;
  }

  ${device.laptop} {
    flex: 3;
    margin: 0;
    margin-right: 5vw;
  }
`;

const PhotoGrid = styled.div`
  display: grid;
  width: 100%;
  margin: 1em 0;
  grid-template-columns: 1fr;
  grid-auto-rows: 15rem;
  grid-auto-flow: row dense;
  grid-gap: 1em;

  ${device.tablet} {
    grid-template-columns: 3.3fr 1fr 2fr 1.5fr 1fr;
    position: relative;
    width: 84vw;
  }

  ${device.laptop} {
    grid-template-columns: 1fr 1fr 0.7fr;
    grid-gap: 2em;
    width: 100%;
  }
`;

const HeaderContainer = styled('div')`
  display: flex;

  flex-direction: column;

  ${device.tablet} {
    flex-direction: row;
  }
`;

const HighlightedImageContainer = styled('div')`
  flex: 2;
`;

const HighlightedImage = styled(GatsbyImage)`
  width: 100%;
`;

export default class Template extends Component {
  state = {
    photoIndex: 0,
    isOpen: false,
  };

  constructor(props) {
    super(props);

    const images = this.props.data.markdownRemark.frontmatter.content.filter(item => item.type === "image").map((imageData, imageIndex) => {
      imageData.imageIndex = imageIndex;
      imageData.src = imageData.image.childImageSharp.fluid.src;

      return imageData;
    });

    this.images = images;
  }

  handlePictureClick = index => {
    console.log(index);
    return () => {
      this.setState(() => ({
        photoIndex: index,
        isOpen: true,
      }));
    };
  };

  render() {
    const { markdownRemark } = this.props.data;
    const { rawMarkdownBody, frontmatter } = markdownRemark;
    const { photoIndex, isOpen } = this.state;
    return (
      <Layout>
        <ReactHelmet>
          <title>{frontmatter.title}</title>
        </ReactHelmet>
        <Container>
          <BackButton to="/portafolio">
            <Apostrophe src={apostropheImg} />
          </BackButton>
          <ContentLayout>
            <HeaderContainer>
              <ReactMarkdown source={rawMarkdownBody} />
              <HighlightedImageContainer>
                <HighlightedImage fluid={frontmatter.highlightedImage.childImageSharp.fluid} />
              </HighlightedImageContainer>
            </HeaderContainer>
            <PhotoGrid>
              {frontmatter.content.map((item) => (
                <PortfolioItem
                  onImageClick={this.handlePictureClick(item.imageIndex)}
                  key={(item.image && item.image.id ) || item.videoId}
                  item={item}
                />
              ))}
            </PhotoGrid>
          </ContentLayout>
          <BackButton to="/portafolio">
            <Apostrophe src={apostropheImg} />
          </BackButton>
        </Container>
        {isOpen && (
          <Lightbox
            mainSrc={this.images[photoIndex].src}
            nextSrc={this.images[(photoIndex + 1) % this.images.length].src}
            prevSrc={this.images[(photoIndex + this.images.length - 1) % this.images.length].src}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + this.images.length - 1) % this.images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % this.images.length,
              })
            }
          />
        )}
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query($title: String!) {
    markdownRemark(
      frontmatter: { type: { eq: "project" }, title: { eq: $title } }
    ) {
      rawMarkdownBody
      frontmatter {
        title
        content {
          height
          type
          image {
            id
            childImageSharp {
              fluid(maxWidth: 2048) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          videoId
          width
        }
        highlightedImage {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
