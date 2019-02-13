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
        markdownRemark(
          frontmatter: { type: { eq: "page-home" }, lang: { eq: "es" } }
        ) {
          frontmatter {
            intro {
              video
            }
            aboutUs {
              title
              slogan
              animation
            }
            homeServices {
              title
              list {
                name
              }
            }
            portfolio {
              title
              image
              customers {
                name
                logo
                url
              }
            }
            contact {
              title
              labels {
                name
                email
                message
                sendButton
              }
            }
          }
        }
      }
    `}
    render={data => <Index data={data} {...props} />}
  />
);
