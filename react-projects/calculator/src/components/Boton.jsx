import React from "react";
import "../styles/Boton.css"
function Boton (props){

const esOperador = valor =>{
    return isNaN(valor) && (valor != ".") && (valor != "=");
};

    return(
        <div className={`boton-container ${esOperador(props.children) ? "operator" : ""}`.trimEnd()}>
            {props.children}
        </div>
    )
}

export default Boton;