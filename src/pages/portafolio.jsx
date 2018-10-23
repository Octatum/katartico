import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  padding: 5rem 10vw;
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.white};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5% 10%;
  width: 100%;
`

const GridItem = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background: grey;
  }
`

const SquarePicture = styled.div`
  width: 100%;
  background: ${props => props.theme.main};

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`

const ItemTitle = styled.p`
  font-size: 1.2em;
  width: 100%;
  margin: 4px 0;
`

const Portafolio = ({
  data: {
    allMarkdownRemark: {
      edges: projects
    }
  }
}) => (
  <Layout>
    <Container>
      <Grid>
        {projects.map((item, index) => (
          <GridItem key={index}>
            <Link to={item.node.frontmatter.path}>
              <SquarePicture />
            </Link>
            <ItemTitle>{item.node.frontmatter.title}</ItemTitle>
          </GridItem>
        ))}
      </Grid>
    </Container>
  </Layout>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
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
