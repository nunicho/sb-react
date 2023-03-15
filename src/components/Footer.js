import React from 'react'
import logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <section className="seccionContactInfo">
        <article className="datos">
          <aside className="dondeEstamos">
            <h3>Dónde estamos</h3>
            <ul className="listaSinPuntos">
              <li>
                <p> 713 S Las Vegas Blvd, Las Vegas, NV 89101</p>
              </li>
              <li>Estados Unidos</li>
            </ul>
          </aside>
          <aside>
            <div className="containerImgLogo">
              <img className="imgLogo" src={logo} alt="logo" />
            </div>
          </aside>
          <aside className="horarios">
            <h3>Nuestros horarios</h3>
            <ul>
              <li>Lunes - Viernes: 10 AM - 11 PM</li>
              <li>Sábados - domingos: 10 AM - 6 PM</li>
            </ul>
          </aside>
          <aside>
            <div className="containerImgLogo">
              <img className="imgLogo" src={logo}alt="logo" />
            </div>
          </aside>
          <aside className="reservas">
            <h3>Reservas</h3>
            <ul>
              <li>Email: burger@starfleetburger.com</li>
              <li>Phone:1 786-558-7343</li>
            </ul>
          </aside>
        </article>
      </section>
      <section className="sectionFooter">
        <p>&copy; Todos los derechos reservados </p>
      </section>
    </footer>
  );
}

export default Footer