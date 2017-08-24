import React from 'react';
import logoGear from '../../media/logoGear.png';
import logoIcon from '../../media/logoIcon.png';
import './Logo.css';

export default (props) => (
  <div className='logo'>
    <img src={logoGear} className={props.outerClass || 'animated-logo'} alt="logo" />
    <img src={logoIcon} className={props.innerClass || 'locked-logo'} alt="logo" />
  </div>
);
