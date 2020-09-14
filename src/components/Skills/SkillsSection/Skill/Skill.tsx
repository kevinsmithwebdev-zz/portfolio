import React from 'react';
import './Skill.css';
import { getSkillLogoURL } from '../../../../common/utilities/URLs/getURLs';

const Skill = ({ label }: { label: string }) => (
  <span key={ label } className='Skill'>
    <img
      className='image'
      src={ getSkillLogoURL(label) }
      alt='Logo'
    />
    <span className='label'>
      { label }
    </span>
  </span>
);

export default Skill;