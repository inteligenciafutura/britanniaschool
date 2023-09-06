import React from 'react'

export default function Header() {
  return (
    <div>
        <div className="header">
  <div className="logo">
    <img
      src="https://britanniaschool.com.co/imagenes/2021/07/logo-1024x207.png"
      alt="Logo"
    />
  </div>
  <div className="social-icons">
  <div className="contact-info">
      <a href="#" className="ciudad">
        <img
          src="https://britanniaschool.com.co/imagenes/pin.png"
          alt="Location"
        />{' '}
        <strong>Cúcuta, Colombia.</strong>
      </a>
      <a href="#" className="ciudad">
        <img
          src="https://britanniaschool.com.co/imagenes/telefono.png"
          alt="Phone"
        />
        <strong>+57 315 323 3611</strong>
      </a>
    </div>
    <div className="social-links">
      <a href="https://www.facebook.com/Colegiobritanniaschool">
        <img
          src="https://britanniaschool.com.co/imagenes/facebook.png"
        />
      </a>
      <a href="https://www.instagram.com/britannia_school_cucuta_/">
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
        />
      </a>
    </div>
  </div>
</div>

    <div className='Separadora'></div>

    </div>
  )
}
