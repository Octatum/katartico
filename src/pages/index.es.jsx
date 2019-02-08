import React from 'react';
import HomePresentation from '../templates/HomeTemplate';
import { StaticQuery, graphql } from 'gatsby';

const Index = props => {
  return <HomePresentation {...props} />;
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(frontmatter: { type: { eq: "page-home" } }) {
          frontmatter {
            slogan
            intro {
              video {
                publicURL
              }
              image {
                childImageSharp {
                  fluid(maxWidth: 2048) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            customers {
              name
              logo {
                publicURL
              }
              url
            }
            portfolioImage {
              childImageSharp {
                fluid(maxWidth: 2048) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Index data={data} {...props} />}
  />
);
