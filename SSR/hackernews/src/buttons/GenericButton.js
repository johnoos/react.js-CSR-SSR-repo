import React, { Component } from 'react';
import './index.css';

const GenericButton = ({onClick, className='', children }) =>
  <button 
    onClick={onClick} 
    className={className} 
    type="button">
      {children}
  </button> 

export default GenericButton;