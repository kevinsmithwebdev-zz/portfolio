import React from 'react';
import './Button.css';

// TODO: get from common file
type ButtonDatumType = {
  color: string,
  backgroundColor: string,
  label?: string,
}

type ButtonType = {
  link?: string,
  callback?: Function | null,
  buttonData: ButtonDatumType,
  isDisabled?: boolean,
}


const Button = ({ link, callback, buttonData: { label, backgroundColor = 'darkgray', color = 'white' }, isDisabled = false }: ButtonType) => {
  const handleClick = (e: React.MouseEvent) => {
    if (callback)
      callback();
    else
      window.open(link);
  }
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
