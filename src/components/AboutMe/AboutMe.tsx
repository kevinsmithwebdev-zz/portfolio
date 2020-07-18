import React from 'react';
import sectionize from '../../common/HOCs/sectionize';
import textData from './aboutMeText.data';
import renderText from '../../common/utilities/text/renderText';
import './AboutMe.css'

const AboutMeComponent = () => (
  <div className='AboutMe'>
    { renderText(textData) }
    <div className='links'>
      <a href='./resume/Kevin Smith - Resume.pdf'>Resume</a>
      <a href='./resume/Kevin Smith - Cover Letter.pdf'>Cover Letter</a>
    </div>
  </div>
);

const withSection = sectionize({ title: 'About Me', isCollapsible: true });
export default withSection(AboutMeComponent);
