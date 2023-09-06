import React, { useState } from "react";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";

export default function AdmisionesMatriculas() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [preescolar, setPreescolar] = useState(false);
  const [primaria, setPrimaria] = useState(false);
  const [bachillerato, setBachillerato] = useState(false);

  const handleEnviarClick = () => {
    // Crear un objeto FormData
    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("telefono", telefono);
    formData.append("email", email);
    formData.append("preescolar", preescolar);
    formData.append("primaria", primaria);
    formData.append("bachillerato", bachillerato);
  
    // Realizar una solicitud POST al archivo PHP
    fetch("https://britanniaschool.com.co/correo.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        // Verificar si la respuesta es exitosa
        if (response.ok) {
          return response.text(); // Obtener el texto de la respuesta
        } else {
          throw new Error("Error en la solicitud"); // Si hay un error en la solicitud, lanzar una excepción
        }
      })
      .then((message) => {
        // Mostrar el mensaje en un alert
        alert(message);
      })
      .catch((error) => {
        console.error("Error al enviar los datos:", error);
      });
  };
  

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

              <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <input
                type="tel"
                placeholder="Teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>
                <input
                  type="checkbox"
                  checked={preescolar}
                  onChange={() => setPreescolar(!preescolar)}
                />{" "}
                Preescolar
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={primaria}
                  onChange={() => setPrimaria(!primaria)}
                />{" "}
                Primaria
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={bachillerato}
                  onChange={() => setBachillerato(!bachillerato)}
                />{" "}
                Bachillerato
              </label>
              <button type="submit" onClick={handleEnviarClick}>
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
