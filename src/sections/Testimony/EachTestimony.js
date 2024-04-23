import React from "react";
import "./index.css";
import Quote from "../../assets/Quote.png";
import Image01 from "../../assets/testimony/image 1.png";

function EachTestimony() {
  return (
    <div className="box">
      <div className="box--img">
        <img src={Image01} alt="" />
      </div>
      <img src={Quote} alt="" />
      <div className="box--content">
        <p>
          A mpays foi a plataforma onde eu tive a maior taxa de aprovação de
          crédito do mercado.
        </p>
        <h4>Carlos Eduardo Amaral</h4>
        <p>CEO da Amaral Mídia</p>
      </div>
    </div>
  );
}

export default EachTestimony;
