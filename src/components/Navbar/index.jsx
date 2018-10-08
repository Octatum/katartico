import React from 'react';
import styled from 'styled-components';

import logoImg from '../../components/assets/logo.svg';

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  height: 140px;
  margin-bottom: 16px;
  box-shadow: 0 0 9px 9px #950900;
  background: black;
  color: white;
`

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 100%;
  padding: 2em 3em;
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
  ${'' /* height: 0; */}
  width: 50%;
  ${'' /* overflow: hidden; */}
  background: black;
  box-shadow: 0 0 9px 9px #950900, 0 -9px transparent;

  ::before {
    content: '';
    position: absolute;
    top: -18px;
    left: -18px;
    right: -18px;
    height: 18px;
    background: black;
  }
`

const Anchors = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Link = styled.a`
  margin: 1rem 0;
  color: inherit;
  font-size: 1.3em;
  text-decoration: none;

  span {
    font-size: 1.1em;
  }
`

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const MenuButton = styled.button`
  height: 60%;
  border: 0;
  font-size: 1.5em;
  background: inherit;
  color: inherit;
  cursor: pointer;
`

const Navbar = () => (
  <Container>
    <FlexBox>
      <Logo src={logoImg}/>
      <LinksDiv>
        <Anchors>
          <Link href="/"><span>I</span>NICIO</Link>
          <Link href="/"><span>N</span>OSOTROS</Link>
          <Link href="/"><span>S</span>ERVICIOS</Link>
          <Link href="/"><span>P</span>ORTAFOLIO</Link>
          <Link href="/"><span>C</span>ONTACTO</Link>
        </Anchors>
        <SocialMedia>
          <Link href="/"><i className="fab fa-facebook-f fa-lg"/></Link>
          <Link href="/"><i className="fab fa-instagram fa-lg"/></Link>
          <Link href="/"><i className="fab fa-linkedin-in fa-lg"/></Link>
        </SocialMedia>
      </LinksDiv>
      <MenuButton>MENÚ</MenuButton>
    </FlexBox>
  </Container>
);

export default Navbar;
