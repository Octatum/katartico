import BurgerMenu from './BurgerMenu';
import React, { Component } from 'react';
import { Link as _Link } from 'gatsby';
import styled from 'styled-components';
import { Link as _ScrollLink, animateScroll as scroll } from 'react-scroll';
import MediaQuery from 'react-responsive';
import hexToRgba from 'hex-rgba';
import { breakpoints, device } from '../utilities/device';

import miniLogoImg from './assets/iconoKatartico.svg';

const Container = styled.div`
  position: relative;
  top: 0;
  z-index: 1;
  -webkit-box-shadow: 1px 4px 40px 0px rgba(156,36,32,0.8);
  -moz-box-shadow: 1px 4px 40px 0px rgba(156,36,32,0.8);
  box-shadow: 1px 4px 40px 0px rgba(156,36,32,0.8)
  background: black;
  color: white;
  transition: all 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95);
  flex: ${({ mini }) => (mini ? 1 : 1.3)};

  ::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1rem;
    background: black;
  }
`;

const FlexBox = styled.div`
  padding: 1em 3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 100%;
  transition: all 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95);
`;

const Logo = styled.img`
  height: ${({ mini }) => (mini ? '3em' : '5.5em')};
  transition: all 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95);
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  max-height: 0;
  width: 50%;
  overflow: hidden;
  background: black;
  box-shadow: 0 0 9px 9px transparent;
  transition: all 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95);

  ${props =>
    props.open &&
    `
    max-height: 70vh;
    box-shadow: 0px 0 20px 10px ${hexToRgba(props.theme.main, 60)};
  `};
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${device.laptop} {
    flex-direction: row;
    margin-left: auto;
  }
`;

const Link = styled(_Link)`
  position: relative;
  margin: 1rem 0;
  font-size: 1em;
  color: inherit;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;

  span {
    display: inline-block;
  }

  span::first-letter {
    font-size: 1.2em;
  }

  ${device.tablet} {
    font-size: 1.1em;
  }

  ${device.laptop} {
    font-size: 1em;
    margin: 1.5rem;
  }
`;

// Es posible cambiar el estilo de un componente a otro, usando styled components
const ScrollLink = Link.withComponent(_ScrollLink);

const Svg = styled.svg`
  position: absolute;
  top: -8px;
  left: -8px;
  height: calc(100% + 16px);
  width: calc(100% + 16px);
  transform: rotate(180deg);
`

const Line = styled.line`
  ${device.tablet} {
    stroke-width: 4px;
    stroke: ${props => props.theme.main};
  }
`

const Rectangle = styled.rect`
  fill: transparent;
  stroke: ${props => props.theme.main};
  stroke-width: 4px;
  stroke-dasharray: 400%;
  stroke-dashoffset: 400%;
  transition: all 0.7s cubic-bezier(.22,.61,.36,1);
  position: relative;

  ${Svg}:hover & {
    stroke-dashoffset: 0%;
  }
`

const Anchor = styled.a`
  margin: 1rem 0;
  font-size: 1em;
  color: inherit;
  text-transform: uppercase;
`;

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  ${device.tablet} {
    margin: 0 1rem 0 auto;
  }

  ${device.laptop} {
    margin: 0 1rem;
  }
`;

const SocialMediaIcon = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;


  ${device.tablet} {
    width: 1em;
    margin: 0 0.25em;
    font-size: 1.2em;
  }
`

const links = [
  {
    path: '/',
    name: <span>inicio</span>,
  },
  {
    path: '/nosotros',
    name: <span>nosotros</span>,
  },
  {
    path: '/servicios',
    name: <span>servicios</span>,
  },
  {
    path: '/portafolio',
    name: <span>portafolio</span>,
  },
  {
    path: '/',
    hash: 'contacto',
    name: <span>contacto</span>,
  },
];

const socialMedia = [
  {
    path: '/',
    faName: 'fa-facebook-f',
  },
  {
    path: '/',
    faName: 'fa-instagram',
  },
  {
    path: '/',
    faName: 'fa-linkedin-in',
  },
];

class Navbar extends Component {
  state = {
    open: false,
  };

  toggleDropdown = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  };

  render = () => {
    const navbarLinks = links.map((item, index) => {
      if (item.path === this.props.path) {
        return (
          <ScrollLink
            key={index}
            to={item.hash ? item.hash : 'top'}
            containerId='mainContainer'
            duration={1000}
            offset={item.hash ? 0 : -115}
            onClick={this.toggleDropdown}
            smooth
          >
            <Svg>
              <Rectangle height="100%" width="100%" />
              <Line x1="0" x2="100%" y1="0%" y2="0%" />
            </Svg>
            {item.name}
          </ScrollLink>
        );
      }
      return (
        <Link key={index} to={`${item.path}${item.hash ? `#${item.hash}` : ''}`} onClick={this.toggleDropdown}>
          <Svg>
            <Rectangle height="100%" width="100%" />
            <Line x1="0" x2="100%" y1="0%" y2="0%" />
          </Svg>
          {item.name}
        </Link>
      );
    });

    const socialMediaLinks = socialMedia.map((item, index) => (
      <SocialMediaIcon key={index}>
        <Anchor href={item.path}>
          <i className={`fab ${item.faName}`} />
        </Anchor>
      </SocialMediaIcon>
    ));

    return (
      <Container mini={this.props.minimize}>
        <FlexBox>
          <Logo src={miniLogoImg} mini={this.props.minimize} />
          {/* Mobile view */}
          <MediaQuery maxWidth={breakpoints.tablet - 1}>
            <Menu open={this.state.open}>
              <LinkList>{navbarLinks}</LinkList>
              <SocialMedia>{socialMediaLinks}</SocialMedia>
            </Menu>
            <BurgerMenu
              open={this.state.open}
              toggleDropdown={this.toggleDropdown}
            />
          </MediaQuery>
          {/* Tablet view */}
          <MediaQuery minWidth={breakpoints.tablet} maxWidth={breakpoints.laptop - 1}>
            <Menu open={this.state.open}>
              <LinkList>{navbarLinks}</LinkList>
            </Menu>
            <SocialMedia>{socialMediaLinks}</SocialMedia>
            <BurgerMenu
              open={this.state.open}
              toggleDropdown={this.toggleDropdown}
            />
          </MediaQuery>
          {/* Desktop view */}
          <MediaQuery minWidth={breakpoints.laptop}>
            <LinkList>{navbarLinks}</LinkList>
            <SocialMedia>{socialMediaLinks}</SocialMedia>
          </MediaQuery>
        </FlexBox>
      </Container>
    );
  };
}

export default Navbar;
