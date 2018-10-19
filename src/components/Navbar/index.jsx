import React, { Component } from 'react';
import { Link as _Link } from 'gatsby';
import styled from 'styled-components';
import { Link as _ScrollLink } from 'react-scroll';
import hexToRgba from 'hex-rgba';
import Headroom from 'react-headroom';

import logoImg from '../../components/assets/logo.svg';
import miniLogoImg from '../../components/assets/mini-logo.svg';
import throttle from '../../utilities/throttle';

const Container = styled.div`
  top: 0;
  z-index: 1;
  margin-bottom: 1rem;
  box-shadow: 0 0 9px 9px ${props => hexToRgba(props.theme.main, 40)};
  background: black;
  color: white;
  transition: all 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95);
  height: 9rem;

  ::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1rem;
    background: black;
  }

  .headroom--pinned & {
    transition: unset;
    height: 5rem;
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

const LinksDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  max-height: 0;
  width: 50%;
  overflow: auto;
  background: black;
  box-shadow: 0 0 9px 9px transparent;
  transition: all 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95);
  /** Para animaciones que no se ejecutaran muchas veces, es valido hacer esto **/

  ${({open}) => open && `
    max-height: 70vh;
    box-shadow: 0 0 9px 9px ${props => hexToRgba(props.theme.main, 40)};  
  `}
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

  ::first-letter{
    font-size: 1.1em;
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

const MenuButton = styled.button`
  display: flex;
  align-items: baseline;
  height: 60%;
  border: 0;
  font-size: 1.5em;
  background: inherit;
  color: inherit;
  cursor: pointer;

  i {
    margin-right: 0.5em;
  }
`;

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

const socialMediaLinks = [
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
            duration={300}
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

    return (
      <Headroom>
        <Container mini={this.state.minimize}>
          <FlexBox mini={this.state.minimize}>
            <Logo  src={miniLogoImg} />
            <LinksDiv open={this.state.open}>
              <LinkList>{navbarLinks}</LinkList>
              <SocialMedia>
                {socialMediaLinks.map((item, index) => (
                  <Anchor key={index} href={item.path}>
                    <i className={`fab ${item.faName} fa-lg fa-fw`} />
                  </Anchor>
                ))}
              </SocialMedia>
            </LinksDiv>
            {/*
              styled components puede hacer uso de props para calcular este tipo de estilos
              className={this.state.open && 'open'}
            */}
            <MenuButton
              onClick={this.toggleDropdown}
            >
              <i className={this.state.open ? 'fas fa-times' : 'fas fa-bars'} />
              <span>MENÚ</span>
            </MenuButton>
          </FlexBox>
        </Container>
      </Headroom>
    );
  };
}

export default Navbar;
