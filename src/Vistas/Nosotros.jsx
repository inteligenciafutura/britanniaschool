import React from 'react'
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";

export default function Nosotros() {
  return (
    <div>
    <Header></Header>
    <Menu></Menu>
    <img src='https://britanniaschool.com.co/wp-content/uploads/2021/08/DSC06479-2048x1365.jpg' className='imagenNosotros' />

    <div class="containerNosotros">

    <div className="rowNosotros">
      <div className="colNosotros">
        <h2 className="blue-textNosotros">Misión</h2>
        <p className="text-justifyNosotros">La INSTITUCION BRITANNIA SCHOOL es un colegio de educación formal con énfasis en inglés, comprometidos con la formación de ciudadanos del mundo, bilingües, humanistas y preparados para aportar en la construcción de una mejor sociedad.</p>
      </div>
      <div className="colNosotros">
        <img src="https://britanniaschool.com.co/wp-content/uploads/2021/08/china.png" />
      </div>
    </div>
    <div className="rowNosotros">
      <div className="colNosotros">
        <img className="centered-image" src="https://britanniaschool.com.co/wp-content/uploads/2021/08/IMG-20210723-WA0039-1024x766.jpg" />
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
        <img src="https://britanniaschool.com.co/wp-content/uploads/2021/08/tim-mossholder-WE_Kv_ZB1l0-unsplash-1024x683.jpg" />
      </div>
    </div>

    </div>

    <Footer></Footer>

    </div>
  )
}
