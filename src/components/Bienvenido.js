import React from 'react'
import portada from "../img/portada.jpg"

const Bienvenido = () => {
  return (
     <section>
        <img className= "imgBanner" src={portada} alt="Portada" /> 
        <div className="bienvenido">
        <div>
          <h1 className="title"> ¡Bienvenidos a la flota!</h1>
        <hr/>
        <p className="parrafoTitulo"> LARGA VIDA, PROSPERIDAD Y <span className="hamburguesas"> HAMBURGUESAS </span></p>
      </div>  
      </div>
      </section>
  )
}

export default Bienvenido