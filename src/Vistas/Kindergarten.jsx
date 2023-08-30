import React from "react";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Kindergarten() {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/uIGbulVstqk?si=MvhW_9eDs7FaAvnj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>
<br></br>
      <Footer></Footer>
    </div>
  );
}