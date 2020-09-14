import React from 'react';
import SectionContainer from '../../common/SectionContainer/SectionContainer';
import ContactElement from './ContactElement/ContactElement';
import './Contact.css'

const contactData = [
  { slug: 'email', data: 'kevinsmithwebdev@gmail.com' },
  { slug: 'phone', data: '510-277-2006' },
  { slug: 'linkedin', data: 'https://www.linkedin.com/in/kevinsmithwebdev' },
  { slug: 'github', data: 'https://github.com/kevinsmithwebdev' },
];


const ContactComponent = () => {
  return (
    <SectionContainer titleSlug='contact'>
      { contactData.map(ContactElement) }
    </SectionContainer>
  );
};

export default ContactComponent;
