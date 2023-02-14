import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navegacion from './Navegacion/Navegacion';
import Pokemon from './Pokemon/Pokemon';
import PokemonDetalle from './PokemonDetalle/PokemonDetalle';
import Inicio from './Inicio/Inicio';
import ListaDatos from './ListaDatos/listaDatos';
import WhosThatPokemon from './whosThatPokemon/whosThatPokemon';

function App() {

  return (<div className="App">
    <BrowserRouter>

      <Navegacion></Navegacion>
      <Routes>
        <Route path="/" element={<Inicio></Inicio>}></Route>
        <Route path="/listaDatos" element={<ListaDatos></ListaDatos>}></Route>
        <Route path="/pokemon" element={<Pokemon/>}></Route>
        <Route path="/detalle/:id" element={<PokemonDetalle />}></Route>
        <Route path="/whosThatPokemon" element={<WhosThatPokemon />}></Route>
      </Routes>
    </BrowserRouter>


  </div>)


  /**
   * <section id="listaPokemon">
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
   */


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

