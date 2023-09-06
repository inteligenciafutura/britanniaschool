import React from "react";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function ProyectoEducativo() {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>

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

      <Footer></Footer>
    </div>
  );
}
