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

const Footer = styled.div`
  width: 100%;
  padding: 4em 0 1em;
  color: ${props => props.theme.white};
  text-align: center;
`

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
          <Footer>Copyright © Todos los derechos reservados. Katartico 2018.</Footer>
        </ChildrenContainer>
      </Viewport>
    );
  }
}

export default ChildViewport;
