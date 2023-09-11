import React, { useState, useEffect } from "react";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function SecundarySchool() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Cambia 768 por la resolución deseada
    };

    // Agrega un event listener para detectar cambios en el tamaño de la pantalla
    window.addEventListener("resize", handleResize);
    handleResize(); // Llama a la función para verificar el tamaño inicial

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <Header></Header>
      <Menu></Menu>

      {isMobile ? (
        <div>
          <div className="colPrimary">
            <h2 className="blue-textNosotros">Educación secundaria</h2>
            <p className="text-justifyNosotros">
            Los estudiantes participan en seminarios de carreras y de experiencia laboral.<br></br>

La diferencia de Britannia School se basa en la evidencia que todos los estudiantes tienen diferentes habilidades, preferencias de aprendizaje e intereses individuales.<br></br>

Nuestra principal creencia es que todos los estudiantes dentro de un salón de clases pueden aprender de manera efectiva cuando están motivados e interesados.<br></br>

Interpretamos y planificamos un plan de estudios de tal manera que facilite las fortalezas de los estudiantes.<br></br>

Al hacerlo, se motiva a nuestros maestros a desarrollar unas guías de trabajo e instrucción, variedades de materiales didácticos y medidas de evaluación.<br></br>

Lo que asegura que nuestro entorno de enseñanza sea inclusivo y prepara a todos los estudiantes para la excelencia académica y que alcancen su máximo potencial.<br></br>
            </p>
          </div>
          <Carousel
            showThumbs={true}
            autoPlay={true}
            infiniteLoop={true}
            dynamicHeight={true}
          >
            <div>
              <img src="https://britanniaschool.com.co/imagenes/SecundarySchool1.png" />
            </div>
            <div>
              <img src="https://britanniaschool.com.co/imagenes/SecundarySchool2.png" />
            </div>
            <div>
              <img src="https://britanniaschool.com.co/imagenes/SecundarySchool3.png" />
            </div>
            <div>
              <img src="https://britanniaschool.com.co/imagenes/SecundarySchool5.png" />
            </div>
            <div>
              <img src="https://britanniaschool.com.co/imagenes/SecundarySchool6.png" />
            </div>
            <div>
              <img src="https://britanniaschool.com.co/imagenes/SecundarySchoolNew1.png" />
            </div>
            <div>
              <img src="https://britanniaschool.com.co/imagenes/SecundarySchoolNew2.png" />
            </div>
            <div>
              <img src="https://britanniaschool.com.co/imagenes/SecundarySchoolNew3.png" />
            </div>
            <div>
              <img src="https://britanniaschool.com.co/imagenes/SecundarySchoolNew4.png" />
            </div>
            <div>
              <img src="https://britanniaschool.com.co/imagenes/SecundarySchoolNew5.png" />
            </div>
            <div>
              <img src="https://britanniaschool.com.co/imagenes/SecundarySchoolNew6.png" />
            </div>
          </Carousel>
          <center>
          <iframe width="315" height="315" src="https://www.youtube.com/embed/K4tUdImFEXU?si=ATAiRqXEaFr4IS5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </center>
          <br></br>
          <a href='#' className='volver'>Volver</a>
          <br></br><br></br>
        </div>
      ) : (
        <div>
          <div class="contenedorPrimarySchool">
            <div class="columnaPrimarySchool izquierdaPrimarySchool">
              <div className="colNosotros">
                <h2 className="blue-textNosotros">Educación secundaria</h2>
                <p className="text-justifyNosotros">
                Los estudiantes participan en seminarios de carreras y de experiencia laboral.<br></br>

La diferencia de Britannia School se basa en la evidencia que todos los estudiantes tienen diferentes habilidades, preferencias de aprendizaje e intereses individuales.<br></br>

Nuestra principal creencia es que todos los estudiantes dentro de un salón de clases pueden aprender de manera efectiva cuando están motivados e interesados.<br></br>

Interpretamos y planificamos un plan de estudios de tal manera que facilite las fortalezas de los estudiantes.<br></br>

Al hacerlo, se motiva a nuestros maestros a desarrollar unas guías de trabajo e instrucción, variedades de materiales didácticos y medidas de evaluación.<br></br>

Lo que asegura que nuestro entorno de enseñanza sea inclusivo y prepara a todos los estudiantes para la excelencia académica y que alcancen su máximo potencial.<br></br>
                </p>
              </div>
            </div>
            <div class="columnaPrimarySchool derechaPrimarySchool">
              <center>
              <Carousel
    showThumbs={true}
    autoPlay={true}
    infiniteLoop={true}
    dynamicHeight={true}
  >
    <div>
      <img src="https://britanniaschool.com.co/imagenes/SecundarySchool1.png" />
    </div>
    <div>
      <img src="https://britanniaschool.com.co/imagenes/SecundarySchool2.png" />
    </div>
    <div>
      <img src="https://britanniaschool.com.co/imagenes/SecundarySchool3.png" />
    </div>
    <div>
      <img src="https://britanniaschool.com.co/imagenes/SecundarySchool4.png" />
    </div>
    <div>
      <img src="https://britanniaschool.com.co/imagenes/SecundarySchool5.png" />
    </div>
    <div>
      <img src="https://britanniaschool.com.co/imagenes/SecundarySchool6.png" />
    </div>
    <div>
              <img src="https://britanniaschool.com.co/imagenes/SecundarySchoolNew1.png" />
            </div>
            <div>
              <img src="https://britanniaschool.com.co/imagenes/SecundarySchoolNew2.png" />
            </div>
            <div>
              <img src="https://britanniaschool.com.co/imagenes/SecundarySchoolNew3.png" />
            </div>
            <div>
              <img src="https://britanniaschool.com.co/imagenes/SecundarySchoolNew4.png" />
            </div>
            <div>
              <img src="https://britanniaschool.com.co/imagenes/SecundarySchoolNew5.png" />
            </div>
            <div>
              <img src="https://britanniaschool.com.co/imagenes/SecundarySchoolNew6.png" />
            </div>
  </Carousel>
              </center>
            </div>
          </div>

          <center>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/K4tUdImFEXU?si=ATAiRqXEaFr4IS5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </center>

          <br></br>

          <br></br>
          <a href='#' className='volver'>Volver</a>
          <br></br><br></br>

          <br></br>
        </div>
      )}

      <Footer></Footer>
    </div>
  );
}
