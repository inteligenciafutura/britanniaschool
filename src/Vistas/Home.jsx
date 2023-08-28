import React from "react";
import "./App.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";

function Home() {
  return (
    <div className="App">
      <Header></Header>
      <div className="Separadora"></div>
      <Menu></Menu>

      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        dynamicHeight={true}
      >
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2022/10/Britannia.png" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/07/img4-1536x800.png" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2022/10/df075e43-109b-4c36-a4c6-4b4fcd4daaf2.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2022/10/d38fc904-1a13-4296-b9e9-0999b555a86c-3.jpg" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/07/img3-1024x533.png" />
        </div>
        <div>
          <img src="https://britanniaschool.com.co/wp-content/uploads/2021/07/img2-1536x800.png" />
        </div>
      </Carousel>

      <div className="container">
        <div className="item">
          <img src="https://britanniaschool.com.co/Britannia_files/icon3-q5jj2ukn7y096nghzl5xay8khdueu2es7cb0sq5zpg.png" />
          <div className="item-content">
            <p>Instalaciones</p>
            <button>Visitanos</button>
          </div>
        </div>
        <div className="item">
          <img src="https://britanniaschool.com.co/Britannia_files/icon1-q5jj2fj86lfo0w2cfenw7216z7wjewr2t9v94asah0.png" />
          <div className="item-content">
            <p>Convenios</p>
            <button>Leer más</button>
          </div>
        </div>
        <div className="item">
          <img src="https://britanniaschool.com.co/Britannia_files/icon2-q5jj2n1xp9pylrrf7hwwr04vqavh4hkxib34yih538.png" />
          <div className="item-content">
            <p>Matrículas</p>
            <button>Fechas</button>
          </div>
        </div>
        <div className="item">
          <img src="https://britanniaschool.com.co/Britannia_files/icon4-q5jj315ijs99fx6xx60baeksn2xzby4wk8vf5nw8hw.png" />
          <div className="item-content">
            <p>Plan académico</p>
            <button>Conocer</button>
          </div>
        </div>
        <div className="item">
          <img src="https://britanniaschool.com.co/Britannia_files/icon4-q5jj315ijs99fx6xx60baeksn2xzby4wk8vf5nw8hw.png" />
          <div className="item-content">
            <p>Kidergarten</p>
            <button>Conocer</button>
          </div>
        </div>
        <div className="item">
          <img src="https://britanniaschool.com.co/Britannia_files/icon4-q5jj315ijs99fx6xx60baeksn2xzby4wk8vf5nw8hw.png" />
          <div className="item-content">
            <p>Primary school</p>
            <button>Conocer</button>
          </div>
        </div>
        <div className="item">
          <img src="https://britanniaschool.com.co/Britannia_files/icon4-q5jj315ijs99fx6xx60baeksn2xzby4wk8vf5nw8hw.png" />
          <div className="item-content">
            <p>Secondary school</p>
            <button>Conocer</button>
          </div>
        </div>
      </div>

      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
        <div>
          <div class="main-container">
            <div class="content">
              <div class="image-container">
                <img src="https://www.trinitycollege.qld.edu.au/PublishingImages/principalTrinity.jpg" />
              </div>
              <div class="text-container">
                <h2>Salud mental positiva</h2>
                <p>Britannia School promueve la salud mental positiva en los estudiantes, buscando que se sientan en un estado de bienestar social y emocional en donde puedan dar lo mejor de sí mismos. Donde sean capaces de darse cuenta de sus habilidades, participar en su mejor aprendizaje, hacer frente a las tensiones normales de la vida y contribuir positivamente a nuestra comunidad.</p>
                {/* <button>Ver más</button> */}
              </div>
            </div>
            <div class="content">
              <div class="image-container">
                <img src="https://www.trinitycollege.qld.edu.au/PublishingImages/principalTrinity.jpg" />
              </div>
              <div class="text-container">
                <h2>Educación personalizada</h2>
                <p>Ofrecemos un entorno de aprendizaje vivo e inspirado, diseñado para fortalecer el desarrollo intelectual, emocional y físico de nuestros estudiantes para que puedan desempeñarse en un mundo real. Siempre reconociendo que cada uno tienen diferentes habilidades, intereses y metas. Nuestro plan de estudios académicos es exigente, pero lo suficientemente flexible para permitir diferentes ritmos de desarrollo y aprendizaje. Nuestro objetivo es que cada estudiante alcance su máximo potencial.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="main-container">
            <div class="content">
              <div class="image-container">
                <img src="https://www.trinitycollege.qld.edu.au/PublishingImages/principalTrinity.jpg" />
              </div>
              <div class="text-container">
                <h2>Investigación</h2>
                <p>En el Britannia School el área de investigación tiene como objetivo que los estudiantes comprendan la importancia de nuestra diversidad y se apersone de las problemáticas ambientales, sociales y de innovación, implementando posibles soluciones, esto se lleva a cabo en actividades didácticas como el día verde, la feria de la ciencia, soy científico y el proyectos de investigación donde los estudiantes aprendan a diseñar, desarrollar e implementar proyectos aplicables en la comunidad educativa.</p>
              </div>
            </div>
            <div class="content">
              <div class="image-container">
                <img src="https://www.trinitycollege.qld.edu.au/PublishingImages/principalTrinity.jpg" />
              </div>
              <div class="text-container">
                <h2>Bioseguridad</h2>
                <p>Cumplimos con todos los estándares y protocolos de bioseguridad requeridos por el Ministerio De Educación y Ministerio de Salud de Colombia</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="main-container">
            <div class="content">
              <div class="image-container">
                <img src="https://www.trinitycollege.qld.edu.au/PublishingImages/principalTrinity.jpg" />
              </div>
              <div class="text-container">
                <h2>Profesores calificados</h2>
                <p>Nuestros maestros a parte de su preparación académica y experiencia, cuentan con fuertes habilidades en comunicación, trabajo en equipo, administración del tiempo, resolución de problemas y organización.</p>
              </div>
            </div>
            <div class="content">
              <div class="image-container">
                <img src="https://www.trinitycollege.qld.edu.au/PublishingImages/principalTrinity.jpg" />
              </div>
              <div class="text-container">
                <h2>Colegio campestre</h2>
                <p>El espacio y la belleza natural de nuestro colegio brindan el mejor entorno de aprendizaje posible para nuestros estudiantes. Hay espacio para crecer, explorar, ser creativo, activo e inspirado.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="main-container">
            <div class="content">
              <div class="image-container">
                <img src="https://www.trinitycollege.qld.edu.au/PublishingImages/principalTrinity.jpg" />
              </div>
              <div class="text-container">
                <h2>Todos los cursos</h2>
                <p>Preescolar, Educación Básica Primaria y Educación Secundaria.</p>
              </div>
            </div>
            <div class="content">
              <div class="image-container">
                <img src="https://www.trinitycollege.qld.edu.au/PublishingImages/principalTrinity.jpg" />
              </div>
              <div class="text-container">
                <h2>Sentirse seguros</h2>
                <p>Britannia School busca que sus estudiantes se sientan seguros, ya que es fundamental para su salud y el bienestar. Qué tan seguro se sientan puede influir en sus hábitos sociales y sentimientos de libertad. Cuando nuestros alumnos se sienten seguros, pueden relajarse más fácilmente, recuperarse del estrés y enfocar su necesidad en el estudio y aprendizaje.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="main-container">
            <div class="content">
              <div class="image-container">
                <img src="https://www.trinitycollege.qld.edu.au/PublishingImages/principalTrinity.jpg" />
              </div>
              <div class="text-container">
                <h2>Ser inclusivos</h2>
                <p>Ser inclusivos y admitir la diversidad significa aceptar abiertamente a los demás y sus opiniones, independientemente del sexo, la raza, la sexualidad, la capacidad o el origen socioeconómico. Se ha demostrado que ser inclusivos en un entorno escolar reduce la incidencia de agresiones motivadas por; prejuicios, racismo, discriminación e intolerancia en la comunidad en general.</p>
              </div>
            </div>
          </div>
        </div>
      </Carousel>

      {/* <div className="container-informativo">
        <div className="column">
          <img src="https://britanniaschool.com.co/Britannia_files/iconos-Actividades-08-q5jjdbhxgw7vo32dai6fsf08smnrfvapwcd8utoueg.png" />
          <h2>Salud mental positiva</h2>
          <p>
            Britannia School promueve la salud mental positiva en los
            estudiantes, buscando que se sientan en un estado de bienestar
            social y emocional en donde puedan dar lo mejor de sí mismos. Donde
            sean capaces de darse cuenta de sus habilidades, participar en su
            mejor aprendizaje, hacer frente a las tensiones normales de la vida
            y contribuir positivamente a nuestra comunidad.
          </p>
        </div>
        <div className="column">
          <img src="https://britanniaschool.com.co/Britannia_files/icoAct3-q5jj1me8f47f6s21lg5krd9qo0bbnguyyg3puv17u0.png" />
          <h2>Educación personalizada</h2>
          <p>
            Ofrecemos un entorno de aprendizaje vivo e inspirado, diseñado para
            fortalecer el desarrollo intelectual, emocional y físico de nuestros
            estudiantes para que puedan desempeñarse en un mundo real. Siempre
            reconociendo que cada uno tienen diferentes habilidades, intereses y
            metas. Nuestro plan de estudios académicos es exigente, pero lo
            suficientemente flexible para permitir diferentes ritmos de
            desarrollo y aprendizaje. Nuestro objetivo es que cada estudiante
            alcance su máximo potencial.
          </p>
        </div>
        <div className="column">
          <img src="https://britanniaschool.com.co/Britannia_files/iconos-Actividades-03-q5jjcxecmdoktxmuku3190kbvul98eqquekyno9qzs.png" />
          <h2>Investigación</h2>
          <p>
            En el Britannia School el área de investigación tiene como objetivo
            que los estudiantes comprendan la importancia de nuestra diversidad
            y se apersone de las problemáticas ambientales, sociales y de
            innovación, implementando posibles soluciones, esto se lleva a cabo
            en actividades didácticas como el día verde, la feria de la ciencia,
            soy científico y el proyectos de investigación donde los estudiantes
            aprendan a diseñar, desarrollar e implementar proyectos aplicables
            en la comunidad educativa.
          </p>
        </div>
      </div> */}

      {/* <div className="container-informativo">
        <div className="column">
          <img src="https://britanniaschool.com.co/Britannia_files/iconos-Actividades_Mesa-de-trabajo-1-q5jjdono4kpw6mj95nv7rbop40uwfmqym5i1kp5bzc.png" />
          <h2>Bioseguridad</h2>
          <p>
            Cumplimos con todos los estándares y protocolos de bioseguridad
            requeridos por el Ministerio De Educación y Ministerio de Salud de
            Colombia
          </p>
        </div>
        <div className="column">
          <img src="https://britanniaschool.com.co/Britannia_files/icoAct5-q5jj20ht9mqq0xhkb48zarpnksdtuxey0dw020gb8o.png" />
          <h2>Profesores calificados</h2>
          <p>
            Nuestros maestros a parte de su preparación académica y experiencia,
            cuentan con fuertes habilidades en comunicación, trabajo en equipo,
            administración del tiempo, resolución de problemas y organización.
          </p>
        </div>
        <div className="column">
          <img src="https://britanniaschool.com.co/Britannia_files/icoAct6-q5jj28ycz52axf59xpwmf7ksx984s7cj1jrddi3roo.png" />
          <h2>Colegio campestre</h2>
          <p>
            El espacio y la belleza natural de nuestro colegio brindan el mejor
            entorno de aprendizaje posible para nuestros estudiantes. Hay
            espacio para crecer, explorar, ser creativo, activo e inspirado.
          </p>
        </div>
      </div> */}

      {/* <div className="container-informativo">
        <div className="column">
          <img src="https://britanniaschool.com.co/Britannia_files/iconos-Actividades-02-q5jjcqthajfkknwen98n9k83q5hoqj0mhi0kaqji7c.png" />
          <h2>Todos los cursos</h2>
          <p>Preescolar, Educación Básica Primaria y Educación Secundaria.</p>
        </div>
        <div className="column">
          <img src="https://britanniaschool.com.co/Britannia_files/iconos-Actividades-07-q5jjd3z7y7xl37daiexf8gwk1jotqagv7b5d0lzzs8.png" />
          <h2>Sentirse seguros</h2>
          <p>
            Britannia School busca que sus estudiantes se sientan seguros, ya
            que es fundamental para su salud y el bienestar. Qué tan seguro se
            sientan puede influir en sus hábitos sociales y sentimientos de
            libertad. Cuando nuestros alumnos se sienten seguros, pueden
            relajarse más fácilmente, recuperarse del estrés y enfocar su
            necesidad en el estudio y aprendizaje.
          </p>
        </div>
        <div className="column">
          <img src="https://britanniaschool.com.co/Britannia_files/iconos-Actividades-09-q5jjdi2ssqgvxcst830trvcgybrbxr0u98xn7rf36w.png" />
          <h2>Ser inclusivos</h2>
          <p>
            Ser inclusivos y admitir la diversidad significa aceptar
            abiertamente a los demás y sus opiniones, independientemente del
            sexo, la raza, la sexualidad, la capacidad o el origen
            socioeconómico. Se ha demostrado que ser inclusivos en un entorno
            escolar reduce la incidencia de agresiones motivadas por;
            prejuicios, racismo, discriminación e intolerancia en la comunidad
            en general.
          </p>
        </div>
      </div> */}

<div className="custom-div">
  <div className="columnInfo">
    <h2>Convenios</h2>
  </div>
  <div className="columnInfo">
    <img src="https://britanniaschool.com.co/imagenes/university-of-cambridge-logo.png"/>
  </div>
  <div className="columnInfo">
    <img src="https://britanniaschool.com.co/imagenes/logosmartfin_5451039f29eb5044c2a3926dea4d67f5-300x169.png"/>
  </div>
</div>

<Footer></Footer>
      
    </div>
  );
}

export default Home;
