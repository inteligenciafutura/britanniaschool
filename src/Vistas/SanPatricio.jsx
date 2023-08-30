import React from "react";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function SanPatricio() {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>
       
      <center>
       <h1>Saint Patrick's Day</h1>
       <p>
<br></br>
Además de esto, se llevó a cabo una integración entre nuestros estudiantes, la comunidad educativa y padres de familia.</p>
      <img src="https://britanniaschool.com.co/imagenes/SanPatricio1.jpg" />
      <img src="https://britanniaschool.com.co/imagenes/SanPatricio2.jpg" />
      <img src="https://britanniaschool.com.co/imagenes/SanPatricio3.jpg" />
      <img src="https://britanniaschool.com.co/imagenes/SanPatricio4.jpg" />
      <img src="https://britanniaschool.com.co/imagenes/SanPatricio5.jpg" />
      </center>

      <br></br>
      
    

      <br></br>

      

      <br></br>

      <Footer></Footer>
    </div>
  );
}
