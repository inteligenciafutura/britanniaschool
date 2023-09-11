import React, { useState, useEffect } from "react";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Kindergarten() {
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
          <Carousel
                  showThumbs={true}
                  autoPlay={true}
                  infiniteLoop={true}
                  dynamicHeight={true}
                >
                  <div>
                    <img src="https://britanniaschool.com.co/imagenes/Primarysnew1.png" />
                  </div>
                  <div>
                    <img src="https://britanniaschool.com.co/imagenes/Primarysnew2.png" />
                  </div>
                  <div>
                    <img src="https://britanniaschool.com.co/imagenes/Primarysnew3.png" />
                  </div>
                  <div>
                    <img src="https://britanniaschool.com.co/imagenes/Primarysnew4.png" />
                  </div>
                  <div>
                    <img src="https://britanniaschool.com.co/imagenes/Primarysnew5.png" />
                  </div>
                  <div>
                    <img src="https://britanniaschool.com.co/imagenes/Primarysnew6.png" />
                  </div>
                  <div>
                    <img src="https://britanniaschool.com.co/imagenes/Primarysnew7.png" />
                  </div>
                  <div>
                    <img src="https://britanniaschool.com.co/imagenes/Primarysnew8.png" />
                  </div>
                </Carousel>
                <h2 className="blue-textNosotros">Preescolar</h2>
                <p className="text-justifyNosotros">
                  Britannia School adopta un enfoque de aprendizaje temprano en
                  el que el niño y la niña se coloca en el centro de su
                  aprendizaje en un entorno seguro y acogedor. Se invita a los
                  niños pequeños de tres a seis años a explorar su entorno y
                  expresarse a través de muchos “lenguajes” o diferentes formas
                  de expresión, que incluyen palabras, movimiento, dibujo,
                  pintura, escultura, juego de sombras, collage y música. Se
                  acompaña a los niños a participar en su curiosidad innata y
                  cada variación en la investigación se considera valiosa.
                  Nuestro idioma predomínate de la enseñanza es el inglés.
                  Buscamos formar niños felices, seguros de sí mismos, con
                  respeto por la naturaleza y con un aprendizaje éxitos.
                </p>
                <center>
            <iframe
              width="315"
              height="315"
              src="https://www.youtube.com/embed/uIGbulVstqk?si=MvhW_9eDs7FaAvnj"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
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
                <h2 className="blue-textNosotros">Preescolar</h2>
                <p className="text-justifyNosotros">
                  Britannia School adopta un enfoque de aprendizaje temprano en
                  el que el niño y la niña se coloca en el centro de su
                  aprendizaje en un entorno seguro y acogedor.<br></br>
                  Se invita a los niños pequeños de tres a seis años a explorar su entorno y
                  expresarse a través de muchos “lenguajes” o diferentes formas
                  de expresión, que incluyen palabras, movimiento, dibujo,
                  pintura, escultura, juego de sombras, collage y música. <br></br> 
                  Se acompaña a los niños a participar en su curiosidad innata y
                  cada variación en la investigación se considera valiosa.<br></br>
                  Nuestro idioma predomínate de la enseñanza es el inglés.<br></br>
                  Buscamos formar niños felices, seguros de sí mismos, con
                  respeto por la naturaleza y con un aprendizaje éxitos.<br></br>
                </p>
              </div>
            </div>
            <div class="columnaPrimarySchool derechaPrimarySchool">
            
              <Carousel
                  showThumbs={true}
                  autoPlay={true}
                  infiniteLoop={true}
                  dynamicHeight={true}
                >
                  <div>
                    <img src="https://britanniaschool.com.co/imagenes/Primarysnew1.png" />
                  </div>
                  <div>
                    <img src="https://britanniaschool.com.co/imagenes/Primarysnew2.png" />
                  </div>
                  <div>
                    <img src="https://britanniaschool.com.co/imagenes/Primarysnew3.png" />
                  </div>
                  <div>
                    <img src="https://britanniaschool.com.co/imagenes/Primarysnew4.png" />
                  </div>
                  <div>
                    <img src="https://britanniaschool.com.co/imagenes/Primarysnew5.png" />
                  </div>
                  <div>
                    <img src="https://britanniaschool.com.co/imagenes/Primarysnew6.png" />
                  </div>
                  <div>
                    <img src="https://britanniaschool.com.co/imagenes/Primarysnew7.png" />
                  </div>
                  <div>
                    <img src="https://britanniaschool.com.co/imagenes/Primarysnew8.png" />
                  </div>
                </Carousel>
              </div>
              
            </div>
          </div>
      )}

<center>
<iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/uIGbulVstqk?si=MvhW_9eDs7FaAvnj"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            </center>

<br></br>
          <a href='#' className='volver'>Volver</a>
          <br></br><br></br>

      <br></br>
      <Footer></Footer>
    </div>
  );
}
