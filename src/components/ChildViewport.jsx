import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Waypoint from 'react-waypoint';

const Viewport = styled.div`
  max-height: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ChildrenContainer = styled.div`
  overflow-y: scroll;
  flex: 5;
`;

class ChildViewport extends React.Component {
  state = {
    shouldMinimizeNavbar: false,
  };
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
        <Navbar
          path={this.props.path}
          minimize={this.state.shouldMinimizeNavbar}
        />
        <ChildrenContainer>
          <Waypoint onPositionChange={this.handleWaypointPositionChange} />
          {this.props.children}
        </ChildrenContainer>
      </Viewport>
    );
  }
}

export default ChildViewport;
