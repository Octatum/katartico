import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import GatsbyImg from 'gatsby-image';
import Layout from '../../components/Layout';
import LocalizedLink from '../../components/LocalizedLink';

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
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 5%;
  grid-row-gap: 3vmax;
  max-width: 100%;
  width: 100%;

  .grid::before {
    content: '';
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
`;

const GridItemContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const GridItem = styled.div`
  position: relative;
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
`;

const ItemTitle = styled.p`
  font-size: 1.2em;
  width: 100%;
  margin: 4px 0;
`;

const SquareLink = styled(LocalizedLink)`
  position: relative;
  display: block;
`;

const Overlay = styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(71, 11, 11, 0);
  transition: 0.3s ease-in-out all;

  &:hover {
    background-color: rgba(107, 16, 16, 0.6);
  }
`;

const PortfolioView = ({
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
          {projects.map(item => {
            const route = item.frontmatter.title
              .replace(' ', '_')
              .toLowerCase()
              .replace(/\W/g, '');

            return (
              <GridItemContainer key={route}>
                <GridItem>
                  <SquareLink to={`/project/${route}`}>
                    <SquarePicture
                      fluid={item.frontmatter.banner.childImageSharp.fluid}
                    />
                    <Overlay />
                  </SquareLink>
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

export default PortfolioView;
