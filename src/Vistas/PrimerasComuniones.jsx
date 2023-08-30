import React from "react";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function PrimerasComuniones() {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>
       
      <center>
       <h1>Primeras Comuniones</h1>
       <p>Nuestros estudiantes del Britannia School recibieron el sacramento de la primera comunión.
<br></br>
Además de esto, se llevó a cabo una integración entre nuestros estudiantes, la comunidad educativa y padres de familia.</p>
      <img src="https://britanniaschool.com.co/wp-content/uploads/2022/06/1-1536x1152.jpg" />
      <img src="https://britanniaschool.com.co/wp-content/uploads/2022/06/3-1536x1024.jpg" />
      <img src="https://britanniaschool.com.co/wp-content/uploads/2022/06/5-768x1024.jpg" />
      <img src="https://britanniaschool.com.co/wp-content/uploads/2022/06/25-2-768x1024.jpg" />
      <img src="https://britanniaschool.com.co/wp-content/uploads/2022/06/14-3-768x1024.jpg" />
      <img src="https://britanniaschool.com.co/imagenes/comunion1.jpg" />
      <img src="https://britanniaschool.com.co/imagenes/comunion2.jpg" />
      <img src="https://britanniaschool.com.co/imagenes/comunion3.jpg" />
      <img src="https://britanniaschool.com.co/imagenes/comunion4.jpg" />
      </center>

      <br></br>
      
    

      <br></br>

      

      <br></br>

      <Footer></Footer>
    </div>
  );
}
