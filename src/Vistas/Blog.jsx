import React from "react";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";

export default function Blog() {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>

      <div className="containerBlog">
        <div className="itemBlog">
          Primeras Comuniones
          <br></br>
          21 junio, 2022
          <br></br>
          No hay comentarios
          <br></br>
          Nuestros estudiantes del Britannia School recibieron el sacramento de
          la primera comunión. Además de esto, se llevó a cabo una integración
          entre nuestros estudiantes.
          <br></br>
          <a href="#/PrimerasComuniones">Read More »</a>
        </div>
        <div className="itemBlog">
          Izada de Bandera Batalla de Cúcuta año 2022
          <br></br>
          28 febrero, 2022
          <br></br>
          No hay comentarios
          <br></br>
          209 años de la batalla de Cúcuta se celebran hoy dentro del recorrido
          de libertad que hizo Simón Bolívar en su gesta libertadora y que
          también tocó.
          <br></br>
          <a href="#/IzadaBandera">Read More »</a>
        </div>
        <div className="itemBlog">
          Semana Britannia School.
          <br></br>5 octubre, 2021
          <br></br>
          No hay comentarios
          <br></br>
          Welcome to learning Fun School.
          <br></br>
          <a href="#/SemanaBritania">Read More »</a>
        </div>
        <div className="itemBlog">
          Back to School 2022!
          <br></br>6 septiembre, 2021
          <br></br>
          No hay comentarios
          <br></br>
          <a href="#/BacktoSchool2022">Read More »</a>
        </div>
        <div className="itemBlog">
          Clases en modalidad presencial 2021 - Regreso a las aulas
          <br></br>6 septiembre, 2021
          <br></br>
          No hay comentarios
          <br></br>
          <a href="#/ModalidadPresencial2021">Previous Next</a>
        </div>
        <div className="itemBlog">
          Feria virtual de universidades 2021 en aras de fortalecer la
          orientación vocacional en los grados décimo y once.
          <br></br>6 septiembre, 2021
          <br></br>
          No hay comentarios
          <br></br>
          <a href="#/FeriaVirtualUniversidades">Previous Next</a>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
