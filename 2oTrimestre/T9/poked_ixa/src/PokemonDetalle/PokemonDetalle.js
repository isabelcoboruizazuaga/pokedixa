import './PokemonDetalle.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function PokemonCard(props) {


    const {id}=useParams();
    
    const [pokemon, setPokemon] = useState([]);
    const [urlPokeApi, setUrlPokeApi] = useState("https://pokeapi.co/api/v2/pokemon/"+id);
    useEffect(() => cargaDatos(), []);

    function cargaDatos() {
        fetch(urlPokeApi)
            .then((response) => response.json())
            .then((datosApi) => {
                console.log(datosApi)
                setPokemon(datosApi);
            });
    
    }

    let nombre = props.pokeName;
    return (
        <div className="card" >
            <h2>{pokemon.id}</h2>
        </div>
    );
}





