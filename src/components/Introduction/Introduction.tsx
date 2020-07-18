import React from 'react';
import { useTranslation } from "react-i18next";
import sectionize from '../../common/HOCs/sectionize';
import renderText from '../../common/utilities/text/renderText';
import toTitleCase from '../../utilities/text/convertToTitleCase';

import './Introduction.css'

const IntroductionComponent = () => {
  const { t } = useTranslation();
  const textData = t('introductionTextData', { returnObjects: true });
  const title = toTitleCase(t('sections.introduction'));

  console.log('asdf3', textData);
  return (
    <div>
      <h2>{ title }</h2>
      { renderText(textData) }
    </div>
  );
};

const withSection = sectionize();
export default withSection(IntroductionComponent);
