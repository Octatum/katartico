import React, { useContext } from 'react';
import ReactLottie from 'react-lottie';

import animationData from './assets/anim_nosotros.json';
import { LandingContext } from '../Layout/index.jsx';

function AboutAnimation() {
  const [pauseAnimation] = useContext(LandingContext);
  const defaultOptions = {
    loop: true,
    autoplay: !pauseAnimation,
    animationData,
  };

  return (
    <ReactLottie
      options={defaultOptions}
      isPaused={pauseAnimation}
      isStopped={pauseAnimation}
    />
  );
}

export default AboutAnimation;
