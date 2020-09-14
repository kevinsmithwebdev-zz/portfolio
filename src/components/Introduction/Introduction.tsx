import React from 'react';
import { useTranslation } from "react-i18next";
import renderText from '../../common/utilities/text/renderText';
import SectionContainer from '../../common/SectionContainer/SectionContainer';
import './Introduction.css'

const IntroductionComponent = () => {
  const { t } = useTranslation();
  const textData = t('introductionTextData', { returnObjects: true });

  return (
    <SectionContainer titleSlug='introduction'>
      { renderText(textData) }
    </SectionContainer>
  );
}

export default IntroductionComponent;
