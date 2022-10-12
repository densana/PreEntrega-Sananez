import cakeApi from './APICake/cakeApi'
import CardCake from './components/Card'
import './App.css'
import NavBar from './components/NavBar';
import Ilc from './components/ItemListContainer';


function App() {
  return (
  <div className="principal_container">
    <NavBar/>
    <Ilc/>
    <div className="cards_container">
    {cakeApi.map((character, i) => (
      <CardCake key={i}
      name= {character.character}
      quote= {character.quote}
      image= {character.image}
      />))}
       <Ilc/>
    </div>

  </div>
  );
}

export default App;
