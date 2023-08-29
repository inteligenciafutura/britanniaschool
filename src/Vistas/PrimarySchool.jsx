import React from "react";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function PrimarySchool() {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>
       
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        dynamicHeight={true}
      >
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primaria1.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primaria2.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primaria3.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primaria4.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primaria5.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primaria6.jpg" />
        </div>
      </Carousel>

      <Footer></Footer>
    </div>
  );
}
