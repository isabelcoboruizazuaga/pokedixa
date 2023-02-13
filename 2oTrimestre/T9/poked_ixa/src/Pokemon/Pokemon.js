import './Pokemon.css';
import image from '../media/pokeball.png';
import image2 from '../media/pokeballOpen.png';
import PokemonCard from '../PokemonCard/PokemonCard';
import { useState, useEffect } from 'react';

export default function Pokemon() {
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


    return (
        <section id="listaPokemon">
            {
                listaPokemon.map((pokemon) =>
                    <PokemonCard pokeName={pokemon.name} key={pokemon.name}></PokemonCard>
                )
            }

            <div className="card" onClick={cargaMas}>
                <img src={image2} className="img-top"></img>
                <img src={image} className="img-back"></img>
                <h2>Mostrar más</h2>
            </div>
        </section>)
}


