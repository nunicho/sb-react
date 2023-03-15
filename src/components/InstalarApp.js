import React from 'react'
import tricorder from "../img/tricorder.jpg"

const InstalarApp = () => {
  return (
    <section className="seccionApp">
      <article className="instalarApp">
        <div className="containerImgApp">
          <img className="imgApp" src={tricorder} alt="Tricorder" />
        </div>
        <div className="instruccionesApp">
          <h2 className="tituloArticulo1">Como instalar nuestra app</h2>
          <div className="textoInstruccionesApp">
            <p>
              ¡Entra ya a la nueva app de STARFLEET BURGERS y obtén descuentos y
              beneficios exclusivos! Descarga nuestra app y accede fácilmente a
              experiencias, promociones y descuentos especiales para que puedas
              disfrutar de tus productos favoritos, por mucho menos de lo que
              pagas habitualmente. Recibirás alertas al momento para enterarte
              en primicia de nuestros nuevos cupones y ofertas disponibles para
              ti. Además, para ayudarte a elegir tu producto favorito, te
              mostramos todos los productos con su información nutricional de tu
              hamburguesa.
            </p>
            <p>
              En tu dispositivo, abre Google Play Store (Androi) o AppStore
              (IOS). Busca la app STARFLEET BURGERS. Selecciónala e instálala.
              Sigue las instrucciones para finalizar la configuración.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default InstalarApp