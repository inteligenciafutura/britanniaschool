import React, { useState, useEffect } from "react";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function VidaEnColegio() {
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

      <img
        src="https://britanniaschool.com.co/imagenes/2021/08/banner-solo-vida-en-el-cole-07.png"
        className="imagenNosotros"
      />

      {isMobile ? (
        <div>
          <div className="infoVidaColegio">
            En Britania School, reconocemos que el bienestar emocional y social,
            la resiliencia y el desarrollo positivo de todos los estudiantes, es
            tan importante como recibir una excelente educación académicamente.
            Nuestras enseñanzas académicas inculcan a nuestros estudiantes la
            determinación y el carácter para triunfar.
          </div>
          <h1 className="titulosVida">
            Mi experiencia en el Britannia School ha sido asombrosa. He tenido
            la oportunidad de mejorar mi inglés y ahora puedo tener
            conversaciones con mis profesores y compañeros de clase.
          </h1>

          <div class="containerVida">
            <div class="image-containerVida">
              <img src="https://britanniaschool.com.co/imagenes/2021/08/estudiante.png" />
            </div>
            <div class="text-containerVida">
              <div class="titleVida">MARIANA YÁÑEZ ROJAS</div>
              <div class="descriptionVida">Estudiante</div>
            </div>
          </div>
          <center>
          <iframe
            width="315"
            height="315"
            src="https://www.youtube.com/embed/BVWuBQmoWCQ?si=Z8e1zkC5TbjVAHSg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          </center>

          <br></br>
          <h1 className="titulosVida">
            Britannia School me gusta porque es un colegio bilingüe y a mí me
            gusta aprender inglés. Hay excelentes compañeros, excelentes
            profesores. Ingresa ya a Britannia School.
          </h1>
          <div class="containerVida">
            <div class="image-containerVida">
              <img src="https://britanniaschool.com.co/imagenes/2021/08/samuel.png" />
            </div>
            <div class="text-containerVida">
              <div class="titleVida">ADAM SAMUEL ORDÓÑEZ SAAVEDRA</div>
              <div class="descriptionVida">Estudiante</div>
            </div>
          </div>
          <center>
          <iframe
            width="315"
            height="315"
            src="https://www.youtube.com/embed/4uQJdHxR-os?si=5eo9rqMT_pUYzKVk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          </center>

          <br></br>
          <div class="containerVida">
            <div class="image-containerVida">
              <img src="https://britanniaschool.com.co/imagenes/2021/08/CARDENAS-CASANOVA-MARTIN-ELIAS.jpg" />
            </div>
            <div class="text-containerVida">
              <div class="titleVida">MARTIN ELIAS CARDENAS CASANOVA</div>
              <div class="descriptionVida">Estudiante</div>
            </div>
          </div>
          <center>
          <iframe
              width="315"
              height="315"
              src="https://www.youtube.com/embed/CI_LQtKbD6I?si=PIRDRBqXgydBoT8j"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            </center>

          <br></br>
          <div class="containerVida">
            <div class="image-containerVida">
              <img src="https://britanniaschool.com.co/imagenes/2021/08/DSC_0666-A-HECTOR-EUSEBIO-RODELO-1.jpg" />
            </div>
            <div class="text-containerVida">
              <div class="titleVida">HECTOR EUSEBIO RODELO</div>
              <div class="descriptionVida">Profesor</div>
            </div>
          </div>
          <iframe
              width="315"
              height="315"
              src="https://www.youtube.com/embed/HWYeTe_sLms?si=L34nzIaYUDudKGVc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>

<br></br>
          <div class="containerVida">
            <div class="image-containerVida">
              <img src="https://britanniaschool.com.co/imagenes/2021/08/DSC_0680-A-SANDRA-BELEN-BARON.jpg" />
            </div>
            <div class="text-containerVida">
              <div class="titleVida">SANDRA BELEN BARÓN</div>
              <div class="descriptionVida">Profesor</div>
            </div>
          </div>
          <center>
          <iframe
              width="315"
              height="315"
              src="https://www.youtube.com/embed/pdIDKRJ6iDY?si=DpoVpOknVK1doTz9"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            </center>

<br></br>
          <div class="containerVida">
            <div class="image-containerVida">
              <img src="https://britanniaschool.com.co/imagenes/2021/08/POSTIGLIONI-PENALOZA-DANTE.jpg" />
            </div>
            <div class="text-containerVida">
              <div class="titleVida">DANTE POSTIGLIONI PEÑALOZA</div>
              <div class="descriptionVida">Estudiante</div>
            </div>
          </div>
          <center>
          <iframe
              width="315"
              height="315"
              src="https://www.youtube.com/embed/4BYYZ3CnwGg?si=8q8M_azGfYShGqGx"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            </center>

<br></br>
          <div class="containerVida">
            <div class="image-containerVida">
              <img src="https://britanniaschool.com.co/imagenes/2021/08/WhatsApp-Image-2021-08-17-at-8.19.43-AM.jpeg" />
            </div>
            <div class="text-containerVida">
              <div class="titleVida">ADRIANA MARGARITA LOPEZ</div>
              <div class="descriptionVida">Profesora</div>
            </div>
          </div>
          <center>
          <iframe
              width="315"
              height="315"
              src="https://www.youtube.com/embed/iTX_Txam6yw?si=1Y8oD2Uht5wuBUK7"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            </center>

<br></br>
          <div class="containerVida">
            <div class="image-containerVida">
              <img src="https://britanniaschool.com.co/imagenes/2021/08/DSC_0671-A-MARIA-GABRIELA-HERNANDEZ-min.jpg" />
            </div>
            <div class="text-containerVida">
              <div class="titleVida">MARIA GABRIELA HERNANDEZ</div>
              <div class="descriptionVida">Profesora</div>
            </div>
          </div>
          <center>
          <iframe
              width="315"
              height="315"
              src="https://www.youtube.com/embed/Pz2PLw-HTJ0?si=AtXGhNxhULpTanBZ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            </center>

<br></br>
          <div class="containerVida">
            <div class="image-containerVida">
              <img src="https://britanniaschool.com.co/imagenes/2021/08/WhatsApp-Image-2021-08-17-at-4.45.23-PM.jpeg" />
            </div>
            <div class="text-containerVida">
              <div class="titleVida">JHOANA PEÑALOZA MORA</div>
              <div class="descriptionVida">Profesora</div>
            </div>
          </div>
          <center>
          <iframe
              width="315"
              height="315"
              src="https://www.youtube.com/embed/RoGuOcJ9m_g?si=KqicQVDAq5m3aVNy"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            </center>

<br></br>
          <div class="containerVida">
            <div class="image-containerVida">
              <img src="https://britanniaschool.com.co/imagenes/gabri.png" />
            </div>
            <div class="text-containerVida">
              <div class="titleVida">GABRIELA VILLAMIZAR</div>
              <div class="descriptionVida">Ex Alumna</div>
            </div>
          </div>
          <center>
          <iframe
              width="315"
              height="315"
              src="https://www.youtube.com/embed/Oy87qWVuWUY?si=q8yYZoqTJoQOrnVM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            </center>

<br></br>
          <div class="containerVida">
            <div class="image-containerVida">
              <img src="https://britanniaschool.com.co/imagenes/mari.png" />
            </div>
            <div class="text-containerVida">
              <div class="titleVida">MARIA GABRIELA AMAYA</div>
              <div class="descriptionVida">Ex Alumna</div>
            </div>
          </div>
          <center>
          <iframe
              width="315"
              height="315"
              src="https://www.youtube.com/embed/DK1ar5SzM70?si=0PLMEeB5CnQkfd9a"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            </center>

<br></br>
<div className="rowNosotros">
            <div className="colNosotros">
              <h2 className="blue-textNosotros">CLUB Y ACTIVIDADES!</h2>
              <p className="text-justifyNosotros">
                En Britannia School ofrecemos a los estudiantes varias
                experiencias en la vida escolar diaria, ya que como institución
                creemos que es más allá del aula donde se construye el carácter
                y se forjan los ciudadanos del mañana.<br></br>
                Ofrecemos gran cantidad de actividades de enriquecimiento para
                estudiantes de todas las edades; la danza, el teatro, el arte,
                el debate, la música, los deportes y muchas opciones
                interesante: Lo que anima a cada alumno a encontrar algo
                especial que les ayude a desarrollar las cualidades, actitudes y
                habilidades personales para complementar su éxito académico.
              </p>
            </div>
            <div className="colNosotros">
              <Carousel
                showThumbs={true}
                autoPlay={true}
                infiniteLoop={true}
                dynamicHeight={true}
              >
                <div>
                  <img src="https://britanniaschool.com.co/imagenes/2021/08/40752341_2114921492152525_3594827415605477376_n.jpg" />
                </div>
                <div>
                  <img src="https://britanniaschool.com.co/imagenes/2021/08/40773540_2114921508819190_4436362141984882688_n.jpg" />
                </div>
                <div>
                  <img src="https://britanniaschool.com.co/imagenes/2021/08/40847075_2114921415485866_5634748422335496192_n.jpg" />
                </div>
                <div>
                  <img src="https://britanniaschool.com.co/imagenes/2021/08/41083554_2114921408819200_6960754282882662400_n.jpg" />
                </div>
                <div>
                  <img src="https://britanniaschool.com.co/imagenes/2021/08/41341756_2117798991864775_6350764692289355776_n.jpg" />
                </div>
                <div>
                  <img src="https://britanniaschool.com.co/imagenes/2021/08/44840841_2144985759146098_3746463937525186560_n.jpg" />
                </div>
              </Carousel>
            </div>
          </div>

          <div className="rowNosotros">
            <div className="colNosotros">
              <Carousel
                showThumbs={true}
                autoPlay={true}
                infiniteLoop={true}
                dynamicHeight={true}
              >
                <div>
                  <img src="https://britanniaschool.com.co/imagenes/2021/08/uni1.png" />
                </div>
                <div>
                  <img src="https://britanniaschool.com.co/imagenes/2021/08/uni2.png" />
                </div>
                <div>
                  <img src="https://britanniaschool.com.co/imagenes/2021/08/uni3.png" />
                </div>
                <div>
                  <img src="https://britanniaschool.com.co/imagenes/2021/08/uni4.png" />
                </div>
                <div>
                  <img src="https://britanniaschool.com.co/imagenes/2021/08/uni5.png" />
                </div>
                <div>
                  <img src="https://britanniaschool.com.co/imagenes/2021/08/uni6.png" />
                </div>
              </Carousel>
            </div>
            <div className="colNosotros">
              <h2 className="blue-textNosotros">UNIFORMES</h2>
              <p className="text-justifyNosotros">
                En Britannia School nos enorgullecemos de nuestro práctico y
                llamativo uniforme al que preferimos referirnos como
                “multiforme”.
                <br></br>
                El cual es agradable de llevar, y cualquier prenda de nuestro
                multiforme puede ser utilizada durante todo el año.
              </p>
            </div>
          </div>

          <div className="rowNosotros">
            <div className="colNosotros">
              <h2 className="blue-textNosotros">SALUD Y BIENESTAR</h2>
              <p className="text-justifyNosotros">
                Britania School proporcionar un entorno de aprendizaje seguro,
                creemos que los estudiantes pueden alcanzar su máximo potencial
                educativo cuando están felices, sanos, seguros, y cuando existe
                una cultura escolar positiva para involucrarlos y apoyarlos en
                su aprendizaje.<br></br>
                Nuestro personal docente trabaja colectivamente para garantizar
                que los estudiantes se sientan valorados, cuidados y tengan
                oportunidades significativas para contribuir al colegio y
                participar de manera efectiva en su aprendizaje. Nos esforzamos
                por ser una comunidad educativa donde los estudiantes y
                profesores puedan relacionarse bien entre sí, donde se valoren y
                respeten diferentes ideas y puntos de vista.<br></br>
                Buscando como objetivo desafiar a todos los estudiantes a que se
                conviertan en pensadores optimistas, resilientes, creativos y
                críticos mientras siempre promovemos nuestros valores escolares
                de respeto mutuo, amabilidad, diversidad, aceptación,
                responsabilidad y logros.
              </p>
            </div>
            <div className="colNosotros">
              <Carousel
                showThumbs={true}
                autoPlay={true}
                infiniteLoop={true}
                dynamicHeight={true}
              >
                <div>
                  <img src="https://britanniaschool.com.co/imagenes/2021/08/WhatsApp-Image-2021-07-23-at-9.17.09-AM-1.jpeg" />
                </div>
                <div>
                  <img src="https://britanniaschool.com.co/imagenes/2021/08/WhatsApp-Image-2021-07-23-at-9.17.09-AM-300x225.jpeg" />
                </div>
              </Carousel>
            </div>
          </div>

        </div>
      ) : (
        <div class="containeVidaColegio">
          <div className="infoVidaColegio">
            En Britania School, reconocemos que el bienestar emocional y social,
            la resiliencia y el desarrollo positivo de todos los estudiantes, es
            tan importante como recibir una excelente educación académicamente.
            Nuestras enseñanzas académicas inculcan a nuestros estudiantes la
            determinación y el carácter para triunfar.
          </div>

          <h1 className="titulosVida">
            Mi experiencia en el Britannia School ha sido asombrosa. He tenido
            la oportunidad de mejorar mi inglés y ahora puedo tener
            conversaciones con mis profesores y compañeros de clase.
          </h1>

          <div class="containerVida">
            <div class="image-containerVida">
              <img src="https://britanniaschool.com.co/imagenes/2021/08/estudiante.png" />
            </div>
            <div class="text-containerVida">
              <div class="titleVida">MARIANA YÁÑEZ ROJAS</div>
              <div class="descriptionVida">Estudiante</div>
            </div>
          </div>

          <center>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/BVWuBQmoWCQ?si=Z8e1zkC5TbjVAHSg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </center>

          <br></br>
          <h1 className="titulosVida">
            Britannia School me gusta porque es un colegio bilingüe y a mí me
            gusta aprender inglés. Hay excelentes compañeros, excelentes
            profesores. Ingresa ya a Britannia School.
          </h1>

          <div class="containerVida">
            <div class="image-containerVida">
              <img src="https://britanniaschool.com.co/imagenes/2021/08/samuel.png" />
            </div>
            <div class="text-containerVida">
              <div class="titleVida">ADAM SAMUEL ORDÓÑEZ SAAVEDRA</div>
              <div class="descriptionVida">Estudiante</div>
            </div>
          </div>

          <center>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/4uQJdHxR-os?si=5eo9rqMT_pUYzKVk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </center>

          <br></br>
          <div class="containerVida">
            <div class="image-containerVida">
              <img src="https://britanniaschool.com.co/imagenes/2021/08/CARDENAS-CASANOVA-MARTIN-ELIAS.jpg" />
            </div>
            <div class="text-containerVida">
              <div class="titleVida">MARTIN ELIAS CARDENAS CASANOVA</div>
              <div class="descriptionVida">Estudiante</div>
            </div>
          </div>

          <center>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/CI_LQtKbD6I?si=PIRDRBqXgydBoT8j"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </center>

          <br></br>
          <div class="containerVida">
            <div class="image-containerVida">
              <img src="https://britanniaschool.com.co/imagenes/2021/08/DSC_0666-A-HECTOR-EUSEBIO-RODELO-1.jpg" />
            </div>
            <div class="text-containerVida">
              <div class="titleVida">HECTOR EUSEBIO RODELO</div>
              <div class="descriptionVida">Profesor</div>
            </div>
          </div>

          <center>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/HWYeTe_sLms?si=L34nzIaYUDudKGVc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </center>

          <br></br>
          <div class="containerVida">
            <div class="image-containerVida">
              <img src="https://britanniaschool.com.co/imagenes/2021/08/DSC_0680-A-SANDRA-BELEN-BARON.jpg" />
            </div>
            <div class="text-containerVida">
              <div class="titleVida">SANDRA BELEN BARÓN</div>
              <div class="descriptionVida">Profesor</div>
            </div>
          </div>

          <center>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/pdIDKRJ6iDY?si=DpoVpOknVK1doTz9"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </center>

          <br></br>
          <div class="containerVida">
            <div class="image-containerVida">
              <img src="https://britanniaschool.com.co/imagenes/2021/08/POSTIGLIONI-PENALOZA-DANTE.jpg" />
            </div>
            <div class="text-containerVida">
              <div class="titleVida">DANTE POSTIGLIONI PEÑALOZA</div>
              <div class="descriptionVida">Estudiante</div>
            </div>
          </div>

          <center>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/4BYYZ3CnwGg?si=8q8M_azGfYShGqGx"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </center>

          <br></br>
          <div class="containerVida">
            <div class="image-containerVida">
              <img src="https://britanniaschool.com.co/imagenes/2021/08/WhatsApp-Image-2021-08-17-at-8.19.43-AM.jpeg" />
            </div>
            <div class="text-containerVida">
              <div class="titleVida">ADRIANA MARGARITA LOPEZ</div>
              <div class="descriptionVida">Profesora</div>
            </div>
          </div>

          <center>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/iTX_Txam6yw?si=1Y8oD2Uht5wuBUK7"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </center>

          <br></br>
          <div class="containerVida">
            <div class="image-containerVida">
              <img src="https://britanniaschool.com.co/imagenes/2021/08/DSC_0671-A-MARIA-GABRIELA-HERNANDEZ-min.jpg" />
            </div>
            <div class="text-containerVida">
              <div class="titleVida">MARIA GABRIELA HERNANDEZ</div>
              <div class="descriptionVida">Profesora</div>
            </div>
          </div>

          <center>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Pz2PLw-HTJ0?si=AtXGhNxhULpTanBZ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </center>

          <br></br>
          <div class="containerVida">
            <div class="image-containerVida">
              <img src="https://britanniaschool.com.co/imagenes/2021/08/WhatsApp-Image-2021-08-17-at-4.45.23-PM.jpeg" />
            </div>
            <div class="text-containerVida">
              <div class="titleVida">JHOANA PEÑALOZA MORA</div>
              <div class="descriptionVida">Profesora</div>
            </div>
          </div>

          <center>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/RoGuOcJ9m_g?si=KqicQVDAq5m3aVNy"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </center>

          <br></br>
          <div class="containerVida">
            <div class="image-containerVida">
              <img src="https://britanniaschool.com.co/imagenes/gabri.png" />
            </div>
            <div class="text-containerVida">
              <div class="titleVida">GABRIELA VILLAMIZAR</div>
              <div class="descriptionVida">Ex Alumna</div>
            </div>
          </div>

          <center>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Oy87qWVuWUY?si=q8yYZoqTJoQOrnVM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </center>

          <br></br>
          <div class="containerVida">
            <div class="image-containerVida">
              <img src="https://britanniaschool.com.co/imagenes/mari.png" />
            </div>
            <div class="text-containerVida">
              <div class="titleVida">MARIA GABRIELA AMAYA</div>
              <div class="descriptionVida">Ex Alumna</div>
            </div>
          </div>

          <center>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/DK1ar5SzM70?si=0PLMEeB5CnQkfd9a"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </center>

          <br></br>

          <div className="rowNosotros">
            <div className="colNosotros">
              <h2 className="blue-textNosotros">CLUB Y ACTIVIDADES!</h2>
              <p className="text-justifyNosotros">
                En Britannia School ofrecemos a los estudiantes varias
                experiencias en la vida escolar diaria, ya que como institución
                creemos que es más allá del aula donde se construye el carácter
                y se forjan los ciudadanos del mañana.<br></br>
                Ofrecemos gran cantidad de actividades de enriquecimiento para
                estudiantes de todas las edades; la danza, el teatro, el arte,
                el debate, la música, los deportes y muchas opciones
                interesante: Lo que anima a cada alumno a encontrar algo
                especial que les ayude a desarrollar las cualidades, actitudes y
                habilidades personales para complementar su éxito académico.
              </p>
            </div>
            <div className="colNosotros">
              <Carousel
                showThumbs={true}
                autoPlay={true}
                infiniteLoop={true}
                dynamicHeight={true}
              >
                <div>
                  <img src="https://britanniaschool.com.co/imagenes/2021/08/40752341_2114921492152525_3594827415605477376_n.jpg" />
                </div>
                <div>
                  <img src="https://britanniaschool.com.co/imagenes/2021/08/40773540_2114921508819190_4436362141984882688_n.jpg" />
                </div>
                <div>
                  <img src="https://britanniaschool.com.co/imagenes/2021/08/40847075_2114921415485866_5634748422335496192_n.jpg" />
                </div>
                <div>
                  <img src="https://britanniaschool.com.co/imagenes/2021/08/41083554_2114921408819200_6960754282882662400_n.jpg" />
                </div>
                <div>
                  <img src="https://britanniaschool.com.co/imagenes/2021/08/41341756_2117798991864775_6350764692289355776_n.jpg" />
                </div>
                <div>
                  <img src="https://britanniaschool.com.co/imagenes/2021/08/44840841_2144985759146098_3746463937525186560_n.jpg" />
                </div>
              </Carousel>
            </div>
          </div>

          <div className="rowNosotros">
            <div className="colNosotros">
              <Carousel
                showThumbs={true}
                autoPlay={true}
                infiniteLoop={true}
                dynamicHeight={true}
              >
                <div>
                  <img src="https://britanniaschool.com.co/imagenes/2021/08/uni1.png" />
                </div>
                <div>
                  <img src="https://britanniaschool.com.co/imagenes/2021/08/uni2.png" />
                </div>
                <div>
                  <img src="https://britanniaschool.com.co/imagenes/2021/08/uni3.png" />
                </div>
                <div>
                  <img src="https://britanniaschool.com.co/imagenes/2021/08/uni4.png" />
                </div>
                <div>
                  <img src="https://britanniaschool.com.co/imagenes/2021/08/uni5.png" />
                </div>
                <div>
                  <img src="https://britanniaschool.com.co/imagenes/2021/08/uni6.png" />
                </div>
              </Carousel>
            </div>
            <div className="colNosotros">
              <h2 className="blue-textNosotros">UNIFORMES</h2>
              <p className="text-justifyNosotros">
                En Britannia School nos enorgullecemos de nuestro práctico y
                llamativo uniforme al que preferimos referirnos como
                “multiforme”.
                <br></br>
                El cual es agradable de llevar, y cualquier prenda de nuestro
                multiforme puede ser utilizada durante todo el año.
              </p>
            </div>
          </div>

          <div className="rowNosotros">
            <div className="colNosotros">
              <h2 className="blue-textNosotros">SALUD Y BIENESTAR</h2>
              <p className="text-justifyNosotros">
                Britania School proporcionar un entorno de aprendizaje seguro,
                creemos que los estudiantes pueden alcanzar su máximo potencial
                educativo cuando están felices, sanos, seguros, y cuando existe
                una cultura escolar positiva para involucrarlos y apoyarlos en
                su aprendizaje.<br></br>
                Nuestro personal docente trabaja colectivamente para garantizar
                que los estudiantes se sientan valorados, cuidados y tengan
                oportunidades significativas para contribuir al colegio y
                participar de manera efectiva en su aprendizaje. Nos esforzamos
                por ser una comunidad educativa donde los estudiantes y
                profesores puedan relacionarse bien entre sí, donde se valoren y
                respeten diferentes ideas y puntos de vista.<br></br>
                Buscando como objetivo desafiar a todos los estudiantes a que se
                conviertan en pensadores optimistas, resilientes, creativos y
                críticos mientras siempre promovemos nuestros valores escolares
                de respeto mutuo, amabilidad, diversidad, aceptación,
                responsabilidad y logros.
              </p>
            </div>
            <div className="colNosotros">
              <Carousel
                showThumbs={true}
                autoPlay={true}
                infiniteLoop={true}
                dynamicHeight={true}
              >
                <div>
                  <img src="https://britanniaschool.com.co/imagenes/2021/08/WhatsApp-Image-2021-07-23-at-9.17.09-AM-1.jpeg" />
                </div>
                <div>
                  <img src="https://britanniaschool.com.co/imagenes/2021/08/WhatsApp-Image-2021-07-23-at-9.17.09-AM-300x225.jpeg" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      )}

      <Footer></Footer>
    </div>
  );
}
