import React from "react";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function IzadaBandera() {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>
       
      <center>
       <h1>Izada de Bandera  Batalla de Cúcuta año 2022</h1>
       <p>209 años de la batalla de Cúcuta se celebran hoy dentro del recorrido de libertad que hizo Simón Bolívar en su gesta libertadora y que también tocó esta tierra.
<br></br>
Además de esto, se llevó a cabo una integración entre nuestros estudiantes, la comunidad educativa y padres de familia.</p>
      <img src="https://britanniaschool.com.co/wp-content/uploads/2022/02/da061165-72a8-4cdf-9b84-bfc9e0e2ea6c-1536x728.jpg" />
      <img src="https://britanniaschool.com.co/wp-content/uploads/2022/02/509a5a96-f076-4ee5-9c45-bbc2fd26d75f-1-1-1536x1152.jpg" />
      
      <iframe width="560" height="315" src="https://www.youtube.com/embed/IMLJbya1pDo?si=p-_9IFCGTxeZyNYA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/hGuxz0awO-4?si=x3tO6u2oXzB_i_CL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      <img src="https://britanniaschool.com.co/wp-content/uploads/2022/02/82166915-53b1-4e5a-b7fb-db49452ee39a-1152x1536.jpg" />

      <img src="https://britanniaschool.com.co/wp-content/uploads/2022/02/46899cda-72d5-4191-a49d-4de13dfe0f5f-1152x1536.jpg" />

      <img src="https://britanniaschool.com.co/wp-content/uploads/2022/02/53e02eef-3bca-4950-8cd5-f1dbff8cadaa-1536x1152.jpg" />

      </center>

      <br></br>
      
    

      <br></br>

      

      <br></br>

      <Footer></Footer>
    </div>
  );
}
