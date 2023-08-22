import React from "react";
import "./App.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">BRITANNIA SCHOOL</a>
            </li>
            <li>
              <a href="#">Proyecto educativo</a>
            </li>
            <li>
              <a href="#">Vida en el colegio</a>
            </li>
            <li>
              <a href="#">Admisiones & Matrículas</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="header">
        <div className="logo">
          <img
            src="https://britanniaschool.com.co/wp-content/uploads/2021/07/logo-1024x207.png"
            alt="Logo Britannia School"
          />
        </div>
        <div className="social-icons">
          <a href="#">
            <img
              src="https://www.trinitycollege.qld.edu.au/PublishingImages/facebook.png"
              alt="Icono Red Social 1"
            />
          </a>
          <a href="#">
            <img
              src="https://www.trinitycollege.qld.edu.au/PublishingImages/facebook.png"
              alt="Icono Red Social 2"
            />
          </a>
        </div>
      </div>

      <Carousel
      showThumbs = {false}
      autoPlay = {true}
      infiniteLoop = {true}
      >
        <div>
          <img src="https://react-responsive-carousel.js.org/assets/1.jpeg" />
        </div>
        <div>
          <img src="https://react-responsive-carousel.js.org/assets/2.jpeg" />
        </div>
        <div>
          <img src="https://react-responsive-carousel.js.org/assets/3.jpeg" />
        </div>
      </Carousel>
    </div>
  );
}

export default App;
