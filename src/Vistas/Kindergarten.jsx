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
              </div>
              <div className="colNosotros gris">
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
              </div>
            </div>
          </div>
<br></br>
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
        </div>
      )}

      <br></br>
      <Footer></Footer>
    </div>
  );
}
