/*import './ItemList.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonCount from './ButtonCount'

function Producto(pr) {
  return (
    <Card className="card">
      <Card.Img className="img" variant="top" src={pr.pictureurl} style={{ width: '18rem' }}/>
      <Card.Body >
        <Card.Title>{pr.title}</Card.Title>
        <Card.Text>
        {pr.description}
        </Card.Text>
        <Card.Text>
        {pr.price}
        </Card.Text>
        <ButtonCount className="buttoncount"/>
        <Button variant="primary">Quiero!</Button>
      </Card.Body>
    </Card>
  );
}

export default Producto;*/

import "./ItemList.css";
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonCount from './ButtonCount'
import Card from 'react-bootstrap/Card';

const ItemList = (props) => {
  return (
      <Card className="cardcontainer">
      <Link to={`Detalle/${props.id}`}>
      <Card.Img variant="top" alt={`deli ${props.title}`} src={props.pictureurl} />
      <Card.Body className="descriptioncontainer" >
        <Card.Title className="titulo">{props.title}</Card.Title>
        <Card.Text style={{color: "#3a3636"}}>
          {`# ${props.id}`}
          </Card.Text>
          <Card.Text style={{color: "#3a3636"}}>{props.description}</Card.Text>
          <Card.Text style={{color: "#3a3636"}}>{props.category}</Card.Text>
      </Card.Body>
      </Link>
      <ButtonCount variant="outline-warning" stock={props.stock} initial={0}/>
      <Button variant="outline-warning" >Quiero!</Button>
    </Card>
  );
};

export default ItemList;