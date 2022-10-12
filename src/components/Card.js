import './Card.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardCake(pr) {
  return (
    <Card className="card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pr.image} />
      <Card.Body >
        <Card.Title>{pr.name}</Card.Title>
        <Card.Text>
        {pr.quote}
        </Card.Text>
        <Button variant="primary">Quiero!</Button>
      </Card.Body>
    </Card>
  );
}

export default CardCake;