import BurgerMenu from './BurgerMenu';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link as _ScrollLink } from 'react-scroll';
import MediaQuery from 'react-responsive';
import hexToRgba from 'hex-rgba';
import { breakpoints, device } from '../utilities/device';

import miniLogoImg from './assets/iconoKatartico.svg';
import LocalizedLink from './LocalizedLink';

const Container = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  display: flex;
  justify-content: space-between;
  width: 100%;
  top: 0;
  z-index: 1;
  -webkit-box-shadow: 1px 4px 40px 0px rgba(156, 36, 32, 0.8);
  -moz-box-shadow: 1px 4px 40px 0px rgba(156, 36, 32, 0.8);
  box-shadow: 1px 4px 40px 0px rgba(156, 36, 32, 0.8);
  background: black;
  color: white;
  transition: all 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95);
`;

const FlexBox = styled.div`
  padding: ${props => (props.mini ? '1em 1.5em' : '1.5em 1.5em')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 100%;
  width: 100%;
  transition: all 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95);
`;

const Logo = styled.img`
  max-height: ${({ mini }) => (mini ? '3.3rem' : '3.5rem')};
  padding: ${({ mini }) => (mini ? '0.3rem' : 0)} 0;
  transition: all 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95);

  ${device.laptop} {
    max-height: ${({ mini }) => (mini ? '3.7rem' : '3.7rem')};
  }
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
    box-shadow: -10px 10px 15px ${hexToRgba(props.theme.main, 60)},
              10px 10px 15px ${hexToRgba(props.theme.main, 60)} ;
  `};
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${device.laptop} {
    flex-direction: row;
    box-sizing: border-box;
    justify-content: space-between;
    padding-left: 37.5%;
    flex: 8;

    font-size: ${({ mini }) => (mini ? 1 : 1.1)}em;
  }
`;

const Link = styled(LocalizedLink)`
  position: relative;
  margin: 1rem 0;
  transition: all 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95);
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
    font-size: 0.8em;
  }
`;

const ScrollLink = Link.withComponent(_ScrollLink);

const Svg = styled.svg`
  position: absolute;
  top: -8px;
  left: -8px;
  height: calc(100% + 16px);
  width: calc(100% + 16px);
  transform: rotate(180deg);
`;

const Line = styled.line`
  ${device.tablet} {
    stroke-width: 4px;
    stroke: ${props => props.theme.main};
  }
`;

const Rectangle = styled.rect`
  fill: transparent;
  stroke: ${props => props.theme.main};
  stroke-width: 4px;
  stroke-dasharray: 400%;
  stroke-dashoffset: 400%;
  transition: all 0.7s cubic-bezier(0.22, 0.61, 0.36, 1);
  position: relative;

  ${Svg}:hover & {
    stroke-dashoffset: 0%;
  }
`;

const Anchor = styled.a`
  margin: 1rem 0;
  transition: all 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95);
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
    flex: 2;
    justify-content: space-between;
    box-sizing: border-box;
    margin: 0;
    margin-left: 0.5rem;
    padding: 0 0.5rem;
    font-size: ${({ mini }) => (mini ? 1 : 1.1)}em;
  }
`;

const SocialMediaIcon = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95);
  font-size: 1.3em;

  ${device.tablet} {
    width: 1em;
    margin: 0 1rem;
    font-size: 1.2em;
  }
`;

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

const FlexLogoSection = styled('div')`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  ${device.laptop} {
    font-size: ${({ mini }) => (mini ? 1 : 1.1)}em;
  }
`;

const Overlay = styled('div')`
  width: 100vw;
  height: 100vh;
  display: ${({ display }) => display};
  position: fixed;
  top: 0;
  left: 0;
`;

class Navbar extends Component {
  state = {
    open: false,
  };

  toggleDropdown = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  };

  closeNavbar = () => {
    this.setState({
      open: false,
    });
  };

  render = () => {
    const navbarLinks = links.map((item, index) => {
      const linkContent = (
        <React.Fragment>
          <Svg>
            <Rectangle height="100%" width="100%" />
            <Line x1="0" x2="100%" y1="0%" y2="0%" />
          </Svg>
          {item.name}
        </React.Fragment>
      );

      if (item.path === this.props.path) {
        return (
          <ScrollLink
            key={index}
            to={item.hash ? item.hash : 'top'}
            duration={1000}
            offset={item.hash ? 0 : -115}
            onClick={this.toggleDropdown}
            smooth
          >
            {linkContent}
          </ScrollLink>
        );
      }
      return (
        <Link
          key={index}
          to={`${item.path}${item.hash ? `#${item.hash}` : ''}`}
          onClick={this.toggleDropdown}
        >
          {linkContent}
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
      <Container>
        <FlexBox>
          {/* Mobile view */}
          <MediaQuery maxWidth={breakpoints.tablet - 1}>
            <Logo src={miniLogoImg} mini={this.props.minimize} aria-hidden />
            <Overlay
              display={this.state.open ? 'block' : 'none'}
              onClick={this.closeNavbar}
            />
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
          <MediaQuery
            minWidth={breakpoints.tablet}
            maxWidth={breakpoints.laptop - 1}
          >
            <Logo src={miniLogoImg} mini={this.props.minimize} aria-hidden />
            <Overlay
              display={this.state.open ? 'block' : 'none'}
              onClick={this.closeNavbar}
            />
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
            <FlexLogoSection mini={this.props.minimize}>
              <Logo src={miniLogoImg} mini={this.props.minimize} aria-hidden />
            </FlexLogoSection>
            <LinkList mini={this.props.minimize}>{navbarLinks}</LinkList>
            <SocialMedia mini={this.props.minimize}>
              {socialMediaLinks}
            </SocialMedia>
          </MediaQuery>
        </FlexBox>
      </Container>
    );
  };
}

export default Navbar;
