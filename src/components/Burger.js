import React from 'react'
import { burgers } from '../data';

const Burger = () => {
  return (
    <section className="seccionMenu">
      <br />
      <h2 className="tituloArticulo2">¿Qué va a ordenar hoy capitán?</h2>
      <article className="menu">
      {burgers.map((burger)=>{
      const {id, estiloCard, nombre, imagen, nombreSecundario, descripcion}=burger
        return (
          <aside key={id} className={estiloCard}>
            <div className="containerImgMenu">
              <img src={imagen} alt={nombreSecundario} />
            </div>
            <div className="containerIngredientes">
              <h3 className="textotituloMenu">{nombre}</h3>
              <h4 className="textotituloMenu">{nombreSecundario}</h4>
              <p>{descripcion}</p>
            </div>
          </aside>
        );
      })}          
      </article>
    </section>
  );
}

export default Burger