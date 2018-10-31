import React, { Component } from 'react';
import { Link as _Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import { Link as _ScrollLink } from 'react-scroll';
import hexToRgba from 'hex-rgba';
import Headroom from 'react-headroom';

import miniLogoImg from '../../components/assets/mini-logo.svg';
import throttle from '../../utilities/throttle';

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  margin-bottom: 1rem;
  box-shadow: 0 0 9px 9px ${props => hexToRgba(props.theme.main, 40)};
  background: black;
  color: white;
  transition: all 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95);
  height: 6rem;

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

const FlexBox = styled.div.attrs({
  style: ({mini}) => ({
    padding: mini ? '1em 3em': '2em 3em'
  })
})`
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
  /** Para animaciones que no se ejecutaran muchas veces, es valido hacer esto **/

  ${props => props.open && `
    max-height: 70vh;
    box-shadow: 0 0 9px 9px ${hexToRgba(props.theme.main, 40)};
  `}
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Link = styled(_Link)`
  margin: 1rem 0;
  font-size: 1.2em;
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;

  ::first-letter{
    font-size: 1.2em;
  }
`;

// Es posible cambiar el estilo de un componente a otro, usando styled components
const ScrollLink = Link.withComponent(_ScrollLink);

const Anchor = styled.a`
  margin: 1rem 0;
  font-size: 1.5em;
  color: inherit;
`;

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const BurgerMenu = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  text-transform: uppercase;
`

const BurgerText = styled.span`
  display: inline-block;
  transition: opacity 300ms ease-out, max-width 300ms cubic-bezier(.34, .55, .25, .83);
  font-size: 1.5em;
  max-width: 3em;
  overflow: hidden;

  .open & {
    opacity: 0;
    max-width: 0;
  }
`

const BurgerRegion = styled.div`
  position: relative;
  height: 1.85em;
  width: 40px;
  margin: 0 1rem;
  cursor: pointer;
`

const topBarOpen = keyframes`
  50% {
    transform: translate3d(0, 12px, 0);
  }
  100% {
    transform: translate3d(0, 12px, 0) rotate(45deg);
  }
`

const bottomBarOpen = keyframes`
  50% {
    transform: translate3d(0, -12px, 0);
  }
  100% {
    transform: translate3d(0, -12px, 0) rotate(-45deg);
  }
`

const topBarClose = keyframes`
  0% {
    transform: translate3d(0, 12px, 0) rotate(45deg);
  }
  50% {
    transform: translate3d(0, 12px, 0) rotate(0deg);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`

const bottomBarClose = keyframes`
  0% {
    transform: translate3d(0, -12px, 0) rotate(-45deg);
  }
  50% {
    transform: translate3d(0, -12px, 0) rotate(0deg);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`

const BurgerBar = styled.span`
  --menu-animation-duration: 400ms;
  --menu-animation-timing: ease-out;

  display: block;
  position: absolute;
  width: 100%;
  border-top: 6px solid ${props => props.theme.white};
  transform-origin: 50% 50%;
  transition: transform var(--menu-animation-duration) var(--menu-animation-timing);

  &:nth-child(1) {
    top: 0;
    animation: ${topBarClose} var(--menu-animation-duration) var(--menu-animation-timing) forwards;
  }

  &:nth-child(2) {
    top: 12px;
    opacity: 1;
    transition: transform var(--menu-animation-duration) var(--menu-animation-timing), opacity 0ms linear calc(var(--menu-animation-duration) / 2);
  }

  &:nth-child(3) {
    top: 24px;
    animation: ${bottomBarClose} var(--menu-animation-duration) var(--menu-animation-timing) forwards;
  }

  .open & {
    &:nth-child(1) {
      animation: ${topBarOpen} var(--menu-animation-duration) var(--menu-animation-timing) forwards;
    }

    &:nth-child(2) {
      opacity: 0;
      transition: transform var(--menu-animation-duration) var(--menu-animation-timing), opacity 0ms linear calc(var(--menu-animation-duration) / 2);
    }

    &:nth-child(3) {
      animation: ${bottomBarOpen} var(--menu-animation-duration) var(--menu-animation-timing) forwards;
    }
  }
`

const links = [
  {
    path: '/',
    name: 'inicio'
  },
  {
    path: '/nosotros',
    name: 'nosotros'
  },
  {
    path: '/portafolio',
    name: 'portafolio'
  },
  {
    path: '/servicios',
    name: 'servicios'
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
    minimize: false,
  };

  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);

    this.handleScroll = throttle(this.handleScroll, 1000 / 30);
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll() {
    console.log("Time!");
    this.setState(() => ({
      minimize: window.pageYOffset > 0,
    }));
  }

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
        <Link
          key={index}
          to={`${item.path}`}
          onClick={this.toggleDropdown}
        >
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
      <Container mini={this.state.minimize}>
        <FlexBox mini={this.state.minimize}>
          <Logo src={miniLogoImg} />
          <Menu open={this.state.open}>
            <LinkList>{navbarLinks}</LinkList>
            <SocialMedia>{socialMediaLinks}</SocialMedia>
          </Menu>
          <BurgerMenu className={this.state.open && 'open'}>
            <BurgerText>Menú</BurgerText>
            <BurgerRegion onClick={this.toggleDropdown}>
              <BurgerBar />
              <BurgerBar />
              <BurgerBar />
            </BurgerRegion>
          </BurgerMenu>
        </FlexBox>
      </Container>
    );
  };
}

export default Navbar;
