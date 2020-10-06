import React from 'react';
import { FaAngleDoubleUp, FaAngleDoubleDown } from 'react-icons/fa';
import './SectionFooter.css';

interface PropsInterface {
  isCollapsed: boolean,
  isCollapsible: boolean,
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

const SectionFooter: React.FC<PropsInterface> = ({
  isCollapsed, setIsCollapsed, isCollapsible,
}) => {
  if (!isCollapsible) {
    return null;
  }

  const className = `SectionFooter ${isCollapsed ? 'collapsed' : 'open' }`;

  return (
    <div
      className={ className }
      onClick={ () => setIsCollapsed(!isCollapsed) }
    >
      <span className='iconWrapper'>
         { isCollapsed
           ? <FaAngleDoubleDown />
           : <FaAngleDoubleUp />
         }
      </span>
    </div>
  );
};

export default SectionFooter;
