import React from 'react';
import './Logo.css';

export default (props) => (
  <img src={props.src} className={props.className} alt={props.alt} />
);
