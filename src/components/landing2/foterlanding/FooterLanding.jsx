import React from "react";
import InputHero from "./ImputHero";
import drafts from "../../../assets/img/draftsVerde.svg";
import logo3 from '../../../assets/img/Logo.svg';
import facebook from '../../../assets/img/landing_Facebook_W.svg'; 
import twitter from '../../../assets/img/landing_Twitter_W.svg';
import instagram from '../../../assets/img/landing_Instagram_W.svg';
import '../../../scssWeb/main.css'

export default function FooterLanding() {
  return (
    <div className="landing-footer">
      <div className="izquierda">
        <div className="logo-and-title">
          <hr />
          <div className="logo-footer">
            <img src={logo3} alt='Logo Academia' />
          </div>
        </div>
        <div className="redes">
          <h2>NUESTRAS REDES SOCIALES</h2>
          <br />
          <div className="icon-redes">
            <img src={facebook} alt='facebook' />
            <img src={twitter} alt='twitter' />
            <img src={instagram} alt='instagram' />
          </div>
        </div>
      </div>
      <div className="centro">
        <h2>SUSCRÍBETE Y RECIBE NUESTRO BOLETÍN QUINCENAL </h2>
        <div className="ico-imput">
          <button className="caja-icono">
            <img className="iconofotter" src={drafts} alt='imagen de boletin' />
          </button>
          <InputHero />
        </div>
      </div>
      <div className="derecha">
        <div className="contactos">
          <h2>NUESTROS CONTACTOS</h2>
          <br />
          <p>Dudas y consultas</p>
          <br />
          <p>sos@desafiolatam.com</p>
          <br />
          <p>Ayuda técnica</p>
          <br />
          <p>ayuda@desafiolatam.com</p>
          <br />
        </div>
      </div>
    </div>
  );
}
