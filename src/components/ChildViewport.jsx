import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Element } from 'react-scroll';
import Waypoint from 'react-waypoint';

const Footer = styled.footer`
  width: 100%;
  padding: 4em 0 1em;
  color: ${props => props.theme.white};
  text-align: center;
  font-size: 0.9em;
`;

class ChildViewport extends React.Component {
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
      <div>
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
            <main>
              {this.props.children}
            </main>
            <Footer>
                Copyright &copy; Todos los derechos reservados. Katartico 2019.
            </Footer>
          </Element>
        </div>
      </div>
    );
  }
}

export default ChildViewport;
