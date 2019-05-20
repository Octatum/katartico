import React, { useContext } from 'react';
import ReactLottie from 'react-lottie';

import animationData from './assets/anim_intro.json';
import { LandingContext } from '../Layout/index.jsx';

function IntroAnimation() {
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

export default IntroAnimation;
