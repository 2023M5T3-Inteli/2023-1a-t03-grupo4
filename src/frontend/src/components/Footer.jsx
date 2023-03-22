import React from 'react';
import Dell from '../assets/svg/DellLogo/export'
import CNL from '../assets/images/CNLogoName.png'
import './components_css/Footer.css'; 

function Footer() {
  return (
    <div className="footer-container">
    
    <div className="footer-img1">
        <Dell width={"6rem"}/>
    </div>

    <div className="footer-img2">
        <img src={CNL} alt="" />
    
    </div>

    <div className="flex-col">
      <p className="footer-text2">Entre em Contato</p>
      <p className="footer-text2">Sobre os desenvolvedores</p>
    </div> 

    <div className="flex-col">
      <p className="footer-text">Entre em Contato</p>
      <p className="footer-text">Políticas de segurança</p>
      <p className="footer-text">FAC</p>
    </div> 

    </div>
  );
}

export default Footer;