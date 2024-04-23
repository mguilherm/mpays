import React from 'react';
import './index.css';

function Form() {
  return (
  <div className='form'>
    <div className="form--section">
      <label>Nome e Sobrenome *</label>
      <input placeholder='Nome' type="text" name="" id="" />
    </div>
    <div className="form--section">
      <label>E-mail *</label>
      <input placeholder='E-mail' type="email" name="" id="" />
    </div>
    <div className="form--section">
      <label>Telefone *</label>
      <input placeholder='Telefone' type="phone" name="" id="" />
    </div>
    <div className="form--section">
      <label>Senha *</label>
      <input placeholder='⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉' type="password" name="" id="" />
    </div>
    <button>Cadastrar</button>
  </div>
    );
}

export default Form;