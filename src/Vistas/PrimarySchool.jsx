import React from "react";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function PrimarySchool() {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>

      <div class="containerNosotros">

      <div className="rowNosotros">
      <div className="colNosotros">
        <h2 className="blue-textNosotros">Educación básica primaria</h2>
        <p className="text-justifyNosotros">La diferencia de Britannia School se basa en la evidencia que todos los estudiantes tienen diferentes habilidades, preferencias de aprendizaje e intereses individuales.<br></br><br></br>

Nuestra principal creencia es que todos los estudiantes dentro de un salón de clases pueden aprender de manera efectiva cuando están motivados e interesados.<br></br><br></br>

Interpretamos y planificamos un plan de estudios de tal manera que facilite las fortalezas de los estudiantes. Al hacerlo, se motiva a nuestros maestros a desarrollar unas guías de trabajo e instrucción, variedades de materiales didácticos y medidas de evaluación. Lo que asegura que nuestro entorno de enseñanza sea inclusivo y prepara a todos los estudiantes para la excelencia académica y que alcancen su máximo potencial.</p>
      </div>
      <div className="colNosotros">
      <Carousel
        showThumbs={true}
        autoPlay={true}
        infiniteLoop={true}
        dynamicHeight={true}
      >
        <div>
          <img src="https://britanniaschool.com.co/imagenes/2021/08/3-2.jpeg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/2021/08/1-3.jpeg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/2021/08/2-2.jpeg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/2021/08/3-2.jpeg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/2021/08/4-2.jpeg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/2021/08/5-2.jpeg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primariax1.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primariax2.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primariax3.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primariax4.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primariax5.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primariax6.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primariax7.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primariax8.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primariax9.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primariax10.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primariax11.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primariax12.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primariax13.jpg" />
        </div>
      </Carousel>
      </div>
    </div>
     
     <center>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/0ZbdO-iW294?si=16vX4ezD8GnUdcyP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </center>

    <div className="rowNosotros">
      {/* <div className="colNosotros">
      <Carousel
        showThumbs={true}
        autoPlay={true}
        infiniteLoop={true}
        dynamicHeight={true}
      >
        <div>
          <img src="https://britanniaschool.com.co/imagenes/2021/08/90053932_2530468213931182_6372729829350965248_n-1.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/2021/08/90114645_2530468163931187_4782156371372015616_n-1.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/2021/08/WhatsApp-Image-2021-07-23-at-9.06.27-AM-1-1.jpeg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/2021/08/WhatsApp-Image-2021-07-23-at-9.06.27-AM-2.jpeg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/2021/08/WhatsApp-Image-2021-07-23-at-9.13.58-AM-2.jpeg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/2021/08/WhatsApp-Image-2021-07-23-at-9.13.59-AM-1-1.jpeg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/2021/08/WhatsApp-Image-2021-07-23-at-9.13.59-AM-4.jpeg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/2021/08/WhatsApp-Image-2021-07-23-at-9.13.59-AM-2-1.jpeg" />
        </div>
      </Carousel>
      </div> */}
      {/* <div className="colNosotros">
        <h2 className="blue-textNosotros">Preescolar</h2>
        <p className="text-justifyNosotros">Britannia School adopta un enfoque de aprendizaje temprano en el que el niño y la niña se coloca en el centro de su aprendizaje en un entorno seguro y acogedor.

Se invita a los niños pequeños de tres a seis años a explorar su entorno y expresarse a través de muchos “lenguajes” o diferentes formas de expresión, que incluyen palabras, movimiento, dibujo, pintura, escultura, juego de sombras, collage y música.

Se acompaña a los niños a participar en su curiosidad innata y cada variación en la investigación se considera valiosa. Nuestro idioma predomínate de la enseñanza es el inglés.

Buscamos formar niños felices, seguros de sí mismos, con respeto por la naturaleza y con un aprendizaje éxitos.</p>
      </div> */}
    </div>

    {/* <div className="rowNosotros">
      <div className="colNosotros">
      <Carousel
        showThumbs={true}
        autoPlay={true}
        infiniteLoop={true}
        dynamicHeight={true}
      >
        <div>
          <img src="https://britanniaschool.com.co/imagenes/2021/08/1-4.jpeg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/2021/08/2-3.jpeg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/2021/08/3-3.jpeg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/2021/08/5-3.jpeg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/2021/08/6-1.jpeg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/2021/08/8-1.jpeg" />
        </div>
      </Carousel>
      </div>
      <div className="colNosotros">
        <h2 className="blue-textNosotros">Educación secundaria</h2>
        <p className="text-justifyNosotros">Los estudiantes participan en seminarios de carreras y de experiencia laboral.

La diferencia de Britannia School se basa en la evidencia que todos los estudiantes tienen diferentes habilidades, preferencias de aprendizaje e intereses individuales.

Nuestra principal creencia es que todos los estudiantes dentro de un salón de clases pueden aprender de manera efectiva cuando están motivados e interesados.

Interpretamos y planificamos un plan de estudios de tal manera que facilite las fortalezas de los estudiantes.

Al hacerlo, se motiva a nuestros maestros a desarrollar unas guías de trabajo e instrucción, variedades de materiales didácticos y medidas de evaluación.

Lo que asegura que nuestro entorno de enseñanza sea inclusivo y prepara a todos los estudiantes para la excelencia académica y que alcancen su máximo potencial.</p>
      </div>
    </div> */}

    </div>
       
      {/* <center>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/0ZbdO-iW294?si=7DKHHm2ow7VNWN4c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </center>

      <br></br>
      <Carousel
        showThumbs={true}
        autoPlay={true}
        infiniteLoop={true}
        dynamicHeight={true}
      >
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primaria1.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primaria2.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primaria3.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primaria4.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primaria5.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primaria6.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primaria7.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primaria8.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primaria9.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primaria10.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primaria11.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primaria12.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/primaria13.jpg" />
        </div>
      </Carousel> */}

      <br></br>

      

      <br></br>

      <Footer></Footer>
    </div>
  );
}
