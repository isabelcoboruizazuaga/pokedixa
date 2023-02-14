import './PokemonDetalle.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function PokemonCard(props) {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState([]);
    const [imageFront, setImageFront] = useState("#");
    const [imageBack, setImageBack] = useState("#");
    const [tipos, setTipos] = useState([]);

    useEffect(() => cargaDatos(), []);

    function cargaDatos() {
        fetch("https://pokeapi.co/api/v2/pokemon/" + id)
            .then((response) => response.json())
            .then((datosApi) => {
                setPokemon(datosApi);
                setTipos(tipos.concat(datosApi.types));
                setImageFront(datosApi.sprites.front_default);
                setImageBack(datosApi.sprites.back_default);
            });
    }

    return (
        <section className='detallePokemon'>
            <h1>{pokemon.name}  N.º {pokemon.id}</h1>

            <div className='datosPrincipales'>
                <div className='imagenes'>
                    <img src={imageFront} className="img-back"></img>
                    <img src={imageBack} className="img-top"></img>
                </div>
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
            </div>
            <div className='tipos'>
                <h3>Tipos</h3>
                <div>
                {
                    tipos.map((tipo) =>
                        <p key={tipo.type.name}>{tipo.type.name}</p>
                    )
                }
                </div>
            </div>

        </section>
    );
}





