import React from 'react';
import SectionContainer from './SectionContainer/SectionContainer'
// import './sectionize.css';

export default containerProps => WrappedComponent => {
  return () => (
    <SectionContainer
      WrappedComponent={ WrappedComponent }
      containerProps={ containerProps }
    />
  );
}
