import React from 'react';
import './style.css';
import Logo from '../img/logo.png';
import { HashLink } from 'react-router-hash-link';

export const Navigation = () => {
  return (
    <>
      <div className="menu">
        <img id="logo" src={Logo} alt="logo" />
        <HashLink smooth to="/Home#onas">
          O nás
        </HashLink>
      </div>
    </>
  );
};
