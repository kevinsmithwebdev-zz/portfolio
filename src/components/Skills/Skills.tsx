import React from 'react';
import { useTranslation } from "react-i18next";
import SkillsSection from './SkillsSection/SkillsSection';
import './Skills.css'
import renderText from '../../common/utilities/text/renderText';
import SectionContainer from '../../common/SectionContainer/SectionContainer';
import useRequest from '../../common/hooks/useRequest';
import DataLoading from '../../common/DataLoading/DataLoading';
import DataError from '../../common/DataError/DataError';

const SKILLS_DATA_URL = 'https://kswd-portfolio.s3-us-west-1.amazonaws.com/data/skills.data.json';

const SkillsComponent = () => {
  const { t } = useTranslation();
  const { data, isLoading, error, retryFetchData } = useRequest(SKILLS_DATA_URL);
  const myData = data?.data;

  let body = myData && (
    <div className='Gallery'>
      <SkillsSection key='frontend' data={ myData.frontend } slug='frontend' />
      <SkillsSection key='backend' data={ myData.backend } slug='backend' />
      <SkillsSection key='other' data={ myData.other } slug='other' />
      <SkillsSection key='past' data={ myData.past } slug='past' />
      <hr/>
      { renderText(t('skills.text', { returnObjects: true })) }
    </div>
  );

  if (error) {
    body = <DataError retryFetchData={ retryFetchData }/>;
  } else if (isLoading) {
    body = <DataLoading />;
  }

  return (
    <SectionContainer titleSlug='skills' isCollapsible >
      { body }
    </SectionContainer>
  );
}

export default SkillsComponent;
