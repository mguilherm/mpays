import Hero from "../../sections/Hero";
import Whatsapp from '../../assets/Whatsapp.png';
import './index.css'

export default function MainPage(){
  return(
    <div>
      <Hero/>
      <img src={Whatsapp} alt="" className="whatsapp"/>

    </div>
  )
}