import React from "react";
import "../style/Botons.css"


function Boton ({ text, esBotonClick, manejarClick}){
    return(
        <button
        className={ esBotonClick ? "boton-click" : "boton-reiniciar" }
        onClick={manejarClick}>
            {text}
        </button>
    )
}


export default Boton;