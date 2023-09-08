import React, { useState, useEffect } from 'react';
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";

export default function Nosotros() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Cambia 768 por la resolución deseada
    };

    // Agrega un event listener para detectar cambios en el tamaño de la pantalla
    window.addEventListener('resize', handleResize);
    handleResize(); // Llama a la función para verificar el tamaño inicial

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Header></Header>
      <Menu></Menu>
      {isMobile ? (
        // Renderiza el contenido para dispositivos móviles
        <div className="nosotrosResponsive">
          <div className="rowNosotrosResponsive">
            <div className="colNosotrosResponsive">
              <h2 className="blue-textNosotrosResponsive">Misión</h2>
              <p className="text-justifyNosotrosResponsive">La INSTITUCION BRITANNIA SCHOOL es un colegio de educación formal con énfasis en inglés, comprometidos con la formación de ciudadanos del mundo, bilingües, humanistas y preparados para aportar en la construcción de una mejor sociedad.</p>
            </div>
            <div className="colNosotrosResponsive">
              <img src="https://britanniaschool.com.co/imagenes/china.png" className='imagenNosotros' alt="Imagen" />
            </div>
          </div>
          {/* Agrega más contenido aquí si es necesario */}
          <div className="rowNosotrosResponsive">
            <div className="colNosotrosResponsive">
              <h2 className="blue-textNosotrosResponsive">Visión</h2>
              <p className="text-justifyNosotrosResponsive">BRITANNIA SCHOOL será reconocido en el 2027 cómo una institución líder en la formación integral de sus estudiantes, con valores institucionales sólidos y con el dominio del idioma inglés como puente en la generación de mejores oportunidades en su vida personal.</p>
            </div>
            <div className="colNosotrosResponsive">
              <img src="https://britanniaschool.com.co/imagenes/imagenHome7.png" className='imagenNosotros' alt="Imagen" />
            </div>
          </div>
          <div className="rowNosotrosResponsive">
            <div className="colNosotrosResponsive">
              <h2 className="blue-textNosotrosResponsive">Política de Calidad</h2>
              <p className="text-justifyNosotrosResponsive">El colegio BRITANNIA SCHOOL se compromete a garantizar a sus estudiantes una educación personalizada, propiciando ambientes de aprendizaje fundamentados en valores. Con un personal idóneo en formación de niños y jóvenes competentes, con excelentes resultados académicos bilingües y mejorando continuamente su gestión.</p>
            </div>
            <div className="colNosotrosResponsive">
              <img src="https://britanniaschool.com.co/imagenes/2021/08/tim-mossholder-WE_Kv_ZB1l0-unsplash-1024x683.jpg" className='imagenNosotros' alt="Imagen" />
            </div>
          </div>
          <br></br>
          <a href='#' className='volver'>Volver</a>
          <br></br><br></br>
        </div>
      ) : (
        // Renderiza el contenido para pantallas mayores a 768px
        <div className="containerNosotros">

    <div className="rowNosotros">
      <div className="colNosotros">
        <h2 className="blue-textNosotros">Misión</h2>
        <p className="text-justifyNosotros">La INSTITUCION BRITANNIA SCHOOL es un colegio de educación formal con énfasis en inglés, comprometidos con la formación de ciudadanos del mundo, bilingües, humanistas y preparados para aportar en la construcción de una mejor sociedad.</p>
      </div>
      <div className="colNosotros">
        <img src="https://britanniaschool.com.co/imagenes/china.png" className="centered-image" />
      </div>
    </div>
    <div className="rowNosotros">
      <div className="colNosotros">
        <img className="centered-image" src="https://britanniaschool.com.co/imagenes/imagenHome7.png" />
      </div>
      <div className="colNosotros">
        <h2 className="blue-textNosotros">Visión</h2>
        <p className="text-justifyNosotros">BRITANNIA SCHOOL será reconocido en el 2027 cómo una institución líder en la formación integral de sus estudiantes, con valores institucionales sólidos y con el dominio del idioma inglés como puente en la generación de mejores oportunidades en su vida personal.</p>
      </div>
    </div>
    <div className="rowNosotros">
      <div className="colNosotros">
        <h2 className="blue-textNosotros">Política de Calidad</h2>
        <p className="text-justifyNosotros">El colegio BRITANNIA SCHOOL se compromete a garantizar a sus estudiantes una educación personalizada, propiciando ambientes de aprendizaje fundamentados en valores. Con un personal idóneo en formación de niños y jóvenes competentes, con excelentes resultados académicos bilingües y mejorando continuamente su gestión.</p>
      </div>
      <div className="colNosotros">
        <img src="https://britanniaschool.com.co/imagenes/2021/08/tim-mossholder-WE_Kv_ZB1l0-unsplash-1024x683.jpg" className="centered-image" />
      </div>
    </div>

    </div>
      )}
      <Footer></Footer>
    </div>
  )
}
