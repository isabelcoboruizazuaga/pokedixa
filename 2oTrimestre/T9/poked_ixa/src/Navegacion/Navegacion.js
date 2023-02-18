import './Navegacion.css';
import { Link } from "react-router-dom";

function Navegacion() {
   return <nav className='navegacion'>
      <Link to="/">Inicio</Link>
      <Link to="/listaDatos">Datos</Link>
      <Link to="/pokemon">Pokemon</Link>
      <Link to="/detalle/ditto">Detalle</Link>
      <Link to="/whosThatPokemon">Cuál es este pokemon</Link>
   </nav>
}

export default Navegacion;
