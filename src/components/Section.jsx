import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 50vh;
`

const Section = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default Section;
