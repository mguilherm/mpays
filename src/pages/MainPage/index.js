import Hero from "../../sections/Hero";
import Carrousel from "../../sections/Carrousel";
import Testimony from "../../sections/Testimony";
import ContactUs from "../../sections/ContactUs";
import Whatsapp from '../../assets/Whatsapp.png';
import './index.css'
import Footer from "../../sections/Footer";

export default function MainPage(){
  return(
    <div>
      <Hero/>
      <img src={Whatsapp} alt="" className="whatsapp"/>
      <Carrousel/>
      <Testimony/>
      <ContactUs/>
      <Footer/>

    </div>
  )
}