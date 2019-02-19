import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 100%;
  width: 100%;
`;

const ReactPlayer = styled('video')`
  width: 100%;
  height: auto;
  max-height: none;
  -webkit-filter: contrast(120%);
`;

function VideoPlayer(props) {
  return (
    <Wrapper>
      <ReactPlayer
        playsinline
        muted
        loop
        autoPlay
      >
        <source src={props.movie} />
      </ReactPlayer>
    </Wrapper>
  );
}

export default VideoPlayer;
