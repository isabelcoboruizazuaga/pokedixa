import { useState, useEffect } from 'react';
import "./whosThatPokemon.css"

export default function WhosThatPokemon() {
    const [listaPokemon, setListaPokemons] = useState([]);
    const [pokemonCorrecto, setPokemonCorrecto] = useState([]);
    const [listaOpciones, setListaOpciones] = useState([]);
    const [image, setImage] = useState("#");
    const [ganar, setGanar] = useState(false);
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
        setGanar(false);
        setListaPokemons([]);
        setListaOpciones([]);
        cargaTodos();
    }

    function evaluar(nombre) {
        if (nombre == pokemonCorrecto.name) {
            console.log("GANASTE");

            setListaPokemons([]);
            setListaOpciones([]);
            setGanar(true);
        } else {

        }
    }


    return (
        <section className="juego">
            <button onClick={empezar}>Empezar</button>
            <h1>¿Cuál es este Pokemon?</h1>
            <div className='game'>
                <div className='whos'>
                    <img src={image}></img>
                </div>

                {(ganar) ? <div className='ganaste'><p>GANASTE!</p></div> :
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