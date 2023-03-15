import React from 'react'
import chef from "../img/chef.jpg"

const Historia = () => {
  return (
    <section className="seccionHistoria">
      <article className="historia">
        <div className="parrafoHistoria">
          <h2 className="tituloArticulo1"> ¡Warp 9 capitán! </h2>
          <p> ¡LLEVANDO LOS SABORES A DONDE NADIE LOS HA LLEVADO ANTES </p>
          <p>
            El chef Joshua Weismann estaba disfrutando de una peli de Star-Trek
            &#174; saboreando una deliciosa burger, cuando su mente lo llevó a
            donde nadie había llegado antes. ¿Y si pudiera unir sus dos
            pasiones? Así nació STARFLEET BURGERS. ¡Warp 9 capitán! ¡Larga vida
            y prosperidad!
          </p>
          <a
            className="linkReadMore"
            href="https://www.youtube.com/watch?v=lOaKOKohA3w"
          >
            VER A JOSHUA EN ACCIÓN
          </a>
        </div>
        <div className="containerImgChef">
          <img className="imgChef" src={chef} alt="chef" />
        </div>
      </article>
    </section>
  );
}

export default Historia