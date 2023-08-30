import React from "react";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function SecundarySchool() {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>
       
      <center>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/K4tUdImFEXU?si=X6l4mDlODOQi_3Cv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </center>

      <br></br>
      
      <br></br>
      <Carousel
        showThumbs={true}
        autoPlay={true}
        infiniteLoop={true}
        dynamicHeight={true}
      >
        <div>
          <img src="https://britanniaschool.com.co/imagenes/SecundarySchool1.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/SecundarySchool2.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/SecundarySchool3.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/SecundarySchool4.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/SecundarySchool5.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/SecundarySchool6.jpg" />
        </div>
      </Carousel>

      <br></br>

      <Footer></Footer>
    </div>
  );
}
