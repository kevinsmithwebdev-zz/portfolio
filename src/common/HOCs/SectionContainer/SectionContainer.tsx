import React, { useState } from 'react';
import './SectionContainer.css';
import SectionFooter from './SectionFooter/SectionFooter';

interface ContainerPropsInterface {
  isCollapsible?: boolean,
}

interface PropsInterface {
  WrappedComponent: React.ComponentType<any>,
  containerProps: ContainerPropsInterface,
}

const SectionContainer: React.SFC<PropsInterface> = ({
  WrappedComponent, containerProps: { isCollapsible = false } = {}
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const contentClassName = isCollapsible && !isCollapsed
    ? 'content collapsed'
    : 'content';

  return (
    <div className='SectionContainer' >
      <div className={ contentClassName }>
        <WrappedComponent />
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
