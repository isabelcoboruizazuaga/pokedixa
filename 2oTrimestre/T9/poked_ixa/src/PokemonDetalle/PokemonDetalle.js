import './PokemonDetalle.css';
import { useState, useEffect } from 'react';

export default function PokemonCard(props) {

    const [pokemon, setPokemon] = useState([]);
    const [urlPokeApi, setUrlPokeApi] = useState("https://pokeapi.co/api/v2/pokemon/ditto");
    useEffect(() => cargaDatos(), []);

    

    function cargaDatos() {
        fetch(urlPokeApi)
            .then((response) => response.json())
            .then((datosApi) => {
                console.log(datosApi)
                setPokemon(pokemon = datosApi);
            });
    
    }

    let nombre = props.pokeName;
    return (
        <div className="card" >
            <h2>{pokemon.id}</h2>
        </div>
    );
}





