/*import './App.css'
import NavBar from './components/Nav/NavBar';
import Ilc from './components/Catalogo/ItemListContainer';


function App() {
  return (
  <div className="principal_container">
    <NavBar/>
    <Ilc msg="Pastelería de Autor"/>
  </div>
  );
}

export default App;*/

import './App.css'
import Catalogo from "./screens/Catalogo";
import Detalle from "./screens/Detalle";
import Nav from "../src/components/Nav/NavBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
    <BrowserRouter>
        <Nav/>
      <Routes>
        <Route path="/" element={<Catalogo />}></Route>
        <Route path="/category/:cat" element={<Catalogo />}></Route>
        <Route path="/detalle/:idProducto" element={<Detalle />}></Route>
        <Route path="/*" element={<div>404 not found</div>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
