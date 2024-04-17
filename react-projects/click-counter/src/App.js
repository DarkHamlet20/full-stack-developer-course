import "../src/App.css";
import talendingLogo from "../src/img/talendingLogo.png";
import Boton from "./components/Boton";
import Contador from "./components/Contador";

function App() {

  const manejarClick = () =>{

  }
  const reiniciarContador = () =>{

  }
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
        <Contador numClicks="5"/>
        <Boton
          text="Click"
          esBotonClick={true}
          manejarClic={manejarClick} />
        <Boton 
        text="Reiniciar"
        esBotonClick={false}
        manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
