import React from 'react';
import './Contact.css'
import sectionize from '../../common/HOCs/sectionize';

const ContactComponent = () => {
  return (
    <div id='contact' className='contact'>
      Contact
      <p>Blah, blah, blah</p>
      <p>Blah, blah, blah</p>
      <p>Blah, blah, blah</p>
      <p>Blah, blah, blah</p>
    </div>
  );
};

const withSection = sectionize({ title: 'Contact' });
export default withSection(ContactComponent);
