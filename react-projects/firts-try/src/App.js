import "./App.css";
import DescriptionPokemon from "./components/Description";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>My Pokemons tryhards</h1>
        <DescriptionPokemon 
        img="Lucario.jpg"
        nombre="Lucario" 
        biologia="Es de tipo lucha/acero, Lucario tiene una habilidad especial conocida como vista aural que le permite ver el aura de las personas y de los Pokémon, con lo que también puede detectar dónde se encuentran. Además, gracias a esta habilidad tiene un movimiento característico, llamado esfera aural, que nunca falla." />
        <DescriptionPokemon 
        img="Blastoise.jpg"
        nombre="Blastoise" 
        biologia="Es una enorme tortuga bípeda, que puede extender unos poderosos cañones situados en su espalda para disparar potentes chorros de agua, con la fuerza suficiente para quebrar muros de cemento o metales delgados. Pueden disparar balas de agua con suficiente precisión para golpear latas a 50 metros de distancia. Pese a ello, son incapaces de apuntar a objetivos demasiado cercanos. Pueden arrojar la cantidad de agua suficiente como para llenar 3 piscinas olímpicas en un minuto." />
        <DescriptionPokemon 
        img="Charizard.jpg"
        nombre="Charizard" 
        biologia="Es conocido que les gusta vivir en lugares altos y calientes, por lo que se encuentran en muchas ocasiones cerca de volcanes. Es muy presuntuoso, violento, agresivo y muy orgulloso. Es tanto así, que no es capaz de pelear contra un Pokémon más débil que él." />
        
      </div>
    </div>
  );
}

export default App;
