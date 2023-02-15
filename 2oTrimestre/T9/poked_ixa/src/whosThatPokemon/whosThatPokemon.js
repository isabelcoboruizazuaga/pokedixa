import { useState, useEffect } from 'react';
import "./whosThatPokemon.css";
import { useNavigate } from "react-router-dom";

export default function WhosThatPokemon() {
    const navigate = useNavigate();
    const [listaPokemon, setListaPokemons] = useState([]);
    const [pokemonCorrecto, setPokemonCorrecto] = useState([]);
    const [listaOpciones, setListaOpciones] = useState([]);
    const [puntos, setPuntos] = useState(0);
    const [image, setImage] = useState("#");
    const [ganar, setGanar] = useState(false);
    const [modo, setModo] = useState("facil");
    useEffect(() => cargaTodos(), []);

    function randomNumber() {
        return Math.floor(Math.random() * (1279) + 1);
    }

    function cargaTodos() {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then((response) => response.json())
            .then((datosApi) => {
                if (listaPokemon.length < 1279) {
                    datosApi.results.forEach(element => {
                        setListaPokemons(listaPokemon.push(element));
                    });
                    console.log(listaPokemon);
                    eligePokemon();
                }
            });
    }

    function eligePokemon() {
        let idPok = randomNumber();
        fetch("https://pokeapi.co/api/v2/pokemon/" + listaPokemon[idPok].name)
            .then((response) => response.json())
            .then((datosApi) => {
                setPokemonCorrecto(datosApi);
                setImage(datosApi.sprites.front_default);

                cargarRespuestas(datosApi);
            });
    }

    function cargarRespuestas(pokemonCorrect) {
        for (let i = 1; i < 5; i++) {
            setListaOpciones(listaOpciones.push(listaPokemon[randomNumber()]));
        }
        setListaOpciones(listaOpciones.push(pokemonCorrect));

        setListaOpciones(shuffle(listaOpciones));

    }

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    function empezar() {
        if (ganar == false) {
            setPuntos(puntos - 1);
        }
        setGanar(false);
        setListaPokemons([]);
        setListaOpciones([]);
        cargaTodos();
    }

    function evaluar(nombre) {
        if (nombre == pokemonCorrecto.name) {
            if (modo == "facil") {
                setPuntos(puntos + 1);
            } else {
                setPuntos(puntos + 2);
            }

            setListaPokemons([]);
            setListaOpciones([]);
            setGanar(true);
        } else {
            setPuntos(puntos - 1);
        }
    }

    function acabar() {
        let puntuaciones = [];
        puntuaciones = puntuaciones.concat(JSON.parse(localStorage.getItem('puntuaciones')));
        let player = prompt('Introduce tu nombre');

        if (player.length > 0) {

            puntuaciones.push({ player, puntos });
            console.log(puntuaciones);

            localStorage.setItem('puntuaciones', JSON.stringify(puntuaciones));
            navigate("/puntuaciones");
        }
    }
    function changeModo() {
        if (modo == "facil") {
            setModo("dificil");
        } else {
            setModo("facil");
        }
    }

    return (
        <section className="juego">
            <h1>¿Cuál es este Pokemon?</h1>
            <div className='controles'>
                <h3>Puntuacion: {puntos}</h3>
                <div>
                    <button onClick={empezar}>Nuevo Pokemon</button>
                    <button onClick={acabar}>Rendirse</button>
                    <button onClick={changeModo}>Cambiar modo</button>
                </div>
            </div>
            <div className='game'>
                <div className='whos'>
                    <span><img src={image} className={modo}></img></span>
                </div>

                {(ganar) ? <div className='ganaste'><p>Correcto!</p></div> :
                    <div className='respuestas'>{
                        listaOpciones.map((pokemon) =>
                            <button onClick={() => evaluar(pokemon.name)} key={pokemon.name}><span>{pokemon.name}</span></button>
                        )
                    }

                    </div>}
            </div>
        </section>
    );
}