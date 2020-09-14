import React from 'react';
import { PaintingDataType } from '../../../common/types/index';
import { getGalleryTNImageURL } from '../../../common/utilities/URLs/getURLs';
import './Painting.css';


interface PropsInterface {
  painting: PaintingDataType,
  handlePictureClick: Function,
  idx: number,
}

const Painting: React.FC<PropsInterface> = ({ painting, handlePictureClick, idx }) => (
  <span
    key={ painting.name }
    className='Painting'
    onClick={ () => handlePictureClick(idx) }
  >
    <img
      className='image'
      src={ getGalleryTNImageURL(painting.imgStem) }
      alt='Logo'
    />
    <span className='label'>
      { painting.name }
    </span>
  </span>
);

export default Painting;