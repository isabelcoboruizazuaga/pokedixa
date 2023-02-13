import './PokemonDetalle.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function PokemonCard(props) {
    const {id}=useParams();    
    const [pokemon, setPokemon] = useState([]);
    
    useEffect(() => cargaDatos(), []);

    function cargaDatos() {
        fetch("https://pokeapi.co/api/v2/pokemon/"+id)
            .then((response) => response.json())
            .then((datosApi) => {
                console.log(datosApi)
                setPokemon(datosApi);
            });    
    }
    
    return (
        <div className="card" >
            <h2>{pokemon.id}</h2>
            <h1></h1>
        </div>
    );
}





