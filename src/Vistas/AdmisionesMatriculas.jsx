import React from 'react'
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function AdmisionesMatriculas() {
  return (
    <div>
    <Header></Header>
    <Menu></Menu>

    <div className="containerNosotros">

   
    <div className="containerMatriculas">
  <div className="columnMatriculas">
    <div className="centeredMatriculas">
      <h1>INSCRIPCIONES ABIERTAS AÑO 2023</h1>
      <p>RESERVA TU CUPO</p>
      <p>Formulario en Línea: <a href="https://forms.gle/pwzcaGxAk9aQiFc99" target="_blank">https://forms.gle/pwzcaGxAk9aQiFc99</a></p>
    </div>
  </div>
  
  <div className="columnMatriculas blueMatriculas">
    <div className="form-containerMatriculas">
      <h2>Contactános ahora</h2>
      
        <input type="text" placeholder="Nombre" />
        <input type="tel" placeholder="Teléfono" />
        <input type="email" placeholder="Email" />
        <label><input type="checkbox" /> Preescolar</label>
        <label><input type="checkbox" /> Primaria</label>
        <label><input type="checkbox" /> Bachillerato</label>
        <button type="submit">Enviar</button>
      
    </div>
  </div>
  
  <div className="columnMatriculas">
    <img className='imgMatriculas' src="https://britanniaschool.com.co/imagenes/matriculas2023.jpg" />
  </div>
</div>

    </div>
    <Footer></Footer>

    </div>
  )
}
