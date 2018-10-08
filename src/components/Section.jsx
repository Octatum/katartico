import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  padding: 1em 0;
`

const Section = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default Section;
