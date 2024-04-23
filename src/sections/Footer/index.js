import React from "react";
import FooterImage from "../../assets/Footer.png";
import Certificates from "../../assets/Certificates.png";
import Logo from "../../assets/LogoColor.png";
import FacebookIcon from "../../assets/socialMedia/facebook.png";
import LinkedInIcon from "../../assets/socialMedia/linkedin.png";
import InstagramIcon from "../../assets/socialMedia/instagram.png";
import AmericanExpress from "../../assets/carts/AmericanExpress.png";
import Banescard from "../../assets/carts/Banescard.png";
import DinersClub from "../../assets/carts/DinersClub.png";
import Elo from "../../assets/carts/Elo.png";
import Hipercard from "../../assets/carts/Hipercard.png";
import JCB from "../../assets/carts/JCB.png";
import Mastercard from "../../assets/carts/Mastercard.png";
import PIX from "../../assets/carts/PIX.png";
import Visa from "../../assets/carts/Visa.png";
import "./index.css";

function Footer() {
  const cartIcon = [
    AmericanExpress,
    Banescard,
    DinersClub,
    Elo,
    Hipercard,
    JCB,
    Mastercard,
    PIX,
    Visa,
  ];

  return (
    <div className="footer">
      <img src={FooterImage} alt="" className="footer--img" />
      <div className="footer--content">
        <div className="footer--collumns">
          <span>
            <h4>Endereço</h4>
            <p>
              R. dos Andradas, 1234 Centro Histórico Porto Alegre - RS 90020-008
            </p>
          </span>
          <span>
            <h4>Legal</h4>
            <p>Termos de uso</p>
            <p>Politica de Privacidade</p>
          </span>
          <span>
            <h4>Contato</h4>
            <p>contato@mpays.com</p>
            <p>(51) 98314.3325</p>
            <span className="social-media">
              <img src={LinkedInIcon} alt="" />
              <img src={FacebookIcon} alt="" />
              <img src={InstagramIcon} alt="" />
            </span>
          </span>
          <span>
            <div className="cart--wrapper">
              {cartIcon.map((item) => {
                return <img src={item} alt="" />;
              })}
            </div>
          </span>
          <span>
            <img src={Certificates} alt="" />
          </span>
        </div>
        <div className="footer--copyright">
          <p>Copyright @ 2022 mpays</p>
          <img src={Logo} alt="" />
        </div>
        <p className="footer--disclaimer">
          mpays é um produto da Multti Tecnologia e Integrações, empresa
          brasileira registrada no CNPJ nº 33.511.889/0001-20. A atividade de
          subcredenciamento é dispensada de autorização do Banco Central do
          Brasil, conforme termos da Circular nº 3.885/2018. Demais dispositivos
          aplicáveis, como o disposto nas Circulares nº 3.682/2013, 3.886/2018,
          3.952/2019 e Resolução nº 24/2020 são rigorosamente cumpridos.
        </p>
      </div>
    </div>
  );
}

export default Footer;
