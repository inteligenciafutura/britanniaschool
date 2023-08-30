import React from "react";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function FeriaVirtualUniversidades() {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>
       
      <center>
       <h1>Feria virtual de universidades 2021 en aras de fortalecer la orientación vocacional en los grados decimo y once.</h1>
       <Carousel
        showThumbs={true}
        autoPlay={true}
        infiniteLoop={true}
        dynamicHeight={true}
      >
        <div>
        <img src="https://britanniaschool.com.co/wp-content/uploads/2021/09/Feria-virtual-11-agosto-20-1.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/09/Feria-virtual-11-agosto-20-2.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/09/Feria-virtual-11-agosto-20-3.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/09/Feria-virtual-11-agosto-20-5.jpg" />
        </div>
      </Carousel>
     

      </center>

      <br></br>

      

      <br></br>

      <Footer></Footer>
    </div>
  );
}