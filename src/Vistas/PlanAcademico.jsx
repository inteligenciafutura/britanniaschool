import React, { useState, useEffect } from "react";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function PlanAcademico() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Cambia 768 por la resolución deseada
    };

    // Agrega un event listener para detectar cambios en el tamaño de la pantalla
    window.addEventListener("resize", handleResize);
    handleResize(); // Llama a la función para verificar el tamaño inicial

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <div>
      <Header></Header>
      <Menu></Menu>

    <img src="https://britanniaschool.com.co/imagenes/PLAN-ACADEMICO.png" className="imagenConvenio" />
    <br></br><br></br>
          <a href='#' className='volver'>Volver</a>
          <br></br><br></br>
          <br></br>
          <a href='#' className='volver'>Volver</a>
          <br></br><br></br>
          
      <Footer></Footer>
    </div>
  );
}