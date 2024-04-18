import "./App.css";
import talendingLogo from "../src/img/talendingLogo.png";
import Boton from "../src/components/Boton"
function App() {
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
        <div className="">
          <div className="fila">
          <Boton>1</Boton>
          <Boton>+</Boton>

          </div>
          <div className="fila"></div>
          <div className="fila"></div>
          <div className="fila"></div>
          <div className="fila"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
