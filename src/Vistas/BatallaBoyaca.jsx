import React from "react";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function BatallaBoyaca() {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>
       
      <center>
       <h1>Batalla de Boyaca</h1>
       
       <iframe width="560" height="315" src="https://www.youtube.com/embed/lfwT72op7Go?si=jxe2J2qp1YW1nzXT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     

      </center>

      <br></br>

      

      <br></br>

      <Footer></Footer>
    </div>
  );
}