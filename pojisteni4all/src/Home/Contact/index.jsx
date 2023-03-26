import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Contact = ({ name, phoneIcon, phone, emailIcon, email }) => {
  return (
    <div className="contacts_item">
      <h3>{name}</h3>
      <div className="contacts_phone">
        <img
          className="contacts_icon"
          id="phone-icon"
          src={phoneIcon}
          alt="Telefon"
        />
        <Link className="contacts_link" to={`tel: ${phone}`}>
          {phone}
        </Link>
      </div>
      <div className="contacts_email">
        <img
          className="contacts_icon"
          id="email-icon"
          src={emailIcon}
          alt="E-mail"
        />
        <Link className="contacts_link" to={`mailto: ${email}`}>
          {email}
        </Link>
      </div>
    </div>
  );
};
