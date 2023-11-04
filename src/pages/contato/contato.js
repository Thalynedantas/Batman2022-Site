import React from "react";
import "./style.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';
import Whatsapp from '../../assets/whatsapp.png';


function Contato(){
  return(
    <>
      <Header />  
      <main>
          <div class="contacts-container">
            <div class="titulo-contacts">
              <h1 class="texto">Siga nossas redes sociais</h1>
            </div>
          
            <div class="wrapper">
              <div class="button-contacts" >
                <div class="icon">
                  <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                    <img class="button-contacts" alt="facebook" src={Facebook} />
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </div>
              </div> 
              <div class="button-contacts">
                <div class="icon">
                  <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    <img class="button-contacts" alt="instagram" src={Instagram} />
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div class="button-contacts">
                <div class="icon">
                  <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer">
                    <img class="button-contacts" alt="whatsapp" src={Whatsapp} />
                    <i class="fa-brands fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>          
        <Footer />
      </main>
    </>
  )
}

export default Contato;


