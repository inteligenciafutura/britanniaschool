import React, { useState, useEffect } from 'react';
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function ProyectoEducativo() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Cambia 768 por la resolución deseada
    };

    // Agrega un event listener para detectar cambios en el tamaño de la pantalla
    window.addEventListener('resize', handleResize);
    handleResize(); // Llama a la función para verificar el tamaño inicial

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Header></Header>
      <Menu></Menu>

      {isMobile ? (
         <div>
         <div>
           <div>
             <div className="imagen-container">
               <img
                 src="https://britanniaschool.com.co/imagenes/bannerAzul1.png"
                 className="imagenidioma"
                 alt="Imagen Educativa"
               />
               <div>
                 <iframe
                   width={440}
                   height={250}
                   src="https://www.youtube.com/embed/D3j_5s52z50?si=hXrSGzbcwMMAhx1o"
                   title="YouTube video player"
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                   allowFullScreen
                 ></iframe>
               </div>
             </div>
           </div>
         </div>
         <br></br>
          <a href='#' className='volver'>Volver</a>
          <br></br><br></br>
       </div>
      ) : (
        <div>
        <div>
          <div>
            <div className="imagen-container">
              <img
                src="https://britanniaschool.com.co/imagenes/bannerAzul1.png"
                className="imagenidioma"
                alt="Imagen Educativa"
              />
              <div className="videoeducativo">
                <iframe
                  width={440}
                  height={250}
                  src="https://www.youtube.com/embed/D3j_5s52z50?si=hXrSGzbcwMMAhx1o"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}

      <Footer></Footer>
    </div>
  );
}
