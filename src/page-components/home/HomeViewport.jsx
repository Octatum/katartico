import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import Waypoint from 'react-waypoint';

import Navbar from '../../components/Navbar';
import Landing from './Landing';
import { device } from '../../utilities/device';

const Viewport = styled.div``;

const Footer = styled.div`
  margin: 0 auto;
  max-width: 90%;
  padding: 4em 0 1em;
  color: ${props => props.theme.white};
  text-align: center;
  font-size: 0.9em;
`;
const DisplayDiv = styled('div')`
  display: block;

  ${device.tablet} {
    display: inline;
  }
`;

class HomeViewport extends React.Component {
  state = {
    shouldMinimizeNavbar: false,
    scrollableAncestor: null,
  };

  componentDidMount() {
    if (typeof window === 'undefined') return;

    this.setState(() => {
      return { scrollableAncestor: window };
    });
  }

  constructor(props) {
    super(props);

    this.handleWaypointPositionChange = this.handleWaypointPositionChange.bind(
      this
    );
  }

  handleWaypointPositionChange(position) {
    this.setState(() => {
      return {
        shouldMinimizeNavbar: position.currentPosition === 'above',
      };
    });
  }

  render() {
    return (
      <Viewport>
        <Landing />
        <Navbar
          path={this.props.path}
          minimize={this.state.shouldMinimizeNavbar}
        />
        <div id="mainContainer">
          <Element name="top">
            <Waypoint
              scrollableAncestor={this.state.scrollableAncestor}
              onPositionChange={this.handleWaypointPositionChange}
            />
            {this.props.children}
            <Footer>
              Copyright &copy; Todos los derechos reservados. <DisplayDiv>Katartico 2019.</DisplayDiv>
            </Footer>
          </Element>
        </div>
      </Viewport>
    );
  }
}

export default HomeViewport;
