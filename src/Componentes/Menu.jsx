import React, { useState, useEffect } from "react";

export default function Menu() {
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
      {isMobile ? (
        <div>
          <div class="menuMenu">
            <a href="#" class="botonMobile">Inicio</a>
            <a href="#/Nosotros" class="botonMobile">
              BRITANNIA SCHOOL
            </a>
            <a href="#/ProyectoEducativo" class="botonMobile">
              Idioma extranjero
            </a>
            <a href="#/VidaEnColegio" class="botonMobile">
              Vida en el colegio
            </a>
            <a href="#/AdmisionesMatriculas" class="botonMobile">
              Admisiones & Matrículas
            </a>
            <a href="#/Blog" class="botonMobile">
              Blog
            </a>
          </div>
        </div>
      ) : (
        <div className="menu">
          <div className="menu-column">
            <a href="#">Inicio</a>
            <a href="#/Nosotros">BRITANNIA SCHOOL</a>
            <a href="#/ProyectoEducativo">Idioma extranjero</a>
            <a href="#/VidaEnColegio">Vida en el colegio</a>
            <a href="#/AdmisionesMatriculas">Admisiones & Matrículas</a>
            <a href="#/Blog">Blog</a>
            <a
              className="webColoegio"
              href="https://www.webcolegios.com/eaglehillschool/"
            >
              <img
                src="https://britanniaschool.com.co/imagenes/2021/09/logo_webcolegios.png"
                className="imgWeb"
              />
            </a>
          </div>
          <div className="social-icons"></div>
        </div>
      )}
    </div>
  );
}
