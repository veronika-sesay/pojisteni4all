import React, { useState } from 'react';
import './style.css';
import Logo from '../img/logo.png';
import { HashLink } from 'react-router-hash-link';

export const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  const closeNav = () => setNavOpen(false);

  return (
    <>
      <div className="mobile-menu">
        <img className="logo" src={Logo} alt="logo" />
        <div className="mobile-menu-container">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="nav-btn"
          ></button>
          <div
            className={
              navOpen ? 'nav-mobile' : 'nav-mobile nav-mobile--closed '
            }
          >
            <HashLink onClick={closeNav} to="/home#pojisteni">
              Druhy pojištění
            </HashLink>
            <HashLink onClick={closeNav} to="/home#partneri">
              Smluvní partneři
            </HashLink>
            <HashLink onClick={closeNav} to="/home#likvidace">
              Likvidace událostí
            </HashLink>
            <HashLink onClick={closeNav} to="/home#kontakty">
              Kontakty
            </HashLink>
          </div>
        </div>
      </div>
      <div className="menu">
        <img className="logo" src={Logo} alt="logo" />
        <nav>
          <HashLink smooth to="/home#onas">
            O nás
          </HashLink>
          <HashLink smooth to="/home#pojisteni">
            Druhy pojištění
          </HashLink>
          <HashLink smooth to="/home#partneri">
            Smluvní partneři
          </HashLink>
          <HashLink smooth to="/home#likvidace">
            Likvidace událostí
          </HashLink>
          <HashLink smooth to="/home#kontakty">
            Kontakty
          </HashLink>
        </nav>
      </div>
    </>
  );
};
