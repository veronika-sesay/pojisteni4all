import React from 'react';
import './style.css';
import Aboutus from '../img/aboutus.jpg';
import { HashLink } from 'react-router-hash-link';
import Partners from '../img/partners.png';
import Assistance from '../img/assistance.png';
import Arrow from '../img/arrow.png';

export const Home = () => {
  return (
    <>
      <div className="aboutus" id="aboutus">
        <div className="aboutus_image">
          <img id="image1" src={Aboutus} alt="Tým" />
        </div>
        <div className="aboutus_text">
          <h2>O nás</h2>
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
      <div className="partners" id="partners">
        <h2>Smluvní partneři</h2>
        <div className="partners_image">
          <img id="image2" src={Partners} alt="Partneři"></img>
        </div>
        <div className="partners-container">
          <p className="partners_item">Kooperativa, pojišťovna a.s.</p>
          <p className="partners_item">ČPP, pojišťovna a.s.</p>
          <p className="partners_item">Generali</p>
          <p className="partners_item">Uniqa</p>
          <p className="partners_item">Allianz</p>
        </div>
      </div>
      <hr className="divider" />
      <div className="assistance" id="assistance">
        <h2>Likvidace událostí</h2>
        <div className="assistance-container">
          <div className="assistance_text">
            <p>
              Rádi vám pomůžeme při nahlášení škod, pošleme doklady ke škodám,
              před nahlášením škody můžeme prokonzultovat. Naše dlouhodobé
              zkušenosti vám mohou být přínosné.
            </p>
            <p>
              Pro nahlášení škod klikněte na{' '}
              <HashLink smooth to="/home#contacts">
                kontakty.
              </HashLink>{' '}
            </p>
          </div>
          <div className="assistance_image">
            <img id="image3" src={Assistance} alt="Likvidace událostí" />
          </div>
        </div>
      </div>

      <hr className="divider" />
      <div id="contacts">Kontakty</div>
      <HashLink smooth to="/home#top">
        <img id="arrow" src={Arrow} alt="" />
      </HashLink>
    </>
  );
};
