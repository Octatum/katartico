import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import Waypoint from 'react-waypoint';

import NavbarContainer from './Navbar';
import { device } from '../utilities/device';
import Landing from '../page-components/home/Landing';
import { getCurrentLanguage } from '../utilities/functions';

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

function ChildViewport(props) {
  const { children, path, includeLanding } = props;
  const [shouldMinimizeNavbar, setShouldMinimizeNavbar] = useState(false);
  const [scrollableAncestor, setScrollableAncestor] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    setScrollableAncestor(window);
  }, [shouldMinimizeNavbar, scrollableAncestor]);

  function handleWaypointPositionChange(position) {
    setShouldMinimizeNavbar(position.currentPosition === 'above');
  }

  const footerNote = getCurrentLanguage() === "en" ? "All rights reserved" : "Todos los derechos reservados.";

  return (
    <div>
      {includeLanding && <Landing />}
      <NavbarContainer path={path} minimize={shouldMinimizeNavbar} />
      <div id="mainContainer">
        <Element name="top">
          <Waypoint
            scrollableAncestor={scrollableAncestor}
            onPositionChange={handleWaypointPositionChange}
          />
          {children}
          <Footer>
            Copyright &copy; {footerNote} {' '}
            <DisplayDiv>Katartico {new Date().getFullYear()}.</DisplayDiv>
          </Footer>
        </Element>
      </div>
    </div>
  );
}

ChildViewport.defaultProps = {
  includeLanding: false,
};

export default ChildViewport;
