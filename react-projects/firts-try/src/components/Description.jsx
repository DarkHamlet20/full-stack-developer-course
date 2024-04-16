import React from "react";
import "../stylesheets/description.css";
function DescriptionPokemon() {
  return (
    <div className="contenedor-description">
      <img
        className="img-description"
        src={require("../img/Lucario.png")}
        alt="image pokemon"
      />
      <div className="description-pokemon">
        <p className="nombre-pokemon">Lucario</p>
        <p className="biologia-pokemon">
          Es de tipo lucha/acero, Lucario tiene una habilidad especial conocida como vista aural que le permite ver el aura de las personas y de los Pokémon, con lo que también puede detectar dónde se encuentran. Además, gracias a esta habilidad tiene un movimiento característico, llamado esfera aural, que nunca falla.
        </p>
      </div>
    </div>
  );
}

export default DescriptionPokemon;
