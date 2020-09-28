import React from 'react';
import { useTranslation } from "react-i18next";
import Skill from './Skill/Skill';
import convertToTitleCase from '../../../common/utilities/text/convertToTitleCase';
import './SkillsSection.css';

interface PropsInterface {
  data: string[],
  slug?: string,
}

const SkillsSection: React.FC<PropsInterface> = ({ data, slug }) => {
  const { t } = useTranslation();
  return (
    <>
      <h3 className='skillsListHeader'>{ slug ? t(`skills.sections.${slug}`) : convertToTitleCase(t('sections.skills')) }</h3>
      <div className='skillsListWrapper'>
        { data.map(label => <Skill key={ label } label={ label } />) }
      </div>
    </>
  );
};

export default SkillsSection;
