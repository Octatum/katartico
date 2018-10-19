import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

import backgroundImage from '../components/assets/background.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  padding: 4em 2em;
  background-image: url('${backgroundImage}');
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.white};
`;

const Introduction = styled.p`
  line-height: 1.2;
  font-size: 1.3em;
  text-align: center;
  margin: 2rem 0;
`

const Picture = styled.div`
  height: ${props => props.large ? '270px' : '200px'};
  width: 100%;
  margin: 1em 0;
  background: ${props => props.theme.main};
`

const Person = styled.div`
  font-size: 1em;
  text-align: left;
  margin-bottom: 2em;
`

const Header = styled.h2`
  font-size: 2em;
  font-weight: bold;
  width: 100%;
`

const Paragraph = styled.p`
  line-height: 1.2;
  margin: 1.5rem 0;
`;

const content = [
  <>
    <Picture large/>
    <Header>María Elisa Ríos</Header>
    <Paragraph>
      Amante del café platicado y los libros que te hacen llorar sin parar.
      <br/>
      <br/>
      Para mí, la mejor red social que existe es una mesa rodeada de las personas que más quiero. Mis gustos en la música son extremistas... me sé de memoria canciones completas de Eminem, Brad Paisley, Frank Sinatra, Nickelback, Maluma,  Alejandro Sanz y más.
      <br/>
      <br/>
      La frase que define mi vida: “Hagan, digan, sientan. Pero hagan lo que dicen, digan lo que sienten y sientan lo que hacen”.
      <br/>
      <br/>
      <i>Past lives include: art history aficionado and wanabe painter, probably at the Salon des Refusés.</i>
    </Paragraph>
  </>,
  <>
    <Picture large/>
    <Header>Rafael Camacho</Header>
    <Paragraph>
      Apasionado de la danza y el teatro musical.
      <br/>
      <br/>
      Orgullosamente sonorense y Teclover de corazón.
      <br/>
      <br/>
      Mi sueño frustrado es ser locutor de radio o conductor de tele. Me encantan las series y películas de suspenso y terror. Me declaro fanático de Power Rangers, soy el rojo. Fun fact todo en mi vida es rojo. Rojo por intensidad, pasión y actitud positiva ante la vida, palabras que me definen.
      <br/>
      <br/>
      Pongo ante todo a mi familia y amigos: mi motor y mi motivación.
      <br/>
      <br/>
      <i>Mi mantra: Corramos el riesgo de equivocarnos y no la equivocación de no arriesgarnos.</i>
    </Paragraph>
  </>
]

const About = (props) => (
  <Layout path={props.location.pathname}>
    <Container>
      <Picture/>
      <Introduction center fontSize='1.3'>
        ¿Qué piensan de nosotros? Que somos intensos.
        <br/>
        <br/>
        Decidimos plasmar esa intensidad en un proyecto tangible.
        <br/>
        <br/>
        <strong>Katartico es la combinación de nuestras habilidades y la pasión con la que hacemos las cosas.</strong>
      </Introduction>
      {content.map((item, index) => (
        <Person key={index}>
          {item}
        </Person>
      ))}
    </Container>
  </Layout>
);

export default About;
