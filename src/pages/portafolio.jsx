import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { device } from '../utilities/device';
import GatsbyImg from 'gatsby-image';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 5rem 7vw;
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.white};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 19rem;
  grid-gap: 5%;
  grid-row-gap: 3vmax;
  max-width: 100%;
  width: 100%;

  ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const GridItemContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const GridItem = styled.div`
  position: relative;
  max-width: 300px;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background: grey;
  }
`;

const SquarePicture = styled(GatsbyImg)`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.main};
  background-size: cover;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(71, 11, 11, 0);
    transition: 0.3s ease-in-out all;
  }

  &:hover::before {
    background-color: rgba(107, 16, 16, 0.6);
  }

  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

const ItemTitle = styled.p`
  font-size: 1.2em;
  width: 100%;
  margin: 4px 0;
`;

const Portafolio = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const projects = edges.map(({ node }) => ({ ...node }));

  return (
    <Layout>
      <Helmet title="Portafolio" />
      <Container>
        <Grid>
          {projects.map((item, index) => {
            const route = item.frontmatter.title
              .replace(' ', '_')
              .toLowerCase()
              .replace(/\W/g, '');

            return (
              <GridItemContainer>
                <GridItem key={index}>
                  <Link to={`/project/${route}`}>
                    <SquarePicture fluid={item.frontmatter.banner.childImageSharp.fluid} />
                  </Link>
                  <ItemTitle>{item.frontmatter.title}</ItemTitle>
                </GridItem>
              </GridItemContainer>
            );
          })}
        </Grid>
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
          filter: { frontmatter: { type: { eq: "project" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                banner {
                  childImageSharp {
                    fluid(maxWidth: 400, maxHeight: 400) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Portafolio data={data} {...props} />}
  />
);
