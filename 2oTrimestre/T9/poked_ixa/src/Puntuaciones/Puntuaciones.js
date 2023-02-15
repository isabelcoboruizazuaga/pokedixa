import { useNavigate } from "react-router-dom";
import "./Puntuaciones.css";

export default function Puntuaciones() {
    const navigate = useNavigate();
    const punt = JSON.parse(localStorage.getItem('puntuaciones'));
    let puntuaciones = [];

    for (let i = 1; i < punt.length; i++) {
        const puntos = punt[i];
        puntuaciones.push(puntos);
        console.log(puntuaciones)
    }

    function volver() {
        navigate("/whosThatPokemon");
    }

    return (
        <section className="puntuaciones">
            <div>
                <table cellspacing ="10">
                    <thead>
                        <th>Puntuaciones</th>
                    </thead>
                    <tbody>
                        {
                            puntuaciones.map((puntuacion) =>
                                <tr key={puntuacion}>
                                    <td>{puntuacion.player}</td>
                                    <td>{puntuacion.puntos}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <button onClick={volver}>Jugar de nuevo</button>
            </div>

        </section>
    );
}