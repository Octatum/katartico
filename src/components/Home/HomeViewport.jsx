import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import { Element } from 'react-scroll';
import Waypoint from 'react-waypoint';
import Landing from './Landing';

const Viewport = styled.div``;

const Footer = styled.div`
  width: 100%;
  padding: 4em 0 1em;
  color: ${props => props.theme.white};
  text-align: center;
`;

class HomeViewport extends React.Component {
  state = {
    shouldMinimizeNavbar: false,
    scrollableAncestor: null,
  };

  componentDidMount() {
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
              Copyright &copy; Todos los derechos reservados. Katartico 2018.
            </Footer>
          </Element>
        </div>
      </Viewport>
    );
  }
}

export default HomeViewport;
