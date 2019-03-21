import React, { useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { LandingContext } from '../../components/Layout';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: calc(90vh - 110px);
  width: 100%;
`;

const ReactPlayer = styled('video')`
  width: 100%;
  height: auto;
  max-height: none;
  filter: initial;
  -webkit-filter: contrast(120%);
`;

function VideoPlayer(props) {
  const [showLanding] = useContext(LandingContext);
  const videoRef = useRef();

  useEffect(() => {
    console.log(showLanding);
    if (!showLanding) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [showLanding]);

  return (
    <Wrapper>
      <ReactPlayer ref={videoRef} playsinline muted loop autoPlay>
        <source src={props.movie} />
      </ReactPlayer>
    </Wrapper>
  );
}

export default VideoPlayer;
