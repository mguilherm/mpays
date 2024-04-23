import React from "react";
import Background from "../../assets/TestimonyBackground.png";
import EachTestimony from "./EachTestimony";
import './index.css';
import Image1 from "../../assets/testimony/image 1.png";
import Image2 from "../../assets/testimony/image 2.png";
import Image3 from "../../assets/testimony/image 3.png";

function Testimony() {
  const testimony = [
    {
      id:1,
      name: 'Carlos Eduardo Amaral',
      description: 'A mpays foi a plataforma onde eu tive a maior taxa de aprovação de crédito do mercado.',
      position: 'CEO da Amaral Mídia',
      imagePath: Image1
    },
    {
      id:2,
      name: 'Renato Laureano',
      description: 'O principal diferencial é a taxa de cartão recusado ser muito baixa, aumentando nossa taxa de conversão e o faturamento.”',
      position: 'Fundador da Anellimn Store',
      imagePath: Image2
    },
    {
      id:3,
      name: 'Armando Girão',
      description: 'Depois de muito pesquisar, decidi migrar para a mpays e já nas primeiras semanas nossa taxa de conversão subiu para 94%.',
      position: 'Fundador da Orion E-commerce',
      imagePath: Image3
    },
  ];
  return (
    <div className="testimony">
      <img src={Background} alt="" className="testimony--img" />
      <div className="testimony--content">
        <h3>Depoimentos</h3>
        <p>O suporte ao cliente é nossa primeira prioridade.</p>
        <div className="testimony--card">
          {testimony.map((item)=>{
            return <EachTestimony key={item.id} props={item} />
          })}
        </div>
      </div>
    </div>
  );
}

export default Testimony;
