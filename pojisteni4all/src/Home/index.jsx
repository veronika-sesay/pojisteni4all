import React from 'react';
import './style.css';
import Aboutus from '../img/aboutus.jpg';
import { HashLink } from 'react-router-hash-link';

export const Home = () => {
  return (
    <>
      <div className="aboutus" id="aboutus">
        <div className="aboutus_image">
          <img id="image1" src={Aboutus} alt="Tým" />
          <h2>O nás</h2>
        </div>
        <div className="aboutus_text">
          <p>
            Jsme malý kolektiv, kde upřednostňujeme osobní a individuální
            přístup ke klientům a sjednání pojištění dle nároků, požadavků a
            cílů klienta.
          </p>
          <p>
            V tomto oboru jsme již od roku 1992 a proto vám můžeme poskytnout
            profesionální služby podpořené dlouholetými zkušenostmi nejen v
            oblasti sjednávání pojištění, ale i pomocí při likvidacích
            pojistných událostí a úkonů spojených se servisem vašich pojistných
            smluv.
          </p>
          <p>
            Pokud chcete zkusit být součástí našeho rodinného přístupu a
            pojistného kmene kontaktujte nás.
            {/* {' '}
            <HashLink smooth to="/home#contacts">
              ZDE.
            </HashLink> */}
          </p>
        </div>
      </div>
      <hr className="divider" />
      <div className="insurance" id="insurance">
        <h2>Druhy pojištění</h2>
        <h3 className="insurance_heading">
          Sjednáváme všechny druhy pojištění:
        </h3>
        <div className="insurance-container">
          <p className="insurance_item">podnikatelská rizika</p>
          <p className="insurance_item">automobily</p>
          <p className="insurance_item">rodinné domy</p>
          <p className="insurance_item">domácnosti</p>
          <p className="insurance_item">chaty a chalupy</p>
          <p className="insurance_item">bytové domy</p>
          <p className="insurance_item">odpovědnost za újmu</p>
          <p className="insurance_item">životní a úrazové pojištění</p>
          <p className="insurance_item">léčebné výlohy v zahraničí</p>
        </div>
      </div>
      <hr className="divider" />
      <div id="partners">Smluvní partneři</div>
      <hr className="divider" />
      <div id="assistance">Likvidace událostí</div>
      <hr className="divider" />
      <div id="contacts">Kontakty</div>
    </>
  );
};
