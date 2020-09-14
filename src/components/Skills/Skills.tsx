import React from 'react';
import { useTranslation } from "react-i18next";
import SkillsSection from './SkillsSection/SkillsSection';
import './Skills.css'
import skillsData from './skills.data.json';
import renderText from '../../common/utilities/text/renderText';
import SectionContainer from '../../common/SectionContainer/SectionContainer';


const SkillsComponent = () => {
  const { t } = useTranslation();
  console.log('asdf1', t('sections.skills'));
  console.log('asdf1', t('skills.text', { returnObjects: true }));
  return (
    <SectionContainer titleSlug='skills' isCollapsible >
      <SkillsSection key='frontend' data={ skillsData.frontend } slug='frontend' />
      <SkillsSection key='backend' data={ skillsData.backend } slug='backend' />
      <SkillsSection key='other' data={ skillsData.other } slug='other' />
      <SkillsSection key='past' data={ skillsData.past } slug='past' />

      <hr/>

      { renderText(t('skills.text', { returnObjects: true }))}
    </SectionContainer>
  );
}

export default SkillsComponent;
