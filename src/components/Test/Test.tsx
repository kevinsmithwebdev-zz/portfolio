import React from "react";
import { useTranslation } from "react-i18next";

const Test = () => {
  const { t } = useTranslation();

  return <h2>{t('sections.introduction')}</h2>;
}

export default Test;
