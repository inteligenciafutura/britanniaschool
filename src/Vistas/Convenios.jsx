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

    <img src="https://britanniaschool.com.co/imagenes/convenios.png" className="imagenConvenios" />


<h2 className="tituloConvenios">Convenios</h2>

<div className="textoCovenios">
<h2>BRITANNIA SCHOOL Y CAMBRIDGE.</h2>
<br></br>
El Colegio Britania School cuenta con un convenio académico y acompañamiento permanente con Cambridge University Press, para el mejoramiento de las diferentes habilidades del idioma inglés. 
<br></br>
Desde el grado preescolar hasta undécimo, se trabajan con materiales exclusivos: libros de texto, acceso a la plataforma virtual, Cambridge Learning Machine System, acompañamiento y capacitación a los docentes y preparación para la presentación de los exámenes internacionales.
<br></br>
<h2>CONVENIOS Y ALIANZAS</h2>
<br></br>
Nuestra institución cuenta con el convenio con Cambridge University Press, el cual apoya nuestro proceso formativo en inglés como segunda lengua y énfasis de nuestra oferta educativa a través de recursos y herramientas beneficiando de esta manera la enseñanza y el aprendizaje.
<br></br>
El convenio con SMART, lleva a nuestros estudiantes a gozar de varios beneficios para fortalecer y promover la formación y certificación del idioma bajo estándares internacionales a través de la presentación de los exámenes, los cuáles se pueden presentar en nuestra institución.
<br></br>
<br></br>
</div>

      <Footer></Footer>
    </div>
  );
}
