import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  text-transform: uppercase;
`;

const BurgerText = styled.span`
  display: block;
  transition: opacity 200ms ease-out,
    transform 200ms cubic-bezier(0.34, 0.55, 0.25, 0.83);
  font-size: 1.5em;
`;

const BurgerRegion = styled.div`
  position: relative;
  height: 1em;
  width: 2rem;
  cursor: pointer;
`;

const topBarOpen = keyframes`
  50% {
    transform: translate3d(0, 8px, 0);
  }
  100% {
    transform: translate3d(0, 8px, 0) rotate(55deg);
  }
`;

const bottomBarOpen = keyframes`
  50% {
    transform: translate3d(0, -8px, 0);
  }
  100% {
    transform: translate3d(0, -8px, 0) rotate(-55deg);
  }
`;

const topBarClose = keyframes`
  0% {
    transform: translate3d(0, 8px, 0) rotate(45deg);
  }
  50% {
    transform: translate3d(0, 8px, 0) rotate(0deg);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const bottomBarClose = keyframes`
  0% {
    transform: translate3d(0, -8px, 0) rotate(-45deg);
  }
  50% {
    transform: translate3d(0, -8px, 0) rotate(0deg);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const BurgerBar = styled.span`
  --menu-animation-duration: 400ms;
  --menu-animation-timing: ease-out;

  display: block;
  position: absolute;
  width: 80%;
  border-top: 2px solid ${props => props.theme.white};
  transform-origin: 50% 50%;
  transition: transform var(--menu-animation-duration)
    var(--menu-animation-timing);

  &:nth-child(1) {
    top: 0;
    animation: ${topBarClose} var(--menu-animation-duration)
      var(--menu-animation-timing) forwards;
  }

  &:nth-child(2) {
    top: 8px;
    opacity: 1;
    transition: transform var(--menu-animation-duration)
        var(--menu-animation-timing),
      opacity 0ms linear calc(var(--menu-animation-duration) / 2);
  }

  &:nth-child(3) {
    top: 16px;
    animation: ${bottomBarClose} var(--menu-animation-duration)
      var(--menu-animation-timing) forwards;
  }

  .open & {
    &:nth-child(1) {
      animation: ${topBarOpen} var(--menu-animation-duration)
        var(--menu-animation-timing) forwards;
    }

    &:nth-child(2) {
      opacity: 0;
      transition: transform var(--menu-animation-duration)
          var(--menu-animation-timing),
        opacity 0ms linear calc(var(--menu-animation-duration) / 2);
    }

    &:nth-child(3) {
      animation: ${bottomBarOpen} var(--menu-animation-duration)
        var(--menu-animation-timing) forwards;
    }
  }
`;

function BurgerMenu(props) {
  return (
    <Container className={props.open && 'open'}>
      <BurgerRegion onClick={props.toggleDropdown}>
        <BurgerBar />
        <BurgerBar />
        <BurgerBar />
      </BurgerRegion>
      <BurgerText> &nbsp; Menú</BurgerText>
    </Container>
  );
}

export default BurgerMenu;
