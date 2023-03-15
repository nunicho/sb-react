import React from "react";
import comunidad from "../img/comunidad.jpg"

const Comunidad = () => {
  return (
    <section class="seccionHistoria">
      <article class="historia">
        <div class="parrafoHistoria">
          <h2 class="tituloArticulo1"> La comunidad de Starfleet Burgers</h2>
          <p> ¡LLEVANDO LOS SABORES A DONDE NADIE LOS HA LLEVADO ANTES </p>
          <p>
            STARFLEET BURGERS es la primera cadena internacional de comidas
            insprada en en Star-Trek &#174. Star-Trek &#174 es una franquicia de
            series de televisión y películas de ciencia ficción. El universo de
            ficción de Star-Trek &#174 , creado por Gene Roddenberry, está
            compuesto por cinco series de televisión con actores reales más una
            serie de animación con personajes dibujados en 2D, además de trece
            películas. La franquicia también se extiende a más de una docena de
            videojuegos, varios juegos de rol, cientos de novelas y relatos de
            ficción escritos por fans, algunos de los cuales han sido producidos
            en video, así como también una atracción temática en Las Vegas.
            Comenzando con la serie original, y continuando posteriormente con
            las películas y demás series, la franquicia ha creado un fenómeno de
            culto y generado varias referencias en la cultura popular.
          </p>
          <a
            class="linkReadMore"
            href="https://www.youtube.com/watch?v=7W7TLupbUkI"
          >
            ¡SE PARTE DE FLOTA!
          </a>
        </div>
        <div class="containerImgChef">
          <img
            class="imgChef"
            src={comunidad}
            alt="Comunidad Starfleet"
          />
        </div>
      </article>
    </section>
  );
};

export default Comunidad;
