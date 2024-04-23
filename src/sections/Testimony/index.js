import React from "react";
import Background from "../../assets/TestimonyBackground.png";
import EachTestimony from "./EachTestimony";
import './index.css';

function Testimony() {
  return (
    <div className="testimony">
      <img src={Background} alt="" className="testimony--img" />
      <div className="testimony--content">
        <h3>Depoimentos</h3>
        <p>O suporte ao cliente é nossa primeira prioridade.</p>
        <div className="testimony--card">
        <EachTestimony />
        <EachTestimony />
        <EachTestimony />
        </div>
      </div>
    </div>
  );
}

export default Testimony;
