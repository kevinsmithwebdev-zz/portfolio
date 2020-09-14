import React, { useState } from 'react';
import Introduction from './Introduction/Introduction';
import Gallery from './Gallery/Gallery';
import Menu from './Menu/Menu';
import Skills from './Skills/Skills';
import AboutMe from './AboutMe/AboutMe';
import Contact from './Contact/Contact';
import AppModal from './AppModal/AppModal';

import './App.css';

const App = () => {
  const [modalData, setModalData] = useState(null);
  const clickHandler = modalData
    ? (e:any) => {
        e.preventDefault();
        setModalData(null);
      }
    : () => {}; // TODO: make it take null?
  return (
    <div className='App'>
      <div
        className={ modalData ? 'blur' : '' }
        onClick={ clickHandler }
      >
        <Menu />
        <div className='routesWrapper'>
          <Introduction />
          <Skills />
          <Gallery setModalData={ setModalData} />
          <AboutMe />
          <Contact/>
        </div>
      </div>

      <AppModal data={ modalData } setModalData={ setModalData } />
    </div>
  );
}

export default App;
