import React from "react";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Visitanos() {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>

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
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/09/cambridge.png" className="imagenvisitanos" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/09/DSC06476.jpg" className="imagenvisitanos" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/09/DSC06484.jpg" className="imagenvisitanos" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/09/DSC06486.jpg" className="imagenvisitanos" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/09/DSC06487.jpg" className="imagenvisitanos" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/09/DSC06490.jpg" className="imagenvisitanos" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/09/DSC06490.jpg" className="imagenvisitanos" />
        </div>
      </Carousel>
</div>

      <br></br>

      <Footer></Footer>
    </div>
  );
}
