import React from 'react';
import './Spinner.css';

type PropsTypes = {
  size?: string,
}

const Spinner = ({ size = 'medium' }: PropsTypes) => <div className={ `Spinner ${size}` } />;

export default Spinner;