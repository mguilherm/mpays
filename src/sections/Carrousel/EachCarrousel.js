import React from "react";
import Img01 from "../../assets/carroussel/IMG.png";
import "./index.css";

function EachCarrousel() {
  return (
    <div className="carrousel-wrapper">
      <div className="carrousel-content">
        <h3>Pagamentos com máxima aprovação</h3>
        <p>
          Venda online com a maior taxa de aprovação possível. Reduza o número
          de vendas recusadas, autorize o maior número de pagamentos, receba e
          gerencie seu dinheiro de forma flexível.
        </p>
        <a>Cadastre-se</a>
      </div>
      <img src={Img01} alt="" />
    </div>
  );
}

export default EachCarrousel;
