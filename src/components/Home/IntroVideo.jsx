import React from 'react';
import styled from 'styled-components';

import VideoPlayer from './VideoPlayer';
import { device } from '../../utilities/device';
import { StaticQuery, graphql } from 'gatsby';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: none;

  ${device.tablet} {
    display: block;
  }
`;

const IntroVideo = (props) => {
  const { intro } = props.data.pagesJson;

  return (
    <Container>
      <VideoPlayer movie={intro.video} big />
    </Container>
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
    render={(data) => <IntroVideo data={data} {...props} />}
  />
);

