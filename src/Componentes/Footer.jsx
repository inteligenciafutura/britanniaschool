import React from 'react'

export default function Footer() {
  return (
    <footer className="custom-footer">
        <div className="footer-column">
          <img src="https://britanniaschool.com.co/Britannia_files/logoBritania.svg" />
        </div>
        <div className="footer-column">
          <p><strong>Llámanos !</strong></p>
          <p>315 323 3611</p>
          <br />
          <p><strong>Dirección</strong></p>
          <p>Vía al pórtico, junto al batallón / Cúcuta</p>
          <p>info@britanniaschool.com.co</p>
        </div>
        <div className="footer-column">
          <a href="#">
            <img
              src="https://britanniaschool.com.co/Britannia_files/iconosgrices_Mesa-de-trabajo-1-q5jjeb7sbfxufv6d69cwscc922i7yu9sxps58x2pto.png"
              className="social"
            />
          </a>
          <a href="#">
            <img
              src="https://britanniaschool.com.co/Britannia_files/iconosgrices-02-q5jjduaowfaomvuxx21mjglyd4tm4aemve1elxrsxo.png"
              className="social"
            />
          </a>
          <a href="#">
            <img
              src="https://britanniaschool.com.co/Britannia_files/iconosgrices-03-q5jjdzxq1fiekjmr04hdyf6pxg1teh10w5ybhljfwc.png"
              className="social"
            />
          </a>
          <a href="#">
            <img
              src="https://britanniaschool.com.co/Britannia_files/iconosgrices-04-q5jje5kr6fq4i7ek36x5ddrhhra0onnewxv8d9b2v0.png"
              className="social"
            />
          </a>
        </div>
      </footer>
  )
}
