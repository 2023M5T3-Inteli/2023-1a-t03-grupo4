import React from 'react';
import Dell from '../assets/svg/DellLogo/export'
import CNL from '../assets/images/CNLogoName.png'
import './components_css/Footer.css'; 

function Footer() {
  return (<div className="footer-container md-screen-to-column px-10 self-end">
    
      <div className="flex flex-row justify-between items-center space-x-12">
        <Dell width={"6rem"}/>

        <img src={CNL} alt="" style={{width:"7rem"}} />
      </div>

      <br /><br /><br />

      <div className="footer-text flex flex-row justify-between space-x-12 pt-6">
        <div className="flex flex-col gap-3">
          <a className="">Entre em Contato</a>
          <a className="">Políticas de segurança</a>
          <a className="">FAC</a>
        </div> 

        <div className="flex flex-col gap-3">
          <a className="">Entre em Contato</a>
          <a className="">Sobre os desenvolvedores</a>
        </div>
      </div>

    </div>);
}

export default Footer;