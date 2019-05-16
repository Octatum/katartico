import React, { useContext } from 'react';
import styled from 'styled-components';

import { device } from '../../utilities/device';
import { IntroAnimation } from '../../components/LottieAnimations';
import { LandingContext } from '../../components/Layout';

const Container = styled.div`
  width: 100%;
  height: 70vh;

  ${device.tablet} {
    display: block;
  }
`;

const IntroVideo = props => {
  const [pauseAnimation] = useContext(LandingContext);

  return (
    <Container>
      <IntroAnimation pauseAnimation={pauseAnimation} />
    </Container>
  );
};
export default IntroVideo;
