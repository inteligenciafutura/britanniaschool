import React from "react";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function PlanAcademico() {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>

    <img src="https://britanniaschool.com.co/imagenes/planacademico.png" className="imagenConvenios" />


<h2 className="tituloConvenios">Plan académico</h2>

<div className="textoCovenios">
Las áreas académicas son el centro de nuestro proceso formativo, a partir del conocimiento de cada área, se forman las competencias para la vida.<br></br><br></br>

- En lengua castellana se desarrollan las competencias comunicativas (leer, escribir, escuchar, hablar) formando la expresión y la buena ética de la comunicación.<br></br><br></br>

- En filosofía, se sientan las bases para el desarrollo del pensamiento crítico a través del estudio de las distintas corrientes del pensamiento humano.<br></br><br></br>

- En ciencias sociales se fomenta la convivencia ciudadana a través de la práctica de competencias sociales para la formación del adulto comprometido con el mundo que nos rodea.<br></br><br></br>

- El área de Matemáticas desarrolla el pensamiento lógico numérico como herramienta para la vida.<br></br><br></br>

- En ciencias naturales se vivencia la exploración del medio, los fenómenos de la vida y naturaleza a través de la investigación y comprobación, los cuales lleva a los aprendices a fortalecer su responsabilidad social ambiental
<br></br><br></br>

- En el área de Educación Física, se promueve el estilo de vida saludable y la salud; mental, física y emocional. El deporte y la actividad física forma en el estudiantado habilidades y destrezas en su expresión corporal, gestual y emocional.<br></br><br></br>

- La formación espiritual y en valores, forma estudiantes proactivos, vivenciando una imagen personal positiva para mantenerse en armonía con el medio que los rodea, de igual forma fomenta la capacidad de tomar decisiones y asumir sus consecuencias.<br></br><br></br>

- En tecnología, se busca que nuestros estudiantes estén a la vanguardia con el proceso de globalización.
Artística lleva a nuestros alumnos a entender el orden lógico y la jerarquía del valor presente en el ambiente que les rodea plasmando este conocimiento en obras artística.<br></br><br></br>

- En inglés como nuestra área más representativa, desarrolla las habilidades comunicativas, lingüísticas y gramaticales permitiendo a los estudiantes entrar en universalidad del idioma a la vez que los prepara en sus competencias de habilidades sociales y culturales reduciendo la brecha cultural y llevándolos a la par con la comunidad estudiantil mundial.<br></br><br></br>

- Proyectos de investigación<br></br><br></br>
<br></br><br></br>
</div>

      <Footer></Footer>
    </div>
  );
}