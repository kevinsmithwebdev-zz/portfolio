import React from 'react';
import { useTranslation } from 'react-i18next';
import renderText from '../../common/utilities/text/renderText';
import SectionContainer from '../../common/SectionContainer/SectionContainer';
import { docsURLObj } from '../../common/utilities/URLs/getURLs';

import './AboutMe.css'

const DocsSection = () => {
  const { resume, cover } = docsURLObj;
  return (
    <div className='links'>
      <a href={ resume }>Resume</a>
      &nbsp;&nbsp;&nbsp;
      <a href={ cover }>Cover Letter</a>
    </div>
  );
}

const AboutMeComponent = () => {
  const { t } = useTranslation();
  const textData = t('aboutMeTextData', { returnObjects: true });

  return (
    <SectionContainer titleSlug='about-me' isCollapsible>
      <DocsSection />
      { renderText(textData) }
      <DocsSection />
    </SectionContainer>
  );
}

export default AboutMeComponent;
