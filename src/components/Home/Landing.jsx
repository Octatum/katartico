import React, { Component } from 'react';
import styled from 'styled-components';
import { withCookies } from 'react-cookie';
import { device } from '../../utilities/device';

import { Title, Arrow } from './assets/SVGs';
import { Apostrophe } from '../assets/ApostropheComp';

const Container = styled.div`
  display: ${({show}) => show === "true" ? 'flex' : 'flex'};  
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  height: 100vh;
  overflow: hidden;
  padding: 5em;
`;

const Separator = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  ${device.laptop} {
    flex-direction: row;
  }
`;

const TitleComp = styled(Title)`
  max-height: 15em;
  align-self: flex-start;

  ${device.laptop} {
    align-self: auto;
    max-height: 20em;
  }
`;
const ApostropheComp = styled(Apostrophe)`
  max-height: 15em;
  align-self: flex-end;

  ${device.laptop} {
    align-self: auto;
    max-height: 20em;
  }
`;
const ArrowComp = styled(Arrow)`
  max-height: 5em;
`;

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.cookies.get('showLanding') || "true"
    }
  }

  componentDidMount() {
    const { cookies } = this.props;
    cookies.set('showLanding', 'false', { path: '/' })
  }

  render() {
    return (
      <Container show={this.state.show} {...this.props}>
        <Separator>
          <TitleComp />
          <ApostropheComp />
        </Separator>
        <ArrowComp />
      </Container>
    )
  }
}

export default withCookies(Landing);