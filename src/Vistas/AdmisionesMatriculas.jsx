import React from "react";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function AdmisionesMatriculas() {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>

      <div className="containerNosotros">
        <div className="containerMatriculas">
          <div className="columnMatriculas">
            <img
              className="imgMatriculas"
              src="https://britanniaschool.com.co/imagenes/admision1.png"
            />
          </div>

          <div className="columnMatriculas1 blueMatriculas">
            <div className="form-containerMatriculas">
              <h2>Contactános ahora</h2>

              <input type="text" placeholder="Nombre" />
              <input type="tel" placeholder="Teléfono" />
              <input type="email" placeholder="Email" />
              <label>
                <input type="checkbox" /> Preescolar
              </label>
              <label>
                <input type="checkbox" /> Primaria
              </label>
              <label>
                <input type="checkbox" /> Bachillerato
              </label>
              <button type="submit">Enviar</button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
