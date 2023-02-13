import './App.css';
import ultraBall from './media/ultraBall.png';
import image from './media/pokeballOpen.png';
import PokemonCard from './PokemonCard/PokemonCard';
import PokemonDetalle from './PokemonDetalle/PokemonDetalle';
import { useState, useEffect } from 'react';

function App() {
  const [numPokemons, setnumPokemons] = useState(0);

  const [listaPokemon, setListaPokemons] = useState([]);
  const [urlPokeApi, setUrlPokeApi] = useState("https://pokeapi.co/api/v2/pokemon?limit=8");
  useEffect(() => cargaTodos(), []);



  function cargaTodos() {
    fetch(urlPokeApi)
      .then((response) => response.json())
      .then((datosApi) => {
        setListaPokemons(listaPokemon.concat(datosApi.results))
        setUrlPokeApi(datosApi.next);
      });

  }

  function cargaMas() {
    cargaTodos();
  }

  return (<div className="App">
    <section id="listaPokemon">
      {
        listaPokemon.map((pokemon) =>
          <PokemonCard pokeName={pokemon.name} key={pokemon.name}></PokemonCard>
        )
      }
      
    <div className="card" onClick={cargaMas}>
      <img src={image} class="img-top"></img>
      <img src={ultraBall} class="img-back"></img>
      <h2>Mostrar más</h2>
    </div>

    </section>
    <section>
      <PokemonDetalle pokeName="ditto"></PokemonDetalle>
    </section>
  </div>)

  /*return (
    <div className="App">
      <Cabecera></Cabecera>
      <header className="App-header">
        <h1>Hola!</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );*/
}

export default App;

