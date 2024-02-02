import { Button, Card, Row, Col } from "react-bootstrap";

const CardColor = ({ colores }) => {
  return (
    colores.map((color) => (
      <Card id="card" className="mb-2 shadow-lg mx-3">
        <Card.Header>{color}</Card.Header>
        <Card.Body>
          <Card.Text>color</Card.Text>
          <Button variant="danger">Borrar</Button>
        </Card.Body>
      </Card>
    ))
  );

};

export default CardColor;
