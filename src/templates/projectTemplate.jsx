import React, { useState } from 'react';
import ReactHelmet from 'react-helmet';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import _ReactMarkdown from 'react-markdown';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import Layout from '../components/Layout';
import { device } from '../utilities/device';
import apostropheImg from '../components/assets/apostrophe.svg';
import PortfolioItem from '../components/Portfolio/PortfolioItem';
import GatsbyImage from 'gatsby-image';
import LocalizedLink from '../components/LocalizedLink';
import { getCurrentLanguage } from '../utilities/functions';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  padding: 2rem 8vw;
  box-sizing: border-box;
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.white};

  ${device.laptop} {
    padding: 2rem 2vw;
    width: 100%;
  }
`;

const ContentLayout = styled('div')`
  width: 100%;
  box-sizing: border-box;
  ${device.laptop} {
    padding: 2rem 5rem;
  }

  max-width: 1984px;
`;

const BackButton = styled(LocalizedLink)`
  position: relative;
  height: 5em;
  align-self: flex-start;
  margin: 1.5em 0;
  text-decoration: none;
  color: inherit;

  ::after {
    content: '${({ content }) => content}';
    position: absolute;
    top: 12px;
    left: 5px;
    font-size: 1.2rem;
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
  grid-auto-rows: minmax(5rem, max-content);
  grid-auto-flow: row dense;
  grid-gap: 1rem;

  ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${device.laptop} {
    grid-gap: 2rem;
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

function ProjectTemplate(props) {
  const { rawMarkdownBody, frontmatter } = props.data.markdownRemark;
  const { bodyEnglish } = frontmatter;
  const pageIsInEnglish = getCurrentLanguage() === 'en';

  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = frontmatter.content
    .filter(item => item.type === 'image')
    .map((imageData, imageIndex) => {
      imageData.imageIndex = imageIndex;
      imageData.src = imageData.image.childImageSharp.fluid.src;

      return imageData;
    });

  const handlePictureClick = index => {
    setPhotoIndex(index);
    setOpen(true);
  };

  return (
    <Layout>
      <Container>
        <BackButton
          to="/portafolio"
          content={pageIsInEnglish ? 'Back' : 'Regresar'}
        >
          <Apostrophe src={apostropheImg} />
        </BackButton>
        <ContentLayout>
          <HeaderContainer>
            <ReactMarkdown
              source={
                pageIsInEnglish && bodyEnglish ? bodyEnglish : rawMarkdownBody
              }
            />
            <HighlightedImageContainer>
              {frontmatter.highlightedImage && (
                <HighlightedImage
                  fluid={frontmatter.highlightedImage.childImageSharp.fluid}
                />
              )}
            </HighlightedImageContainer>
          </HeaderContainer>
          <PhotoGrid>
            {frontmatter.content.map(item => (
              <PortfolioItem
                onImageClick={() => handlePictureClick(item.imageIndex)}
                key={(item.image && item.image.id) || item.videoId}
                item={item}
              />
            ))}
          </PhotoGrid>
        </ContentLayout>
        <BackButton
          to="/portafolio"
          content={pageIsInEnglish ? 'Back' : 'Regresar'}
        >
          <Apostrophe src={apostropheImg} />
        </BackButton>
      </Container>
      {open && (
        <Lightbox
          mainSrc={images[photoIndex].src}
          nextSrc={images[(photoIndex + 1) % images.length].src}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </Layout>
  );
}

export default props => (
  <React.Fragment>
    <ReactHelmet>
      <title>{props.data.markdownRemark.frontmatter.title}</title>
    </ReactHelmet>
    <ProjectTemplate {...props} />
  </React.Fragment>
);

export const pageQuery = graphql`
  query($title: String!) {
    markdownRemark(
      frontmatter: { type: { eq: "project" }, title: { eq: $title } }
    ) {
      rawMarkdownBody
      frontmatter {
        title
        bodyEnglish
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
