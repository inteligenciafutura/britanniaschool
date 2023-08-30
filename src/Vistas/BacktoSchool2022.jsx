import React from "react";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function BacktoSchool2022() {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>
       
      <center>
       <h1>Back to School 2022</h1>
      <img src="https://britanniaschool.com.co/wp-content/uploads/2022/06/fd4058aa-99aa-4e4f-afdc-235d7086904d.jpg" />
      <img src="https://britanniaschool.com.co/wp-content/uploads/2022/06/6363b50a-f08f-49e2-8cf9-ea6ba652ace5.jpg" />
      <img src="https://britanniaschool.com.co/wp-content/uploads/2022/06/59c2e395-038c-4137-8019-04feb1be1219-1.jpg" />
      <img src="https://britanniaschool.com.co/wp-content/uploads/2022/06/355f7072-9d5b-46a5-a2cb-bb8a8d80cfa6-225x300.jpg" />
     

      </center>

      <br></br>

      

      <br></br>

      <Footer></Footer>
    </div>
  );
}