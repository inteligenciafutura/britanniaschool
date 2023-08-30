import React from "react";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function ModalidadPresencial2021() {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>
       
      <center>
       <h1>Clases en modalidad presencial 2021 -Regreso a las aulas</h1>
       <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        dynamicHeight={true}
      >
        <div>
        <img src="https://britanniaschool.com.co/wp-content/uploads/2021/09/Clases-en-el-aula-..presencialidad-1.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/09/Clases-en-el-aula-..presencialidad-2.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/09/Clases-en-el-aula-..presencialidad-4.jpg" />
        </div>
      </Carousel>
     

      </center>

      <br></br>

      

      <br></br>

      <Footer></Footer>
    </div>
  );
}