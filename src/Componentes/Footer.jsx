import React, { useState, useEffect } from "react";

export default function Footer() {
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
          <footer className="footer2">
            <center>
            <img
              src="https://britanniaschool.co.com/imagenes/logoBritania.svg"
              className="logoFooter"
            />
            </center>
            <div className="textofooterresponsive">
            <p>
                <strong>Llámanos !</strong>
              </p>
              <p>315 323 3611</p>
              <br />
              <p>
                <strong>Dirección</strong>
              </p>
              <p>Vía al pórtico, junto al batallón / Cúcuta</p>
              <p>info@britanniaschool.com.co</p>
            </div>
            <div className="footer-column">
              <a href="#">
                <img src="https://britanniaschool.co.com/imagenes/facebook.png" />
              </a>
              <a href="#">
                <img src="https://britanniaschool.co.com/imagenes/instagram.png" />
              </a>
              <a href="#">
                <img src="https://britanniaschool.co.com/imagenes/twitter.png" />
              </a>
              <a href="#">
                <img
                  src="https://britanniaschool.co.com/imagenes/linkedin.png"
                  className="social"
                />
              </a>
              <a href="https://api.whatsapp.com/send?phone=573153233611&amp;text=Hola,%20en%20que%20te%20puedo%20ayudar?">
                <img
                  src="https://britanniaschool.co.com/imagenes/2021/07/iconoWhatshapp-150x150.png"
                  className="whatsappReponsive"
                />
              </a>
            </div>
          </footer>
        </div>
      ) : (
        <footer className="footer">
          <div className="custom-footer">
            <div className="footer-column">
              <img
                src="https://britanniaschool.co.com/imagenes/logoBritania.svg"
                className="logoFooter"
              />
            </div>
            <div className="footer-column1">
              <p>
                <strong>Llámanos !</strong>
              </p>
              <p>315 323 3611</p>
              <br />
              <p>
                <strong>Dirección</strong>
              </p>
              <p>Vía al pórtico, junto al batallón / Cúcuta</p>
              <p>info@britanniaschool.com.co</p>
            </div>
            <div className="footer-column">
              <a href="#">
                <img src="https://britanniaschool.co.com/imagenes/facebook.png" />
              </a>
              <a href="#">
                <img src="https://britanniaschool.co.com/imagenes/instagram.png" />
              </a>
              <a href="#">
                <img src="https://britanniaschool.co.com/imagenes/twitter.png" />
              </a>
              <a href="#">
                <img
                  src="https://britanniaschool.co.com/imagenes/linkedin.png"
                  className="social"
                />
              </a>
              <a href="https://api.whatsapp.com/send?phone=573153233611&amp;text=Hola,%20en%20que%20te%20puedo%20ayudar?">
                <img
                  src="https://britanniaschool.co.com/imagenes/2021/07/iconoWhatshapp-150x150.png"
                  className="whatsapp"
                />
              </a>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
