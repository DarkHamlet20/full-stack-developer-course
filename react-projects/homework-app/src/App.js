import "./App.css";
import talendingLogo from "../src/img/talendingLogo.png";
import ListaDeTareas from "../src/components/ListaDeTareas";

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className="talending-logo-container">
        <img
          src={talendingLogo}
          className="talending-logo"
          alt="Logo de talending"
        />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
