import React, { Component } from 'react';
import styled from 'styled-components';
import _ReactPlayer from 'react-player';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 100%;
  width: 100%;
`;

const ReactPlayer = styled(_ReactPlayer)`
  width: ${props => (props.big ? '100vw' : '100%')};
  height: auto;
  max-height: none;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-top: 40px solid transparent;
  border-bottom: 40px solid transparent;
  border-left: calc(40px + 40px * 0.866) solid ${props => props.theme.main};
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;

class VideoPlayer extends Component {
  state = {
    playing: true,
  };

  togglePlayback = () => {
    this.setState(prevState => ({
      playing: !prevState.playing,
    }));
  };

  render = () => (
    <Wrapper>
      <ReactPlayer
        url={this.props.movie}
        playing={this.state.playing}
        playsinline
        muted
        onEnded={this.togglePlayback}
        width="100%"
        height="100%"
        big={this.props.big}
        loop
      />
      {!this.state.playing && <PlayButton onClick={this.togglePlayback} />}
    </Wrapper>
  );
}

export default VideoPlayer;
