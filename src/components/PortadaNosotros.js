import React from 'react'
import portadaNosotros from "../img/portada-nosotros.jpg"

const PortadaNosotros = () => {
  return (
    <section>
      <img className="imgBanner" src={portadaNosotros} alt="Portada" />
      <div className="bienvenido">
        <div>
          <h1 className="title"> ¡Únete a nuestra comunidad!</h1>
          <hr />
          <p className="parrafoTitulo">
            {" "}
            BUENOS MOMENTOS, MUCHOS TREKKIES Y{" "}
            <span className="hamburguesas"> HAMBURGUESAS </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortadaNosotros;