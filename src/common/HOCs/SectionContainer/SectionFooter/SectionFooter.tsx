import React from 'react';
import { FaAngleDoubleUp, FaAngleDoubleDown } from 'react-icons/fa';
import './SectionFooter.css';

interface PropsInterface {
  isCollapsed: boolean,
  isCollapsible: boolean,
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

const SectionFooter: React.SFC<PropsInterface> = ({
  isCollapsed, setIsCollapsed, isCollapsible,
}) => {
  if (!isCollapsible) { return null }

  return (
    <div
      className='SectionFooter'
      onClick={ () => setIsCollapsed(!isCollapsed) }
    >
      { isCollapsed ? <FaAngleDoubleUp /> : <FaAngleDoubleDown /> }
    </div>
  );
};

export default SectionFooter;
