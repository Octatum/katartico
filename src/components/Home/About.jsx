import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link as _Link, StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { device } from '../../utilities/device';

import Section from '../Section';
import VideoPlayer from './VideoPlayer';

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

const Quote = styled(ReactMarkdown)`
  position: relative;
  padding: 0.7em 0;
  margin: 1em 2em;
  font-size: 1.3em;
  text-align: center;

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 30%;
    height: 2px;
    background: ${props => props.theme.main};
  }

  ${device.laptop} {
    font-size: 1.5em;
  }
`;

const VideoContainer = styled.div`
  background: ${props => props.theme.main};

  > div {
    visibility: hidden;
  }

  ${device.tablet} {
    background: none;

    > div {
      visibility: visible;
    }
  }
`;

const About = (props) => {
  const { slogan, intro } = props.data.pagesJson;

  return (
    <Section>
      <Header>
        <Link to="/nosotros">Nosotros</Link>
      </Header>
      <Link to="/nosotros">
        <Quote source={slogan} />
      </Link>
      <VideoContainer>
        <VideoPlayer movie={intro.video} />
      </VideoContainer>
    </Section>
  );
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        pagesJson(type: {eq: "page-home"}) {
          slogan
          intro {
            video
            image
          }
        }
      }
    `}
    render={(data) => <About data={data} {...props} />}
  />
);
