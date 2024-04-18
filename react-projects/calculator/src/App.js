import "./App.css";
import talendingLogo from "../src/img/talendingLogo.png";
import Boton from "../src/components/Boton";
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
            <Boton>2</Boton>
            <Boton>3</Boton>
            <Boton>+</Boton>
          </div>
          <div className="fila">
            <Boton>4</Boton>
            <Boton>5</Boton>
            <Boton>6</Boton>
            <Boton>-</Boton>
          </div>
          <div className="fila">
            <Boton>7</Boton>
            <Boton>8</Boton>
            <Boton>9</Boton>
            <Boton>X</Boton>
          </div>
          <div className="fila">
            <Boton>=</Boton>
            <Boton>0</Boton>
            <Boton>.</Boton>
            <Boton>÷</Boton>
          </div>
          <div className="fila">
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
