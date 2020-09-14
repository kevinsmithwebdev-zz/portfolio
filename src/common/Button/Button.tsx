import React from 'react';
import './Button.css';
// import { ButtonType } from '../../common/types';

type ButtonType = {
  label: string,
  link?: string,
  callback?: Function,
  color: string,
  backgroundColor: string,
  isDisabled?: boolean,
}


const Button = ({ label, link, callback, color = 'white', backgroundColor = 'darkgray', isDisabled = false }: any) => {
  const handleClick = callback || (() => window.open(link));
  const className = `Button ${isDisabled ? 'inactive' : 'active' }`;
  const style = {
    color: isDisabled ? 'white' : color,
    backgroundColor: isDisabled ? 'lightgray' : backgroundColor,
    borderColor: isDisabled ? 'lightgray' : backgroundColor,
    boxShadow: isDisabled ? '0' : '1px 2px #888888',
  };
  return (
    <button
      className={ className }
      onClick={ handleClick }
      style={ style }
      disabled={ isDisabled }
    >
      { label }
    </button>
  );
};

export default Button;
