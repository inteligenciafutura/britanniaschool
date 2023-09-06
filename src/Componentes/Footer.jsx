import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="custom-footer">
        <div className="footer-column">
          <img src="https://britanniaschool.com.co/imagenes/logoBritania.svg" className="logoFooter" />
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
            <img
              src="https://britanniaschool.com.co/imagenes/facebook.png"
            />
          </a>
          <a href="#">
            <img
              src="https://britanniaschool.com.co/imagenes/instagram.png"
            />
          </a>
          <a href="#">
            <img
              src="https://britanniaschool.com.co/imagenes/twitter.png"
            />
          </a>
          <a href="#">
            <img
              src="https://britanniaschool.com.co/imagenes/linkedin.png"
              className="social"
            />
          </a>
          <a href="https://api.whatsapp.com/send?phone=573153233611&amp;text=Hola,%20en%20que%20te%20puedo%20ayudar?">
            <img
              src="https://britanniaschool.com.co/imagenes/2021/07/iconoWhatshapp-150x150.png"
              className="whatsapp"
            />
          </a>
          
          
        </div>
      </div>
    </footer>
  );
}
