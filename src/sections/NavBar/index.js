import React from 'react';
import Logo from "../../assets/Logo.png";
import './index.css';


function NavBar() {
  return (
  <div className='navBar'>
    <span>
        <img src={Logo} alt="" />
      </span>
      <ul>
        <li>Soluções</li>
        <li>Tarifas</li>
        <li>Depoimentos</li>
        <li>Cadastro</li>
        <li>Contato</li>
        <li className='navBar--button'>Entrar</li>
      </ul>
  </div>
  );
}

export default NavBar;