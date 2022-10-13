import './ItemListContainer.css'
import cakeApi from '../APICake/cakeApi'
import CardCake from './Card'
import Card from "react-bootstrap/Card"

function Ilc (greeting) {
   return (
    <div>
      <div>
      <Card  style={{ width: '76rem' }}>
      <Card.Body>
        <Card.Title className="greeting">{greeting.msg}</Card.Title>
      </Card.Body>
    </Card>

      </div>
    <div className="cards_container">
    {cakeApi.map((character, i) => (
      <CardCake key={i}
      name= {character.character}
      quote= {character.quote}
      image= {character.image}
      />))}
    </div>
    </div>
   ) 

}

export default Ilc;