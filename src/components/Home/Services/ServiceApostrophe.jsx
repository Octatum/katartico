import React, { Component } from 'react';
import styled from 'styled-components';
import { Link as _Link } from 'gatsby';
import ReactLottie from 'react-lottie';

import animationData from './assets/apostrophe-animation.json';
import { device } from '../../../utilities/device';

const Link = styled(_Link)`
  text-decoration: none;
  color: inherit;
`;

const Item = styled.div`
  flex: 1 1 50%;
  display: flex;
  justify-content: center;
  padding: 1em;

  ${device.tablet} {
    flex: 1;
  }
`;

const Text = styled.p`
  position: absolute;
  top: 10%;
  right: 10%;
  font-size: 0.8rem;
  font-weight: regular;

  ${device.tablet} {
    font-size: 1rem;
    top: 12px;
    right: 10%;
    width: 4rem;
  }

  ${device.laptop} {
    font-size: 1.6rem;
    top: 15%;
    right: 13%;
    width: 10rem;
  }
`;

const AnimationArea = styled('div')`
  position: relative;
  --size: 6rem;
  height: var(--size);
  width: var(--size);

  ${device.tablet} {
    --size: 9rem;
  }

  ${device.laptop} {
    --size: 16rem;
  }
`;

class ServiceApostrophe extends Component {
  state = {
    direction: 1,
  };

  constructor(props) {
    super(props);

    this.mouseInHandler = this.mouseInHandler.bind(this);
    this.mouseOutHandler = this.mouseOutHandler.bind(this);
  }

  componentDidMount() {
    this.setState(() => {
      return {
        direction: -1,
      };
    });
  }

  mouseInHandler() {
    this.setState(() => {
      return {
        direction: 1,
      };
    });
  }

  mouseOutHandler() {
    this.setState(() => {
      return {
        direction: -1,
      };
    });
  }

  render() {
    const { item } = this.props;
    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData,
    };

    return (
      <Item key={item}>
        <Link
          to="/servicios"
          onMouseEnter={this.mouseInHandler}
          onMouseLeave={this.mouseOutHandler}
        >
          <AnimationArea>
            <ReactLottie
              speed={1.5}
              options={defaultOptions}
              direction={this.state.direction}
            />
            <Text>{item}</Text>
          </AnimationArea>
        </Link>
      </Item>
    );
  }
}
export default ServiceApostrophe;
