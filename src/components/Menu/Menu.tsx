import React from 'react';
import Logo from './Logo/Logo';
import Link from './Link/Link';
import MenuButtons from './MenuButtons/MenuButtons';
import './Menu.css'

const links = [
  'introduction',
  'gallery',
  'skills',
  'about-me',
  'contact',
];

const Menu = () => {
  return (
    <div className='Menu' >
      <Logo />

      <nav className='links'>
        { links.map(linkName => <Link key={ linkName } linkName={ linkName } /> ) }
      </nav>

      <MenuButtons />
    </div>
  );
};

export default Menu;