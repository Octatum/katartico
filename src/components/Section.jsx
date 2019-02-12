import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  margin: 1em 2em;
`;

const Section = ({ children, id, ...rest }) => <Container id={id} {...rest}>{children}</Container>;

export default Section;
