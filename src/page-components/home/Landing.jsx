import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { device } from '../../utilities/device';
import { Title, Arrow } from './assets/SVGs';
import { Apostrophe } from '../../components/assets/ApostropheComp';
import { useSessionStorage } from 'react-use';

const Container = styled.div`
  display: ${({ show }) => (show ? 'grid' : 'none')};
  position: fixed;
  box-sizing: border-box;
  min-height: 30vh;
  z-index: 1000;
  height: 100vh;
  background: black;
  width: 100%;
  padding: 15% 10%;
  grid-template: 2fr 2fr 1fr / 1fr;
  grid-row-gap: 10vh;
  grid-template-areas:
    'creamos'
    'apostrofe'
    'conoce';
  transition: 1s ease-in-out all;
  transform: ${({ animate }) =>
    animate ? 'translateY(-120%)' : 'translateY(0)'};

  overflow: hidden;

  ${device.tablet} {
    grid-template: 4fr 1fr / 1fr 1fr;
    padding: 3%;
    grid-template-areas:
      'creamos apostrofe'
      'conoce conoce';
    grid-row-gap: 10vh;
    padding-top: 15vh;
  }
`;

const Cell = styled('div')`
  box-sizing: border-box;
  max-height: 100%;
  max-width: 100%;
`;

const TitleContainer = styled(Cell)`
  grid-area: creamos;
  display: flex;
  align-items: center;
  > svg {
    width: 90%;
    max-width: 20rem;
  }

  ${device.laptop} {
    display: initial;
    padding-top: 9vh;
    > svg {
      max-width: initial;
      width: 40vw;
    }
  }
`;

const ApostropheContainer = styled(Cell)`
  grid-area: apostrofe;
  > svg {
    height: 30vh;
  }
  display: flex;
  justify-content: flex-end;

  ${device.laptop} {
    > svg {
      height: 60vh;
    }
  }
`;

const MeetUsContainer = styled(Cell)`
  grid-area: conoce;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  > svg {
    height: 10vmax;
  }

  ${device.laptop} {
    > svg {
      height: 8vh;
    }
  }
`;

function noscroll() {
  window.scrollTo(0, 0);
}

function Landing(props) {
  const [hideLanding, setHideLanding] = useSessionStorage(
    'hideLanding',
    'false'
  );
  const [animate, setAnimate] = useState(false);

  const handleLandingClick = () => {
    setAnimate(true);
    setTimeout(() => {
      setHideLanding('true');
    }, 1000);
  };

  useEffect(() => {
    if (typeof window === undefined) return;

    if (hideLanding === 'false') {
      window.addEventListener('scroll', noscroll);
    } else {
      window.removeEventListener('scroll', noscroll);
    }
  }, [hideLanding]);

  return (
    <Container
      onClick={handleLandingClick}
      show={hideLanding === 'false'}
      animate={animate}
      onScroll={noscroll}
      {...props}
    >
      <TitleContainer>
        <Title />
      </TitleContainer>
      <ApostropheContainer>
        <Apostrophe />
      </ApostropheContainer>
      <MeetUsContainer>
        <Arrow />
      </MeetUsContainer>
    </Container>
  );
}

export default Landing;
