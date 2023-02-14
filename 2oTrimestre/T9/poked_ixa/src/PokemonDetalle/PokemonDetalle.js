import './PokemonDetalle.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function PokemonCard(props) {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState([]);
    const [tipos, setTipos] = useState([]);

    useEffect(() => cargaDatos(), []);

    function cargaDatos() {
        fetch("https://pokeapi.co/api/v2/pokemon/" + id)
            .then((response) => response.json())
            .then((datosApi) => {
                setPokemon(datosApi);
                setTipos(tipos.concat(datosApi.types));
            });
    }

    return (
        <>
            <h1>{pokemon.name}  N.º {pokemon.id}</h1>

            <table>
                <tbody>
                    <tr>
                        <td>Altura</td>
                        <td>Peso</td>
                    </tr>
                    <tr>
                        <td>{pokemon.height}m</td>
                        <td>{pokemon.weight}kg</td>
                    </tr>
                    <tr>
                        <td>Experiencia Base</td>
                    </tr>
                    <tr>
                        <td>{pokemon.base_experience}</td>
                    </tr>
                </tbody>
            </table>

            <div>
                <p>Tipos</p>
                {
                    tipos.map((tipo) =>
                        <h3 key={tipo.type.name}>{tipo.type.name}</h3>
                    )
                }
            </div>

        </>
    );
}





