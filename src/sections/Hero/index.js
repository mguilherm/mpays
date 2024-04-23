import HeroBanner from "../../assets/HeroBanner.png";
import NavBar from '../../sections/NavBar';
import "./index.css";

function Hero() {
  return (
    <div className="hero">
      <img src={HeroBanner} alt="" />
      <NavBar/>
    </div>
  );
}

export default Hero;
