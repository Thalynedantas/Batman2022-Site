import React  from "react";
import "./style.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

function Comentarios(){
    return(
        <>
           <Header />
           <div className="container">
                <div className="titulo">
                    <h1> Conte-nos o que achou do Filme </h1>
                </div>
                <div class="comment-box">
                    <h2>Deixe Aqui seu comentário</h2>
                    <form id="comment-form">
                        <label for="name"> Nome: </label>
                        <input type="text" id="name" name="name" required />
                        
                        <label for="comment"> Comentário: </label>
                        <textarea id="comment" name="comment" placeholder="Digite seu comentário aqui" required></textarea>
                        
                        <button type="submit">Enviar</button>
                    </form>                 
                </div>
            <Footer />
            </div>            
        </>
    )
}

export default Comentarios;