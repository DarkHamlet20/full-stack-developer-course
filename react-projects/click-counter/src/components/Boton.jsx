import React from "react";


function Boton ({ text, esBotonClick, manejarClic}){
    return(
        <button
        className={ esBotonClick ? "boton-clic" : "boton-reiniciar" }
        onClick={manejarClic}>
            {text}
        </button>
    )
}


export default Boton;