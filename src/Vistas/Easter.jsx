import React from "react";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Easter() {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>
       
      <center>
       <h1>Easter</h1>
       <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        dynamicHeight={true}
      >
        <div>
        <img src="https://britanniaschool.com.co/imagenes/Easter1.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/Easter2.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/Easter3.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/Easter4.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/Easter5.jpg" />
        </div>
      </Carousel>
     

      </center>

      <br></br>

      

      <br></br>

      <Footer></Footer>
    </div>
  );
}