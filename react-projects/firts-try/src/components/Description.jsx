import React from "react";
import "../stylesheets/description.css";

function DescriptionPokemon(props) {
  return (
    <div className="contenedor-description">
      <img
        className="img-pokemon"
        src={require(`../img/${props.img}`)}
        alt="pokemon"
      />
      <div className="description-pokemon">
        <p className="nombre-pokemon"><strong>{props.nombre}</strong></p>
        <p className="biologia-pokemon">
          {props.biologia}
        </p>
      </div>
    </div>
  );
}

export default DescriptionPokemon;
