import React, { Component } from 'react';
import styled from 'styled-components';
import { device } from '../../utilities/device';

import Section from '../Section';
import _ReactPlayer from 'react-player';
import movie from '../assets/intro_animation.mp4';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 100%;
  width: 100%;
`;

const ReactPlayer = styled(_ReactPlayer)`
  width: 100%;
  height: auto;
  max-height: 360px;

  ${device.laptop} {
    max-height: 540px;
  }
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

class Video extends Component {
  state = {
    playing: false,
  };

  playerRef = React.createRef();

  togglePlayback = () => {
    this.setState(prevState => ({
      playing: !prevState.playing,
    }));
  };

  render = () => (
    <Section>
      <Wrapper>
        <ReactPlayer
          url={movie}
          playing={this.state.playing}
          playsinline
          muted
          onEnded={this.togglePlayback}
          width='100%'
          height='100%'
        />
        {!this.state.playing && <PlayButton onClick={this.togglePlayback} />}
      </Wrapper>
    </Section>
  );
}

export default Video;
