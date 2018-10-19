import React, { Component } from 'react';
import { Link as _Link } from 'gatsby';
import styled from 'styled-components';
import { Link as _ScrollLink } from 'react-scroll';
import hexToRgba from 'hex-rgba';

import logoImg from '../../components/assets/logo.svg';
import miniLogoImg from '../../components/assets/mini-logo.svg';

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  height: 140px;
  margin-bottom: 16px;
  box-shadow: 0 0 9px 9px ${props => hexToRgba(props.theme.main, 40)};
  background: black;
  color: white;
  transition: all 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95);

  ::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 18px;
    background: black;
  }

  &.mini {
    height: 83px;
  }
`

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 100%;
  padding: 2em 3em;
  transition: all 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95);

  .mini & {
    padding: 1em 3em;
  }
`

const Logo = styled.img`
  height: 100%;
`

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

  &.open {
    max-height: 70vh;
    box-shadow: 0 0 9px 9px ${props => hexToRgba(props.theme.main, 40)};
  }
`

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Link = styled(_Link)`
  margin: 1rem 0;
  font-size: 1.3em;
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  span {
    font-size: 1.1em;
  }
`

const ScrollLink = styled(_ScrollLink)`
  margin: 1rem 0;
  font-size: 1.3em;
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  span {
    font-size: 1.1em;
  }
`

const Anchor = styled.a`
  margin: 1rem 0;
  font-size: 1.5em;
  color: inherit;
`

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

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
`

const links = [
  {
    path: '/',
    name: <p><span>I</span>NICIO</p>
  },
  {
    path: '/about',
    name: <p><span>N</span>OSOTROS</p>
  },
  {
    path: '/portafolio',
    name: <p><span>S</span>ERVICIOS</p>
  },
  {
    path: '/services',
    name: <p><span>P</span>ORTAFOLIO</p>
  },
  {
    path: '/',
    hash: 'contact',
    name: <p><span>C</span>ONTACTO</p>
  },
];

const socialMediaLinks = [
  {
    path: '/',
    faName: 'fa-facebook-f'
  },
  {
    path: '/',
    faName: 'fa-instagram'
  },
  {
    path: '/',
    faName: 'fa-linkedin-in'
  },
]

class Navbar extends Component {
  state = {
    open: false,
    minimize: false
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      minimize: (window.pageYOffset > 0)
    });
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      open: !prevState.open
    }));
  }

  navbarLinks = () => (
    links.map((item, index) => {
      if (item.path === this.props.path) {
        return (
          <ScrollLink
            key={index}
            to={item.hash ? item.hash : 'top'}
            smooth
            duration={500}
            onClick={this.toggleDropdown}>
            {item.name}
          </ScrollLink>
        );
      } else {
        return (
          <Link key={index} to={`${item.path}${item.hash ? `#${item.hash}` : ''}`} onClick={this.toggleDropdown}>
            {item.name}
          </Link>
        );
      }
    })
  )

  render = () => (
    <Container className={this.state.minimize && 'mini'}>
      <FlexBox>
        <Logo src={this.state.minimize ? miniLogoImg : logoImg}/>
        <LinksDiv className={this.state.open && 'open'}>
          <LinkList>
            {this.navbarLinks()}
          </LinkList>
          <SocialMedia>
            {socialMediaLinks.map((item, index) => (
              <Anchor key={index} href={item.path}>
                <i className={`fab ${item.faName} fa-lg fa-fw`}/>
              </Anchor>
            ))}
          </SocialMedia>
        </LinksDiv>
        <MenuButton className={this.state.open && 'open'} onClick={this.toggleDropdown}>
          <i className={this.state.open ? "fas fa-times" : "fas fa-bars"}/>
          <span>MENÚ</span>
        </MenuButton>
      </FlexBox>
    </Container>
  )
}

export default Navbar;
