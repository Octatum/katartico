import React from 'react';
import styled from 'styled-components';
import { device } from '../../utilities/device';
import GatsbyImage from 'gatsby-image';

const CellItem = styled('div')`
  cursor: pointer;

  ${device.tablet} {
    grid-row: span ${({ height }) => height};
    grid-column: span ${({ width }) => width};
  }
`;

const Video = styled(CellItem)`
  width: 100%;
  height: 100%;
`;

const Image = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
`;

const PortfolioItem = props => {
  const { item, onImageClick } = props;

  return item.type === 'image' ? (
    <CellItem onClick={onImageClick} {...item}>
      <Image fluid={item.image.childImageSharp.fluid} />
    </CellItem>
  ) : (
    <Video
      as="iframe"
      src={`//www.youtube.com/embed/${item.videoId}`}
      frameborder="0"
      allowfullscreen
      {...item}
    />
  );
};

export default PortfolioItem;
