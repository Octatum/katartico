import React from 'react';
import styled from 'styled-components';

import VideoPlayer from './VideoPlayer';
import movie from '../assets/intro_animation.mp4';
import { device } from '../../utilities/device';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: none;

  ${device.tablet} {
    display: block;
  }
`;

const IntroVideo = () => (
  <Container>
    <VideoPlayer movie={movie} big />
  </Container>
);

export default IntroVideo;