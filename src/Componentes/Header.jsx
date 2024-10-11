import React, { useState, useEffect } from "react";

export default function Header() {
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
          <img
              src="https://britanniaschool.co.com/imagenes/2021/07/logo-1024x207.png"
              className="logoMenuResponsive"
            />
            <a href="#" className="ciudad">
                <img
                  src="https://britanniaschool.co.com/imagenes/pin.png"
                  alt="Location"
                />{" "}
                <strong>Cúcuta, Colombia. </strong>
              </a>
              <a href="#" className="ciudad">
                <img
                  src="https://britanniaschool.co.com/imagenes/telefono.png"
                  alt="Phone"
                />
                <strong> +57 315 323 3611</strong>
              </a>
        </div>
      ) : (
        <div className="header">
          <div className="logo">
            <img
              src="https://britanniaschool.co.com/imagenes/2021/07/logo-1024x207.png"
              alt="Logo"
            />
          </div>
          <div className="social-icons">
            <div className="contact-info">
              <a href="#" className="ciudad">
                <img
                  src="https://britanniaschool.co.com/imagenes/pin.png"
                  alt="Location"
                />{" "}
                <strong>Cúcuta, Colombia.</strong>
              </a>
              <a href="#" className="ciudad">
                <img
                  src="https://britanniaschool.co.com/imagenes/telefono.png"
                  alt="Phone"
                />
                <strong>+57 315 323 3611</strong>
              </a>
            </div>
            <div className="social-links">
              <a href="https://www.facebook.com/Colegiobritanniaschool">
                <img src="https://britanniaschool.co.com/imagenes/facebook.png" />
              </a>
              <a href="https://www.instagram.com/britannia_school_cucuta_/">
                <img src="https://britanniaschool.co.com/imagenes/instagram.png" />
              </a>
              <a href="#">
                <img src="https://britanniaschool.co.com/imagenes/twitter.png" />
              </a>
              <a href="#">
                <img src="https://britanniaschool.co.com/imagenes/linkedin.png" />
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="Separadora"></div>
    </div>
  );
}
