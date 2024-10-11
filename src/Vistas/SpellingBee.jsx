import React from "react";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function SpellingBee() {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>
       
      <center>
       <h1>Saint Patrick's Day</h1>
       <p>
<br></br>
Además de esto, se llevó a cabo una integración entre nuestros estudiantes, la comunidad educativa y padres de familia.</p>
      <img src="https://britanniaschool.co.com/imagenes/SpellingBee1.jpg" />
      <img src="https://britanniaschool.co.com/imagenes/SpellingBee2.jpg" />
      <img src="https://britanniaschool.co.com/imagenes/SpellingBee3.jpg" />
      <img src="https://britanniaschool.co.com/imagenes/SpellingBee4.jpg" />
      </center>

      <br></br>
      
    

      <br></br>

      

      <br></br>

      <Footer></Footer>
    </div>
  );
}
