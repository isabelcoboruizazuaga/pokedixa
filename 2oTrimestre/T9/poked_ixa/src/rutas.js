//src > Router.js
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navegacion from '../Navegacion/Navegacion';
import Cabecera from '../Cabecera/Cabecera';



const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navegacion />}></Route>
          <Route path="home" element={<Cabecera />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;