import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import './SectionContainer.css';
import SectionFooter from './SectionFooter/SectionFooter';


export type PropsType = {
  isCollapsible?: boolean,
  titleSlug?: string,
  children: React.ReactNode,
}

const SectionContainer = ({
  isCollapsible = false, titleSlug = '', children,
}: PropsType) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { t } = useTranslation();
  const title = t(`sections.${titleSlug}`, titleSlug).toUpperCase();
  const contentClassName = isCollapsible && isCollapsed
    ? 'content collapsed'
    : 'content';

  return (
    <div className='SectionContainer' >
      { !!titleSlug && <h2 className='title'>{ title }</h2> }
      <div className={ contentClassName }>
        { children }
      </div>

      <SectionFooter
          isCollapsed={ isCollapsed }
          isCollapsible={ isCollapsible }
          setIsCollapsed={ setIsCollapsed }
        />
    </div>
  );
}

export default SectionContainer;
