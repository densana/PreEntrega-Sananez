import './App.css'
import NavBar from './components/NavBar';
import Ilc from './components/ItemListContainer';


function App() {
  return (
  <div className="principal_container">
    <NavBar/>
    <Ilc msg="Pastelería de Autor"/>
  </div>
  );
}

export default App;
