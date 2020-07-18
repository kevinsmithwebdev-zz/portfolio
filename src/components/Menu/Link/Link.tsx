import React from 'react';
import './Link.css';
import { useTranslation } from "react-i18next";

type Props = { linkName: string };

const convertToAnchor = (str: string): string => `#${str.replace(' ', '-')}`;

const Link = ({ linkName }: Props) => {
  const { t } = useTranslation();
  return (
    <span className='Link' >
        <a href={ convertToAnchor(linkName) } className='link-button'>{ t(`sections.${linkName}`) }</a>
    </span>
  );
};

export default Link;
