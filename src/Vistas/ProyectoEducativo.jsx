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

      <div class="containerNosotros">
        <div className="rowNosotros">
          <div className="colNosotros">
            <img
              src="https://britanniaschool.com.co/imagenes/bannerAzul1.png"
              className="imagenidioma"
            />
          </div>
        </div>

          <div className="colNosotros">
            <div className="videoeducativo">
            <iframe
              width={540}
              height={350}
              src="https://www.youtube.com/embed/D3j_5s52z50?si=hXrSGzbcwMMAhx1o"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            </div>
          </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
