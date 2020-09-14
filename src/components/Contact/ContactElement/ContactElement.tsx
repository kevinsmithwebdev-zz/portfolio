import React from 'react';
import { FaEnvelopeSquare, FaPhoneSquareAlt, FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import './ContactElement.css';

type PropsType = {
  slug: string,
  data?: string,
}

type IconsType = {
  [key: string]: {
    Icon: any,
    color?: string,
  },
}

const icons = {
  email: {
    Icon: FaEnvelopeSquare,
    color: 'green',
  },
  phone: {
    Icon: FaPhoneSquareAlt,
    color: '#c84100',
  },
  linkedin:{
    Icon:  FaLinkedin,
    color: '#1857a2',
  },
  github: {
    Icon: FaGithubSquare,
  },
} as IconsType;

const getAnchorData= (data: PropsType) => {
  switch (data.slug) {
    case 'email':
      return { href: `mailto:${data.data}`, target: '_blank' };
    case 'phone':
      return { href: `tel:${data.data}`, target: '' };
    default:
      return { href: data.data, target: '_blank' };
  }
}

const ContactElement = (data: PropsType) => {
  const { Icon, color } = icons[data.slug];
  const { href, target } = getAnchorData(data);
  return (
    <a
      key={ data.slug }
      className='ContactElement'
      style={ { color: color || 'black' } }
      href={ href }
      target={ target }
      rel='noopener noreferrer'
    >
      <Icon size='1.5em' />
      &nbsp;
      { data.data }
    </a>
  );
};

export default ContactElement;