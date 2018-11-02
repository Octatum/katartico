import BurgerMenu from './BurgerMenu';
import React, { Component } from 'react';
import { Link as _Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import { Link as _ScrollLink } from 'react-scroll';
import hexToRgba from 'hex-rgba';

import miniLogoImg from './assets/mini-logo.svg';

const Container = styled.div`
  position: relative;
  top: 0;
  z-index: 1;
  box-shadow: 0 0 9px 9px ${props => hexToRgba(props.theme.main, 40)};
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
  padding: 0 3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 100%;
  transition: all 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95);
`;

const Logo = styled.img`
  height: 100%;
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
`;

const Link = styled(_Link)`
  margin: 1rem 0;
  font-size: 1.3em;
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  ::first-letter {
    font-size: 1.1em;
  }
`;

// Es posible cambiar el estilo de un componente a otro, usando styled components
const ScrollLink = Link.withComponent(_ScrollLink);

const Anchor = styled.a`
  margin: 1rem 0;
  font-size: 1.5em;
  color: inherit;
  text-transform: uppercase;
`;

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
    path: '/portafolio',
    name: 'portafolio',
  },
  {
    path: '/servicios',
    name: 'servicios',
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
        <FlexBox mini={this.props.minimize}>
          <Logo src={miniLogoImg} />
          <Menu open={this.state.open}>
            <LinkList>{navbarLinks}</LinkList>
            <SocialMedia>{socialMediaLinks}</SocialMedia>
          </Menu>
          <BurgerMenu
            open={this.state.open}
            toggleDropdown={this.toggleDropdown}
          />
        </FlexBox>
      </Container>
    );
  };
}

export default Navbar;
