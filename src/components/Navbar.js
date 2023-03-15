import React from 'react'
import logo from "../img/logo.png"
import {  NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="seccionHeader">
      <div className="containerImgLogo">
        <img className="imgLogo" src={logo} alt="logo" />
      </div>
      <div>
        <h2 className="brand">STARFLEET BURGERS</h2>
      </div>
      <div>
        <nav className="navbar">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/Nosotros">Nosotros</NavLink>
          <NavLink to="/Contacto">Contacto</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar