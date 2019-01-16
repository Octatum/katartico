import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import AppLayout from '../components/Layout';
import { device } from '../utilities/device';

import { graphql, StaticQuery } from 'gatsby';
import Service from '../components/Services/Service';

const Layout = styled.div`
  position: relative;
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.white};
  padding: 5rem 5vw;

  grid-gap: 2rem;

  @supports (display: grid) {
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  }

  ${device.laptop} {
    @supports (display: grid) {
      grid-template: 500px / repeat(4, 1fr);

      grid-gap: 0.1rem;
    }
  }
`;

const Services = props => {
  const services = props.data.allMarkdownRemark.edges.map(({ node }) => ({
    ...node.frontmatter,
  }));

  return (
    <AppLayout>
      <Helmet title="Servicios" />
      <Layout>
        {services.map(service => (
          <Service key={service.title} service={service} />
        ))}
      </Layout>
    </AppLayout>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "service" } } }
          sort: { fields: frontmatter___index }
        ) {
          edges {
            node {
              frontmatter {
                title
                banner {
                  childImageSharp {
                    fluid(maxWidth: 500) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                services
              }
            }
          }
        }
      }
    `}
    render={data => <Services data={data} {...props} />}
  />
);
