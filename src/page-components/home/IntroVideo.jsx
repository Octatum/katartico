import React from 'react';
import styled from 'styled-components';

import VideoPlayer from './VideoPlayer';
import { device } from '../../utilities/device';

const Container = styled.div`
  width: 100%;
  display: none;

  ${device.tablet} {
    display: block;
  }
`;

const IntroVideo = props => {
  const intro = props.data;

  return (
    <Container>
      <VideoPlayer movie={intro.video.publicURL} big />
    </Container>
  );
};
export default IntroVideo;
