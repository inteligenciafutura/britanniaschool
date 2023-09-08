import React, { useState, useEffect } from "react";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Visitanos() {
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

      {isMobile ? <div>
       <center>
       <iframe
            width="315"
            height="315"
            src="https://www.youtube.com/embed/M60htEGVyD0?si=FQ0fr0yxA37d5Yyg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
       </center>
       <Carousel
          showThumbs={true}
          autoPlay={true}
          infiniteLoop={true}
          dynamicHeight={true}
        >
          <div>
            <img
              src="https://britanniaschool.com.co/imagenes/2021/09/cambridge.png"
              className="imagenvisitanos"
            />
          </div>
          <div>
            <img
              src="https://britanniaschool.com.co/imagenes/2021/09/DSC06476.jpg"
              className="imagenvisitanos"
            />
          </div>
          <div>
            <img
              src="https://britanniaschool.com.co/imagenes/2021/09/DSC06484.jpg"
              className="imagenvisitanos"
            />
          </div>
          <div>
            <img
              src="https://britanniaschool.com.co/imagenes/2021/09/DSC06486.jpg"
              className="imagenvisitanos"
            />
          </div>
          <div>
            <img
              src="https://britanniaschool.com.co/imagenes/2021/09/DSC06487.jpg"
              className="imagenvisitanos"
            />
          </div>
          <div>
            <img
              src="https://britanniaschool.com.co/imagenes/2021/09/DSC06490.jpg"
              className="imagenvisitanos"
            />
          </div>
          <div>
            <img
              src="https://britanniaschool.com.co/imagenes/2021/09/DSC06490.jpg"
              className="imagenvisitanos"
            />
          </div>
        </Carousel>
      </div> : <div>
      <div className="centeredContainer">
        <div className="containerVisitanos">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/M60htEGVyD0?si=FQ0fr0yxA37d5Yyg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="galeriaVisitanos">
        <Carousel
          showThumbs={true}
          autoPlay={true}
          infiniteLoop={true}
          dynamicHeight={true}
        >
          <div>
            <img
              src="https://britanniaschool.com.co/imagenes/2021/09/cambridge.png"
              className="imagenvisitanos"
            />
          </div>
          <div>
            <img
              src="https://britanniaschool.com.co/imagenes/2021/09/DSC06476.jpg"
              className="imagenvisitanos"
            />
          </div>
          <div>
            <img
              src="https://britanniaschool.com.co/imagenes/2021/09/DSC06484.jpg"
              className="imagenvisitanos"
            />
          </div>
          <div>
            <img
              src="https://britanniaschool.com.co/imagenes/2021/09/DSC06486.jpg"
              className="imagenvisitanos"
            />
          </div>
          <div>
            <img
              src="https://britanniaschool.com.co/imagenes/2021/09/DSC06487.jpg"
              className="imagenvisitanos"
            />
          </div>
          <div>
            <img
              src="https://britanniaschool.com.co/imagenes/2021/09/DSC06490.jpg"
              className="imagenvisitanos"
            />
          </div>
          <div>
            <img
              src="https://britanniaschool.com.co/imagenes/2021/09/DSC06490.jpg"
              className="imagenvisitanos"
            />
          </div>
        </Carousel>
      </div>

      <br></br>
        </div>}

      

      <Footer></Footer>
    </div>
  );
}
