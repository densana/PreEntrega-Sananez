import cakeApi from '../APICake/cakeApi'
import CardCake from './Card'

function Ilc () {
   return (
    <div className="cards_container">
    {cakeApi.map((character, i) => (
      <CardCake key={i}
      name= {character.character}
      quote= {character.quote}
      image= {character.image}
      />))}
    </div>
   ) 
}

export default Ilc;