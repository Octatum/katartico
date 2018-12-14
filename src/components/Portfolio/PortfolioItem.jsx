import React from 'react';
import styled from 'styled-components';
import { device } from '../../utilities/device';

const CellItem = styled('div')`
  cursor: pointer;

  ${device.tablet} {
    grid-row: span ${({ height }) => height};
    grid-column: span ${({ width }) => width};
  }
`;

const Picture = styled(CellItem)`
  background-color: ${props => props.theme.main};
  background-image: url('${({ image }) => image}');
  background-size: cover;
  background-position: center;
`;

const Video = styled(CellItem)`
  width: 100%;
  height: 100%;
`;

const PortfolioItem = (props) => {
  const { item, onImageClick } = props;

  return item.type === "image" ? 
    <Picture onClick={onImageClick} {...item} />:
    <Video as="iframe" src={`//www.youtube.com/embed/${item.videoId}`} frameborder="0" allowfullscreen {...item} />;

}

export default PortfolioItem;
