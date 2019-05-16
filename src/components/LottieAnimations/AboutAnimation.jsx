import ReactLottie from 'react-lottie';
import React from 'react';
import Loadable from 'react-loadable';

const AboutAnimation = Loadable.Map({
  loader: {
    animationData: () => import('./assets/anim_nosotros.json'),
  },
  loading: () => <div />,
  render(loaded, props) {
    const { animationData } = loaded;
    const { pauseAnimation } = props;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData,
    };
    return (
      <ReactLottie
        options={defaultOptions}
        isPaused={pauseAnimation}
        isStopped={pauseAnimation}
      />
    );
  },
});

export default AboutAnimation;
