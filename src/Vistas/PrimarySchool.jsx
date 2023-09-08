import React, { useState, useEffect } from "react";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function PrimarySchool() {
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
            <h2 className="blue-textNosotros">Educación básica primaria</h2>
            <p className="text-justifyNosotros">
              La diferencia de Britannia School se basa en la evidencia que
              todos los estudiantes tienen diferentes habilidades, preferencias
              de aprendizaje e intereses individuales.<br></br>
              <br></br>
              Nuestra principal creencia es que todos los estudiantes dentro de
              un salón de clases pueden aprender de manera efectiva cuando están
              motivados e interesados.<br></br>
              <br></br>
              Interpretamos y planificamos un plan de estudios de tal manera que
              facilite las fortalezas de los estudiantes. Al hacerlo, se motiva
              a nuestros maestros a desarrollar unas guías de trabajo e
              instrucción, variedades de materiales didácticos y medidas de
              evaluación. Lo que asegura que nuestro entorno de enseñanza sea
              inclusivo y prepara a todos los estudiantes para la excelencia
              académica y que alcancen su máximo potencial.
            </p>
          </div>
          <Carousel 
          showThumbs={true} 
          autoPlay={true} 
          infiniteLoop={true}
          >
            <div>
              <img
                src="https://britanniaschool.com.co/imagenes/primariaNew1.png"
              />
            </div>
            <div>
              <img
                src="https://britanniaschool.com.co/imagenes/primariaNew2.png"
              />
            </div>
            <div>
              <img
                src="https://britanniaschool.com.co/imagenes/primariaNew3.png"
              />
            </div>
            <div>
              <img
                src="https://britanniaschool.com.co/imagenes/primariaNew4.png"
              />
            </div>
            <div>
              <img
                src="https://britanniaschool.com.co/imagenes/primariaNew5.png"
              />
            </div>
            <div>
              <img
                src="https://britanniaschool.com.co/imagenes/primariaNew6.png"
              />
            </div>
            <div>
              <img
                src="https://britanniaschool.com.co/imagenes/primariaNew7.png"
              />
            </div>
            <div>
              <img
                src="https://britanniaschool.com.co/imagenes/primariaNew8.png"
              />
            </div>
            <div>
              <img
                src="https://britanniaschool.com.co/imagenes/primariaNew9.png"
              />
            </div>
            <div>
              <img
                src="https://britanniaschool.com.co/imagenes/primariaNew10.png"
              />
            </div>
            <div>
              <img
                src="https://britanniaschool.com.co/imagenes/primariaNew11.png"
              />
            </div>
            <div>
              <img
                src="https://britanniaschool.com.co/imagenes/primariaNew12.png"
              />
            </div>
            <div>
              <img
                src="https://britanniaschool.com.co/imagenes/primariaNew13.png"
              />
            </div>
            <div>
              <img
                src="https://britanniaschool.com.co/imagenes/primariaNew14.png"
              />
            </div>
            <div>
              <img
                src="https://britanniaschool.com.co/imagenes/primariaNew15.png"
              />
            </div>
            <div>
              <img
                src="https://britanniaschool.com.co/imagenes/primariaNew16.png"
              />
            </div>
            <div>
              <img
                src="https://britanniaschool.com.co/imagenes/primariaNew17.png"
              />
            </div>
            <div>
              <img
                src="https://britanniaschool.com.co/imagenes/primariaNew18.png"
              />
            </div>
            <div>
              <img
                src="https://britanniaschool.com.co/imagenes/primariaNew19.png"
              />
            </div>
            <div>
              <img
                src="https://britanniaschool.com.co/imagenes/primariaNew20.png"
              />
            </div>
          </Carousel>
          <center>
            <iframe
              width="315"
              height="315"
              src="https://www.youtube.com/embed/0ZbdO-iW294?si=16vX4ezD8GnUdcyP"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </center>
        </div>
      ) : (
        <div>
          <div class="contenedorPrimarySchool">
            <div class="columnaPrimarySchool izquierdaPrimarySchool">
              <div className="colNosotros">
                <h2 className="blue-textNosotros">Educación básica primaria</h2>
                <p className="text-justifyNosotros">
                  La diferencia de Britannia School se basa en la evidencia que
                  todos los estudiantes tienen diferentes habilidades,
                  preferencias de aprendizaje e intereses individuales.<br></br>
                  <br></br>
                  Nuestra principal creencia es que todos los estudiantes dentro
                  de un salón de clases pueden aprender de manera efectiva
                  cuando están motivados e interesados.<br></br>
                  <br></br>
                  Interpretamos y planificamos un plan de estudios de tal manera
                  que facilite las fortalezas de los estudiantes. Al hacerlo, se
                  motiva a nuestros maestros a desarrollar unas guías de trabajo
                  e instrucción, variedades de materiales didácticos y medidas
                  de evaluación. Lo que asegura que nuestro entorno de enseñanza
                  sea inclusivo y prepara a todos los estudiantes para la
                  excelencia académica y que alcancen su máximo potencial.
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
                  <img
                    src="https://britanniaschool.com.co/imagenes/primariaNew1.png"
                    className="primaryImagen"
                  />
                </div>
                <div>
                  <img
                    src="https://britanniaschool.com.co/imagenes/primariaNew2.png"
                    className="primaryImagen"
                  />
                </div>
                <div>
                  <img
                    src="https://britanniaschool.com.co/imagenes/primariaNew3.png"
                    className="primaryImagen"
                  />
                </div>
                <div>
                  <img
                    src="https://britanniaschool.com.co/imagenes/primariaNew4.png"
                    className="primaryImagen"
                  />
                </div>
                <div>
                  <img
                    src="https://britanniaschool.com.co/imagenes/primariaNew5.png"
                    className="primaryImagen"
                  />
                </div>
                <div>
                  <img
                    src="https://britanniaschool.com.co/imagenes/primariaNew6.png"
                    className="primaryImagen"
                  />
                </div>
                <div>
                  <img
                    src="https://britanniaschool.com.co/imagenes/primariaNew7.png"
                    className="primaryImagen"
                  />
                </div>
                <div>
                  <img
                    src="https://britanniaschool.com.co/imagenes/primariaNew8.png"
                    className="primaryImagen"
                  />
                </div>
                <div>
                  <img
                    src="https://britanniaschool.com.co/imagenes/primariaNew9.png"
                    className="primaryImagen"
                  />
                </div>
                <div>
                  <img
                    src="https://britanniaschool.com.co/imagenes/primariaNew10.png"
                    className="primaryImagen"
                  />
                </div>
                <div>
                  <img
                    src="https://britanniaschool.com.co/imagenes/primariaNew11.png"
                    className="primaryImagen"
                  />
                </div>
                <div>
                  <img
                    src="https://britanniaschool.com.co/imagenes/primariaNew12.png"
                    className="primaryImagen"
                  />
                </div>
                <div>
                  <img
                    src="https://britanniaschool.com.co/imagenes/primariaNew13.png"
                    className="primaryImagen"
                  />
                </div>
                <div>
                  <img
                    src="https://britanniaschool.com.co/imagenes/primariaNew14.png"
                    className="primaryImagen"
                  />
                </div>
                <div>
                  <img
                    src="https://britanniaschool.com.co/imagenes/primariaNew15.png"
                    className="primaryImagen"
                  />
                </div>
                <div>
                  <img
                    src="https://britanniaschool.com.co/imagenes/primariaNew16.png"
                    className="primaryImagen"
                  />
                </div>
                <div>
                  <img
                    src="https://britanniaschool.com.co/imagenes/primariaNew17.png"
                    className="primaryImagen"
                  />
                </div>
                <div>
                  <img
                    src="https://britanniaschool.com.co/imagenes/primariaNew18.png"
                    className="primaryImagen"
                  />
                </div>
                <div>
                  <img
                    src="https://britanniaschool.com.co/imagenes/primariaNew19.png"
                    className="primaryImagen"
                  />
                </div>
                <div>
                  <img
                    src="https://britanniaschool.com.co/imagenes/primariaNew20.png"
                    className="primaryImagen"
                  />
                </div>
              </Carousel>
              </center>
            </div>
          </div>

          <center>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/0ZbdO-iW294?si=16vX4ezD8GnUdcyP"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </center>

          <br></br>

          <br></br>
        </div>
      )}

      <Footer></Footer>
    </div>
  );
}
