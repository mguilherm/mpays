import HeroBanner from "../../assets/HeroBanner.png";
import Laptop from "../../assets/Laptop.png";
import NavBar from "../../sections/NavBar";
import "./index.css";

function Hero() {
  return (
    <div className="hero">
      <img src={HeroBanner} alt="" />
      <NavBar />
      <div className="hero--wrap-content">
        <span>
          <h1>
            Tecnologia e segurança pra você <strong>vender mais.</strong>
          </h1>
          <p>
            Venda online com a segurança e tecnologia mpays. Soluções simples e
            flexíveis para digitalizar o seu negócio.
          </p>
        </span>
        <img className="hero--image" src={Laptop} alt="" />
      </div>
    </div>
  );
}

export default Hero;
