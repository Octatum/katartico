import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Element } from 'react-scroll';
import Waypoint from 'react-waypoint';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

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
`;

class ChildViewport extends React.Component {
  state = {
    shouldMinimizeNavbar: false,
  };

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
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
        <Navbar
          path={this.props.path}
          minimize={this.state.shouldMinimizeNavbar}
        />
        <ChildrenContainer id="mainContainer">
          <Element name="top">
            <Waypoint onPositionChange={this.handleWaypointPositionChange} />
            {this.props.children}
            <Footer>
              Copyright &copy; Todos los derechos reservados. Katartico 2018.
            </Footer>
          </Element>
        </ChildrenContainer>
      </Viewport>
    );
  }
}

export default withCookies(ChildViewport);
