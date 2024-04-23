import Hero from "../../sections/Hero";
import Whatsapp from '../../assets/Whatsapp.png';
import './index.css'
import Carrousel from "../../sections/Carrousel";
import Testimony from "../../sections/Testimony";

export default function MainPage(){
  return(
    <div>
      <Hero/>
      <img src={Whatsapp} alt="" className="whatsapp"/>
      <Carrousel/>
      <Testimony/>

    </div>
  )
}