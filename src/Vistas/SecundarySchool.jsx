import React from "react";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function SecundarySchool() {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>

      <div class="containerNosotros">
        
      <div className="rowNosotros">
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
    <div>
          <img src="https://britanniaschool.com.co/imagenes/SecundarySchool1.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/SecundarySchool2.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/SecundarySchool3.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/SecundarySchool4.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/SecundarySchool5.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/imagenes/SecundarySchool6.jpg" />
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

      </div>
       
      <center>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/K4tUdImFEXU?si=X6l4mDlODOQi_3Cv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </center>

      <br></br>
      
      <br></br>

      <br></br>

      <Footer></Footer>
    </div>
  );
}
