import React from 'react';
import SkillsSection from '../../Skills/SkillsSection/SkillsSection';
import './PaintingModalBody.css';
import { PaintingDataType } from '../../../common/types/index';
import { getGalleryImageURL} from '../../../common/utilities/URLs/getURLs';

type PropsType = {
  data: PaintingDataType,
}

const PaintingModalBody = ({ data }: PropsType) => (
  <div className='PaintingModalBody' >
    <img
      className='appImage'
      src={ getGalleryImageURL(data.imgStem) }
      alt='Logo'
    />
    <div className='skillsBox'>
      <p>{ data.text }</p>
      <hr />
      <SkillsSection data={ data.techs } />
    </div>
  </div>
);

export default PaintingModalBody;