import React, { useState } from 'react';
import styled from 'styled-components';
import { Link as _ScrollLink } from 'react-scroll';
import MediaQuery from 'react-responsive';
import hexToRgba from 'hex-rgba';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import BurgerMenu from './BurgerMenu';
import { breakpoints, device } from '../../utilities/device';
import miniLogoImg from '../assets/iconoKatartico.svg';
import LocalizedLink from '../LocalizedLink';
import {
  changeLanguageForCurrentLocation,
  getCurrentLanguage,
} from '../../utilities/functions';

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

const Anchor = styled(OutboundLink)`
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

const socialMedia = [
  {
    path: 'https://www.facebook.com/katarticomx',
    faName: 'fa-facebook-f',
  },
  {
    path: 'https://instagram.com/katarticomx',
    faName: 'fa-instagram',
  },
  {
    path: 'https://www.linkedin.com/company/katartico/about/',
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

function Presentation(props) {
  const { links } = props;
  const [open, setOpen] = useState(false);
  const newLocation = changeLanguageForCurrentLocation();
  const currentLanguage = getCurrentLanguage();

  const closeNavbar = () => {
    setOpen(false);
  };

  const toggleDropdown = state => {
    setOpen(!state);
  };

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

    if (item.path === props.path) {
      return (
        <ScrollLink
          key={index}
          to={item.hash ? item.hash : 'top'}
          duration={1000}
          offset={item.hash ? 0 : -115}
          onClick={() => toggleDropdown(open)}
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
        onClick={() => toggleDropdown(open)}
      >
        {linkContent}
      </Link>
    );
  });

  const socialMediaLinks = socialMedia.map((item, index) => (
    <SocialMediaIcon key={index}>
      <Anchor href={item.path} rel="noopener noreferrer" target="_blank">
        <i className={`fab ${item.faName}`} />
      </Anchor>
    </SocialMediaIcon>
  ));

  return (
    <Container>
      <FlexBox mini={props.minimize}>
        {/* Mobile view */}
        <MediaQuery maxWidth={breakpoints.tablet - 1}>
          <Logo src={miniLogoImg} mini={props.minimize} aria-hidden />
          <Overlay display={open ? 'block' : 'none'} onClick={closeNavbar} />
          <Menu open={open}>
            <LinkList>{navbarLinks}</LinkList>
            <SocialMedia>{socialMediaLinks}</SocialMedia>
          </Menu>
          <BurgerMenu open={open} toggleDropdown={() => toggleDropdown(open)} />
        </MediaQuery>
        {/* Tablet view */}
        <MediaQuery
          minWidth={breakpoints.tablet}
          maxWidth={breakpoints.laptop - 1}
        >
          <Logo src={miniLogoImg} mini={props.minimize} aria-hidden />
          <Overlay display={open ? 'block' : 'none'} onClick={closeNavbar} />
          <Menu open={open}>
            <LinkList>{navbarLinks}</LinkList>
          </Menu>
          <SocialMedia>{socialMediaLinks}</SocialMedia>
          <BurgerMenu open={open} toggleDropdown={() => toggleDropdown(open)} />
        </MediaQuery>
        {/* Desktop view */}
        <MediaQuery minWidth={breakpoints.laptop}>
          <FlexLogoSection mini={props.minimize}>
            <Logo src={miniLogoImg} mini={props.minimize} aria-hidden />
          </FlexLogoSection>
          <LinkList mini={props.minimize}>{navbarLinks}</LinkList>
          <SocialMedia mini={props.minimize}>{socialMediaLinks}</SocialMedia>
          {/* 
          <Link to={newLocation} as={GatsbyLink}>
            {currentLanguage === '' ? 'EN' : 'ES'}
          </Link>
          */}
        </MediaQuery>
      </FlexBox>
    </Container>
  );
}

export default Presentation;
