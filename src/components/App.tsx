import React from 'react';
import Introduction from './Introduction/Introduction';
import Gallery from './Gallery/Gallery';
import Menu from './Menu/Menu';
import Skills from './Skills/Skills';
import AboutMe from './AboutMe/AboutMe';
import Contact from './Contacts/Contact';
import Test from './Test/Test';

import './App.css';

const App = () => (
  <div id='App'>
    <Menu />
    <Introduction />
    <Skills />
    <Gallery />
    <AboutMe />
    <Contact/>
    <Test />
  </div>
);

export default App;
