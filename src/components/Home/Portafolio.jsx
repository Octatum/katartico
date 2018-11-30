import React from 'react';
import { Link as _Link, StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { device } from '../../utilities/device';

import Section from '../Section';

const Header = styled.h2`
  position: relative;
  padding: 0.8em 0.1em;
  margin-left: 0.5em;
  font-size: 1.5em;
  font-weight: bold;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: -1em;
    right: 0;
    height: 1px;
    background: ${props => props.theme.white};
  }

  ${device.laptop} {
    margin-left: 0.5em;
  }
`;

const Link = styled(_Link)`
  text-decoration: none;
  color: inherit;
`;

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  max-height: 25em;
  margin: 1.5em;
  align-items: center;

  ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 2em;
    height: 20em;
    max-height: none;
    padding: 0 1em;
  }

  ${device.laptop} {
    max-height: 25em;
  }
`;

const GridItem = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  grid-area: ${props => props.area};

  &:nth-child(2n + 1) > img {
    padding-right: 1em;
  }

  &:nth-child(2n) {
    justify-content: flex-end;
  }

  &:nth-child(2n) > img {
    padding-left: 1em;
  }

  ${device.tablet} {
    justify-content: center !important;
    height: 100%;
    padding: 0 10%;

    & > img {
      padding: 0 !important;
    }
  }
`;

const Logo = styled.img`
  height: 100%;
  width: 100%;
  max-width: 150px;
  margin: 1em;

  ${device.tablet} {
    margin: 0;
    max-width: 230px;
  }
`;

const BigPicture = styled('img')`
  width: 90%;
  margin: 3em auto 1em;
`;

const Portafolio = (props) => {
  const { customers, portfolioImage } = props.data.pagesJson;

  return (
    <Section>
      <Header>
        <Link to="/portafolio">Portafolio</Link>
      </Header>
      <LogoGrid>
        {customers.map((item) => (
          <GridItem key={item.logo}>
            <Link to={item.url}>
              <Logo src={item.logo} alt={item.name} />
            </Link>
          </GridItem>
        ))}
      </LogoGrid>
      <BigPicture src={portfolioImage} />
    </Section>
  );
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        pagesJson(
          type: {eq: "page-home"}
        ) {
          customers {
            name
            logo
            url
          }
          portfolioImage
        }
      }
    `}
    render={(data) => <Portafolio data={data} {...props} />}
  />
);
