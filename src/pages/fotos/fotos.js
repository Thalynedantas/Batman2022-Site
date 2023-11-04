import React from "react";
import Header from "../../components/header/header";
import "./style.css";
import Footer from "../../components/footer/footer";

function Fotos(){
    return(
        <>
            <Header />
            <div className="box-container">
                <div id="sinopse2">
                    <p class="discrition2">
                        Imagens do Filme Batman (2022) 
                    </p>
                    <span>
                        <i>Um filme de Matt Reeves </i>
                        com Robert Pattinson, Zoë Kravitz, Paul Dano, Jeffrey Wright

                    </span>

                </div>

                <div className="cenas-content">
                    <div class="img cena1"></div>
                    <div class="img cena2"></div>
                    <div class="img cena3"></div>
                    <div class="img cena4"></div>
                    <div class="img cena5"></div>
                    <div class="img cena6"></div>
                    <div class="img cena7"></div>
                    <div class="img cena8"></div>
                    <div class="img cena9"></div>
                    <div class="img cena10"></div>
                    <div class="img cena11"></div>
                    <div class="img cena12"></div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Fotos;