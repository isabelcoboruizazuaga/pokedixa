import './Navegacion.css';
import { Link } from "react-router-dom";

function Navegacion() {
   return <>
      <Link to="/">Inicio</Link>
      <Link to="/pokemon">Pokemon</Link>
      <Link to="/detalle/ditto">Detalle</Link>
   </>
}

export default Navegacion;
