import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PortfolioView from '../page-components/Portfolio/View';

function Portafolio(props) {
  return <PortfolioView {...props} />;
}

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
