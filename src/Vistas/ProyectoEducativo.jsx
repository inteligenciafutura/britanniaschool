import React from 'react'
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function ProyectoEducativo() {
  return (
    <div>
    <Header></Header>
    <Menu></Menu>
    <img src='https://britanniaschool.com.co/wp-content/uploads/2021/08/Imagenes-banner_Mesa-de-trabajo-1-copia-5.png' className='imagenNosotros' />

    <img src='https://britanniaschool.com.co/imagenes/bannerAzul.png' className='imagenNosotros' />

    <div className="videoeducativo">
      <iframe width="420" height="300" src="https://www.youtube.com/embed/D3j_5s52z50?si=hXrSGzbcwMMAhx1o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div> 

    <div className="rowNosotros">
      <div className="colNosotros">

      </div>
      {/* <div className="colNosotros">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/D3j_5s52z50?si=hXrSGzbcwMMAhx1o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div> */}
    </div>

    <div class="containerNosotros">

    

    <div className="rowNosotros">
      {/* <div className="colNosotros">
      <Carousel
        showThumbs={true}
        autoPlay={true}
        infiniteLoop={true}
        dynamicHeight={true}
      >
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/08/90053932_2530468213931182_6372729829350965248_n-1.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/08/90114645_2530468163931187_4782156371372015616_n-1.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/08/WhatsApp-Image-2021-07-23-at-9.06.27-AM-1-1.jpeg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/08/WhatsApp-Image-2021-07-23-at-9.06.27-AM-2.jpeg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/08/WhatsApp-Image-2021-07-23-at-9.13.58-AM-2.jpeg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/08/WhatsApp-Image-2021-07-23-at-9.13.59-AM-1-1.jpeg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/08/WhatsApp-Image-2021-07-23-at-9.13.59-AM-4.jpeg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/08/WhatsApp-Image-2021-07-23-at-9.13.59-AM-2-1.jpeg" />
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
        <h2 className="blue-textNosotros">Educación básica primaria</h2>
        <p className="text-justifyNosotros">La diferencia de Britannia School se basa en la evidencia que todos los estudiantes tienen diferentes habilidades, preferencias de aprendizaje e intereses individuales.

Nuestra principal creencia es que todos los estudiantes dentro de un salón de clases pueden aprender de manera efectiva cuando están motivados e interesados.

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
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/08/3-2.jpeg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/08/1-3.jpeg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/08/2-2.jpeg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/08/3-2.jpeg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/08/4-2.jpeg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/08/5-2.jpeg" />
        </div>
      </Carousel>
      </div>
    </div> */}

    {/* <div className="rowNosotros">
      <div className="colNosotros">
      <Carousel
        showThumbs={true}
        autoPlay={true}
        infiniteLoop={true}
        dynamicHeight={true}
      >
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/08/1-4.jpeg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/08/2-3.jpeg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/08/3-3.jpeg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/08/5-3.jpeg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/08/6-1.jpeg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/08/8-1.jpeg" />
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

    <Footer></Footer>

    </div>
  )
}
