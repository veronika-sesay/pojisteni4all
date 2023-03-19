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
            <HashLink onClick={closeNav} to="/home#insurance">
              Druhy pojištění
            </HashLink>
            <HashLink onClick={closeNav} to="/home#partners">
              Smluvní partneři
            </HashLink>
            <HashLink onClick={closeNav} to="/home#assistance">
              Likvidace událostí
            </HashLink>
            <HashLink onClick={closeNav} to="/home#contacts">
              Kontakty
            </HashLink>
          </div>
        </div>
      </div>
      <div className="menu">
        <img className="logo" src={Logo} alt="logo" />
        <nav>
          <HashLink smooth to="/home#insurance">
            Druhy pojištění
          </HashLink>
          <HashLink smooth to="/home#partners">
            Smluvní partneři
          </HashLink>
          <HashLink smooth to="/home#assistance">
            Likvidace událostí
          </HashLink>
          <HashLink smooth to="/home#contacts">
            Kontakty
          </HashLink>
        </nav>
      </div>
    </>
  );
};
