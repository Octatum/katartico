import BurgerMenu from './BurgerMenu';
import React, { Component } from 'react';
import { Link as _Link } from 'gatsby';
import styled from 'styled-components';
import { Link as _ScrollLink } from 'react-scroll';
import MediaQuery from 'react-responsive';
import hexToRgba from 'hex-rgba';
import { breakpoints, device } from '../utilities/device';

import miniLogoImg from './assets/mini-logo.svg';

const Container = styled.div`
  position: relative;
  top: 0;
  z-index: 1;
  -webkit-box-shadow: 1px 4px 42px 11px rgba(156,36,32,1);
  -moz-box-shadow: 1px 4px 42px 11px rgba(156,36,32,1);
  box-shadow: 1px 4px 42px 11px rgba(156,36,32,1);
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
  height: ${({ mini }) => (mini ? '3em' : '4em')};
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
    box-shadow: 0 0 9px 9px ${hexToRgba(props.theme.main, 40)};
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
  margin: 1rem 0;
  font-size: 1em;
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;

  ::first-letter {
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
  font-size: 1.3em;

  ${device.tablet} {
    margin: 0 1rem 0 auto;
  }

  ${device.laptop} {
    margin: 0 1rem;
  }
`;

const links = [
  {
    path: '/',
    name: 'inicio',
  },
  {
    path: '/nosotros',
    name: 'nosotros',
  },
  {
    path: '/servicios',
    name: 'servicios',
  },
  {
    path: '/portafolio',
    name: 'portafolio',
  },
  {
    path: '/',
    hash: 'contact',
    name: 'contacto',
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
            duration={1000}
            onClick={this.toggleDropdown}
            smooth
          >
            {item.name}
          </ScrollLink>
        );
      }
      return (
        <Link key={index} to={`${item.path}`} onClick={this.toggleDropdown}>
          {item.name}
        </Link>
      );
    });

    const socialMediaLinks = socialMedia.map((item, index) => (
      <Anchor key={index} href={item.path}>
        <i className={`fab ${item.faName} fa-lg fa-fw`} />
      </Anchor>
    ));

    return (
      <Container mini={this.props.minimize}>
        <FlexBox>
          <Logo src={miniLogoImg} mini={this.props.minimize} />
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
