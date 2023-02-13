import './PokemonCard.css';
import image from '../media/pokeball.png';
import image2 from '../media/pokeballOpen.png';
import { useNavigate } from "react-router-dom";

export default function PokemonCard(props) {
    const navigate = useNavigate();
    const nombre = props.pokeName;

    return (
        <div className="card" style={{ backgroundColor: getRandomColor() }} onClick={verDetalle}>
            <img src={image} className="img-back"></img>
            <img src={image2} className="img-top"></img>
            <h2>{nombre}</h2>
        </div>
    );


    function verDetalle() {
        navigate("/detalle/" + nombre);
    }

}




function getRandomColor() {
    let colors = ["rgb(200,115,206)", "rgb(139,115,206)", "rgb(115,197,206)",
        "rgb(164, 220, 197)", "rgb(198, 75, 139)", "rgb(35, 175, 89)",
        "rgb(1, 252, 122)", "rgb(48, 80, 190)", "rgb(234, 52, 81)",
        "rgb(18, 180, 231)", "rgb(162, 254, 140)", "rgb(241, 116, 186)",
        "rgb(160, 153, 208)", "rgb(226, 211, 113)", "rgb(137, 242, 154)",
        "rgb(85, 201, 181)", "rgb(248, 84, 179)", "rgb(195, 112, 190)",
        "rgb(160, 127, 195)", "rgb(92, 253, 134)", "rgb(254, 102, 44)",
        "rgb(202, 219, 101)", "rgb(239, 143, 246)", "rgb(223, 214, 82)",
        "rgb(217, 238, 86)", "rgb(255, 255, 51)"];

    return colors[Math.floor(Math.random() * colors.length)];
}


