import React, { useState } from 'react';
import GatsbyImage from 'gatsby-image';
import styled from 'styled-components';
import { device } from '../../utilities/device';
import { cold } from 'react-hot-loader';

const Item = styled.div`
  width: 100%;
  max-height: 230px;
  max-width: 230px;
  margin: 0 auto;
  position: relative;
  transition: 0.3s linear all;

  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  color: white;
  text-align: center;
  text-shadow: 0px 0.3em 0.3em black;

  ${device.tablet} {
    max-height: 300px;
    max-width: 300px;
  }

  ${device.laptop} {
    height: 30em;
    max-height: none;
    max-width: 260px;

    &::after {
      display: none;
    }
  }
`;

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 100%;
  width: 100%;
  font-size: 0.8rem;

  ${device.tablet} {
    font-size: 1.2rem;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(71, 11, 11, 0.5);
    transition: 0.3s linear all;
  }

  &:hover, &.open {
    ::before {
      background-color: rgba(71, 11, 11, 0.8);
    }
  }
`;

const ElementHeader = styled.div`
  text-transform: uppercase;
  max-width: 95%;
  position: absolute;

  ${Item}.open & {
    position: absolute;
    bottom: 60%;
  }

  ${Item}:hover &::after,
  ${Item}.open &::after {
    content: '';
    display: block;
    background-image: radial-gradient(
      at center center,
      white,
      rgba(255, 255, 255, 0) 70%
    );
    height: 0.2em;
    width: 100%;
    margin-top: 0.5em;
    margin-bottom: 0.75em;
    transition: inherit;
  }

  ${device.laptop} {
    max-width: 85%;

    ${Item}:hover &,
    ${Item}.open &{
      bottom: 50%;
    }
  }
`;

const ElementBody = styled.div`
  max-width: 90%;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 0;
  transform: scaleY(0);
  font-size: 0.9em;

  ${Item}:hover &, 
  ${Item}.open &{
    position: absolute;
    top: 40%;
    bottom: 0;
    height: auto;
    transform: scaleY(1);
  }

  ${device.laptop} {
    width: 80%;

    ${Item}:hover &,
    ${Item}.open & {
      top: 50%;
    }
  }
`;

const ListItem = styled.div`
  padding-bottom: 0.5em;
`;

const BackgroundImage = styled(GatsbyImage)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

function Service(props) {
  const { service } = props;
  const [open, setOpen] = useState(false);
  const className = open && "open";
  const debugSetOpen = (state) => {
    console.log(state);
    setOpen(!state);
  }

  return (
    <Item onClick={() => debugSetOpen(open)} className={className} >
      <BackgroundImage
        aria-hidden
        fluid={service.banner.childImageSharp.fluid}
      />
      <ItemContent className={className}>
        <ElementHeader>{service.title}</ElementHeader>
        <ElementBody>
          {service.services.map(s => (
            <ListItem key={s}>{s}</ListItem>
          ))}
        </ElementBody>
      </ItemContent>
    </Item>
  );
}

cold(Service);

export default Service;
