import "../src/App.css";
import talendingLogo from "../src/img/talendingLogo.png";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import { useState } from "react";

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };
  const reiniciarContador = () => {
    setNumClicks(0);
  };
  return (
    <div className="App">
      <div className="talending-logo-container">
        <img
          className="talending-logo"
          src={talendingLogo}
          alt="Logo de talending"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numClicks={numClicks} 
        />
        <Boton text="Click" 
        esBotonClick={true} 
        manejarClick={manejarClick} />
        <Boton
          text="Reiniciar"
          esBotonClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
