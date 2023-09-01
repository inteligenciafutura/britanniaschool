import React from "react";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Convenios() {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>

      <img
        src="https://britanniaschool.com.co/imagenes/bannerVerde.png"
        className="imagenConvenio"
      />

      <h2 className="tituloConvenios">Convenios</h2>

      <div className="textoCovenios">
        <h2>BRITANNIA SCHOOL Y CAMBRIDGE.</h2>
        <br></br>
        El Colegio Britania School cuenta con un convenio académico y
        acompañamiento permanente con Cambridge University Press, para el
        mejoramiento de las diferentes habilidades del idioma inglés.
        <br></br>
        Desde el grado preescolar hasta undécimo, se trabajan con materiales
        exclusivos: libros de texto, acceso a la plataforma virtual, Cambridge
        Learning Machine System, acompañamiento y capacitación a los docentes y
        preparación para la presentación de los exámenes internacionales.
        <br></br>
        <br></br>
      </div>

      <Footer></Footer>
    </div>
  );
}
