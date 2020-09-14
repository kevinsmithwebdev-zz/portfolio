import React from 'react';
import { useTranslation } from 'react-i18next';

const enImageURL =  'https://kswd-portfolio.s3-us-west-1.amazonaws.com/main/en.png';
const esImageURL =  'https://kswd-portfolio.s3-us-west-1.amazonaws.com/main/es.png';

const getOtherLanguage = (currentLanguage: string) => currentLanguage === 'en' ? 'es' : 'en';

const handleLanguageClick = (e: any, i18n: any, nextLanguage: string) => {
  e.preventDefault();
  i18n.changeLanguage(nextLanguage)
}

const I18nButton = () => {

  const { i18n }= useTranslation();
  const currentLanguage = i18n.language;
  const nextLanguage = getOtherLanguage(currentLanguage);
  const nextLanguageImage = nextLanguage === 'en' ? enImageURL : esImageURL;
  return (
    <button
      style={ { padding: 0, margin: 0, backgroundColor: 'rgba(0, 0, 0, 0)', borderWidth: 0 } }
      onClick={e => handleLanguageClick(e, i18n, nextLanguage)}
    >
        <img src={ nextLanguageImage } alt={ `language selection - ${nextLanguage}` } style={ { height: '20px', width: 'auto', padding: 0, margin: 0 } }/>
    </button>
  );
};

export default I18nButton;
