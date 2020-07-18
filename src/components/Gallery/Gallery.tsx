import React from 'react';
import './Gallery.css'
import sectionize from '../../common/HOCs/sectionize';

const GalleryComponent = () => {
  return (
    <div>
      Gallery
      <p>Blah, blah, blah</p>
      <p>Blah, blah, blah</p>
      <p>Blah, blah, blah</p>
      <p>Blah, blah, blah</p>
    </div>
  );
};

const withSection = sectionize({ title: 'Gallery' });
export default withSection(GalleryComponent);
