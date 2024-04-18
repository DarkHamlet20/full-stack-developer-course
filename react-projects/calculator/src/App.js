import "./App.css";
import talendingLogo from "../src/img/talendingLogo.png";
import Boton from "../src/components/Boton";
import Screen from "./components/Screen";
import BotonClear from "./components/BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs";


function App() {
  
  const [input, setInput] = useState(''); 

  const addInput = val =>{
    setInput(input + val);
  };

  const calResult = () =>{
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };
  

  return (
    <div className="App">
      <div className="talending-logo-container">
        <img
          src={talendingLogo}
          className="talending-logo"
          alt="Logo de talending"
        />
      </div>
      <div className="container-calculator">
        <Screen input={input}/>
        <div className="fila">
          <Boton manejarClick={addInput}>1</Boton>
          <Boton manejarClick={addInput}>2</Boton>
          <Boton manejarClick={addInput}>3</Boton>
          <Boton manejarClick={addInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={addInput}>4</Boton>
          <Boton manejarClick={addInput}>5</Boton>
          <Boton manejarClick={addInput}>6</Boton>
          <Boton manejarClick={addInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={addInput}>7</Boton>
          <Boton manejarClick={addInput}>8</Boton>
          <Boton manejarClick={addInput}>9</Boton>
          <Boton manejarClick={addInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={calResult}>=</Boton>
          <Boton manejarClick={addInput}>0</Boton>
          <Boton manejarClick={addInput}>.</Boton>
          <Boton manejarClick={addInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={()=> setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
