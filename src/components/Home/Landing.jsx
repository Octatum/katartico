import React, { Component } from 'react';
import styled from 'styled-components';
import { withCookies } from 'react-cookie';
import { device } from '../../utilities/device';

import { Title, Arrow } from './assets/SVGs';
import { Apostrophe } from '../assets/ApostropheComp';

const Container = styled.div`
  display: ${({ show }) => (show === 'true' ? 'grid' : 'none')};
  box-sizing: border-box;
  min-height: 30vh;
  height: 100vh;
  padding: 15% 10%;
  grid-template: 2fr 2fr 1fr / 1fr;
  grid-row-gap: 10vh;
  grid-template-areas:
    'creamos'
    'apostrofe'
    'conoce';

  ${device.tablet} {
    grid-template: 4fr 1fr / 1fr 1fr;
    padding: 2rem;
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
      height: 35vh;
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

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.cookies.get('showLanding') || 'true',
    };
  }

  componentDidMount() {
    const { cookies } = this.props;
    cookies.set('showLanding', 'false', { path: '/' });
  }

  render() {
    return (
      <Container show={this.state.show} {...this.props}>
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
}

export default withCookies(Landing);
