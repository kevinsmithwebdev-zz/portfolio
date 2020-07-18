import React from 'react';
import SkillsSection from './SkillsSection/SkillsSection';
import './Skills.css'
import skillsData from './skills.data.json';
import sectionize from '../../common/HOCs/sectionize';


const SkillsComponent = () => {
  console.log('asdf', skillsData);
  return (
    <div>
      <SkillsSection data={ skillsData.skills.frontend }/>
      <p>Blah, blah, blah</p>
      <p>Blah, blah, blah</p>
      <p>Blah, blah, blah</p>
      <p>Blah, blah, blah</p>
    </div>
  );
};

const withSection = sectionize({ title: 'Skills' });
export default withSection(SkillsComponent);
