import React from "react";
import './nosotrostyle.css';



function Nosotros() {
	
   
      return (
          
        <div class="container">
        <div class="VIDEO">
          <iframe
                width="420"
                height="315"
                src="https://www.youtube.com/embed/YAIKQT3k42Y"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
        </div>
        <div class="TEXTO">
          <p class="mainText">
                Somos un equipo de profesionales con más de 6 años de amplia <br></br>experiencia en el sector
                financiero, tanto como privado.<br></br>Nuestro objetivo es acercar a nuestros clientes a conseguir
                o ampliar<br></br> la libertad financiera acercándolos a los mejores productos financieros del
                sector,<br></br> dando ventajas competitivas en precios, rendimientos, intereses y utilidades.{' '}
                 Con la mejor atención personalizada para resolver <br></br>necesidades de nuestros clientes{' '}
                con soluciones directas y cuantificables.
                <br></br> Procapital se puede proclamar como una empresa transparente, con valores y productos y
                servicios únicos en el mercado.
                <br></br>
                <br></br>
              </p>
        </div>
        <div class="TITULO">
          <h1>"Ayudandote a predecir tu  <br></br>libertad financiera" </h1>
        </div>
      </div>
      );
  }
  
  export default Nosotros;