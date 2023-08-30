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
       
      <center>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/0ZbdO-iW294?si=7DKHHm2ow7VNWN4c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </center>

      <br></br>
      <Carousel
        showThumbs={true}
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
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primaria7.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primaria8.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primaria9.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primaria10.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primaria11.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primaria12.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primaria13.jpg" />
        </div>
      </Carousel>

      <br></br>

      

      <br></br>

      <Footer></Footer>
    </div>
  );
}
