import React, { Component } from 'react';
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

  ::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 18px;
    background: black;
  }
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
  max-height: 0;
  width: 50%;
  overflow: auto;
  background: black;
  box-shadow: 0 0 9px 9px transparent;
  transition: all 0.3s cubic-bezier(.45,.05,.55,.95);

  &.open {
    max-height: 70vh;
    box-shadow: 0 0 9px 9px #950900;
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

  ::before {
    content: 'X';
    padding-right: 0.5em;
    opacity: 0;
    transition: all 0.3s cubic-bezier(.45,.05,.55,.95);
  }

  &.open::before {
    opacity: 1;
  }
`

class Navbar extends Component {
  state = {
    open: false
  }

  handleDropdown = () => {
    this.setState((prevState) => ({
      open: !prevState.open
    }));
  }

  render = () => (
    <Container>
      <FlexBox>
        <Logo src={logoImg}/>
        <LinksDiv className={this.state.open && 'open'}>
          <Anchors>
            <Link href="/"><span>I</span>NICIO</Link>
            <Link href="/"><span>N</span>OSOTROS</Link>
            <Link href="/"><span>S</span>ERVICIOS</Link>
            <Link href="/"><span>P</span>ORTAFOLIO</Link>
            <Link href="/"><span>C</span>ONTACTO</Link>
          </Anchors>
          <SocialMedia>
            <Link href="/"><i className="fab fa-facebook-f fa-lg fa-fw"/></Link>
            <Link href="/"><i className="fab fa-instagram fa-lg fa-fw"/></Link>
            <Link href="/"><i className="fab fa-linkedin-in fa-lg fa-fw"/></Link>
          </SocialMedia>
        </LinksDiv>
        <MenuButton className={this.state.open && 'open'} onClick={this.handleDropdown}>MENÚ</MenuButton>
      </FlexBox>
    </Container>
  )
}

export default Navbar;
