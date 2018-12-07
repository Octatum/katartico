import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import AppLayout from '../components/Layout';
import { device } from '../utilities/device';

import branding from '../components/Services/assets/branding.png';
import campania from '../components/Services/assets/campania.png';
import ejecuciones from '../components/Services/assets/ejecuciones.png';
import presencia from '../components/Services/assets/presencia.png';
import { graphql, StaticQuery } from 'gatsby';

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

const Item = styled.div`
  width: 100%;
  max-height: 230px;
  max-width: 230px;
  margin: 0 auto;
  background-image: url('${({ image }) => image}');
  background-size: cover;
  background-position: center;
  position: relative;
  transition: 0.3s linear all;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(71, 11, 11, 0.5);
    transition: inherit;
  }

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  &:hover {
    ::before {
      background-color: rgba(71, 11, 11, 0.8);
    }
  }

  color: white;
  text-align: center;
  text-shadow: 0px 0.3em 0.3em black;

  ${device.tablet} {
    max-height: 300px;
    max-width: 300px;
  }

  ${device.laptop} {
    height: 30em;
    max-height: none;
    max-width: 260px;

    &::after {
      display: none;
    }
  }
`;

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 100%;
  width: 100%;
  font-size: 0.8rem;

  ${device.tablet} {
    font-size: 1.2rem;
  }
`;

const ElementHeader = styled.div`
  text-transform: uppercase;
  max-width: 95%;

  ${Item}:hover & {
    position: absolute;
    bottom: 60%;
  }

  ${Item}:hover &::after {
    content: '';
    display: block;
    background-image: radial-gradient(
      at center center,
      white,
      rgba(255, 255, 255, 0) 70%
    );
    height: 0.2em;
    width: 100%;
    margin-top: 0.5em;
    margin-bottom: 0.75em;
    transition: inherit;
  }

  ${device.laptop} {
    max-width: 85%;

    ${Item}:hover & {
      bottom: 50%;
    }
  }
`;

const ElementBody = styled.div`
  max-width: 90%;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 0;
  transform: scaleY(0);
  font-size: 0.9em;

  ${Item}:hover & {
    position: absolute;
    top: 40%;
    bottom: 0;
    height: auto;
    transform: scaleY(1);
  }

  ${device.laptop} {
    width: 80%;

    ${Item}:hover & {
      top: 50%;
    }
  }
`;

const ListItem = styled.div`
  padding-bottom: 0.5em;
`;

const content = [
  {
    image: branding,
    header: 'Construcción de marca',
    body: (
      <ElementBody>
        <ListItem>Naming</ListItem>
        <ListItem>Branding</ListItem>
      </ElementBody>
    ),
  },
  {
    image: campania,
    header: 'Campañas publicitarias',
    body: (
      <ElementBody>
        <ListItem>ATL</ListItem>
        <ListItem>BTL</ListItem>
      </ElementBody>
    ),
  },
  {
    image: ejecuciones,
    header: 'Ejecuciones creativas',
    body: (
      <ElementBody>
        <ListItem>Diseño gráfico</ListItem>
        <ListItem>Fotografía</ListItem>
        <ListItem>Video</ListItem>
      </ElementBody>
    ),
  },
  {
    image: presencia,
    header: 'Presencia digital',
    body: (
      <ElementBody>
        <ListItem>Desarrollo web</ListItem>
        <ListItem>Community management</ListItem>
        <ListItem>Marketing digital</ListItem>
      </ElementBody>
    ),
  },
];

const Services = props => {
  const services = props.data.allMarkdownRemark.edges.map(({node}) => ({...node.frontmatter}));

  return (
    <AppLayout>
      <Helmet title="Servicios" />
      <Layout>
        {services.map((service) => (
          <Item key={service.title} image={service.banner}>
            <ItemContent>
              <ElementHeader>{service.title}</ElementHeader>
              <ElementBody>
                {service.services.map(s => (
                  <ListItem key={s}>{s}</ListItem>
                ))}
              </ElementBody>
            </ItemContent>
          </Item>
        ))}
      </Layout>
    </AppLayout>
  );
}

export default (props) => (
  <StaticQuery 
    query={graphql`
      query {
        allMarkdownRemark(
          filter: {frontmatter: {type: {eq: "service"}}}
          sort: {fields: frontmatter___index}
        ) {
          edges {
            node {
              frontmatter {
                title
                banner
                services
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <Services data={data} {...props} />
    )}
  />
)