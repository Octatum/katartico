import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { device } from '../utilities/device';

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
  grid-gap: 5%;
  grid-row-gap: 3vmax;
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
`

const GridItem = styled.div`
  position: relative;
  height: 100%;
  max-height: calc(230px + 4em);
  width: 100%;
  max-width: 300px;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background: grey;
  }
`;

const SquarePicture = styled.div`
  width: 100%;
  background: ${props => props.theme.main};

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
  const projects = edges || [];

  return (
    <Layout>
      <Helmet title="Portafolio" />
      <Container>
        <Grid>
          {projects.map((item, index) => (
            <GridItemContainer>
              <GridItem key={index}>
                <Link to={item.node.frontmatter.path}>
                  <SquarePicture />
                </Link>
                <ItemTitle>{item.node.frontmatter.title}</ItemTitle>
              </GridItem>
            </GridItemContainer>
          ))}
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
          filter: { fileAbsolutePath: { regex: "/.+/projects/.+/" } }
        ) {
          edges {
            node {
              frontmatter {
                title
                path
              }
            }
          }
        }
      }
    `}
    render={data => <Portafolio data={data} {...props} />}
  />
);
