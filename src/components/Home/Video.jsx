import React, { Component } from 'react';
import styled from 'styled-components';

import Section from '../Section';
import _ReactPlayer from 'react-player';
import movie from '../assets/intro_animation.mp4';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 100%;
  width: 100%;
`

const ReactPlayer = styled(_ReactPlayer)`
  width: 100%;
  height: auto;
  max-height: 360px;
`

const PlayButton = styled.i`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${props => props.theme.main};
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`

class Video extends Component {
  state = {
    playing: false
  }

  playerRef = React.createRef();

  togglePlayback = () => {
    this.setState((prevState) => ({
      playing: !prevState.playing
    }));
  }

  render = () => (
    <Section>
      <Wrapper>
        <ReactPlayer
          url={movie}
          playing={this.state.playing}
          muted
          onEnded={this.togglePlayback}
        />
        {!this.state.playing &&
          <PlayButton onClick={this.togglePlayback} className="fas fa-play fa-6x"/>
        }
      </Wrapper>
    </Section>
  )
}

export default Video;
