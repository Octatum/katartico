import React from 'react';
import HomePresentation from '../templates/HomeTemplate';
import { StaticQuery, graphql } from 'gatsby';

const Index = props => {
  const contact = {
    title: "Contact",
    labels: {
      name: "Name",
      email: "Email",
      message: "Message",
      sendButton: "Send"
    }
  };
  return <HomePresentation {...props} contact={contact} />;
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(
          frontmatter: { type: { eq: "page-home" }, lang: { eq: "en" } }
        ) {
          frontmatter {
            intro {
              video {
                publicURL
              }
            }
            aboutUs {
              title
              slogan
              animation
            }
            homeServices {
              title
              list
            }
            portfolio {
              title
              image {
                publicURL
              }
              customers {
                name
                logo {
                  publicURL
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
