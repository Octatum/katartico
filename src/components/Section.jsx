import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  padding: 1em 0;
`

const Section = ({ children, id }) => (
  <Container id={id}>
    {children}
  </Container>
);

export default Section;
