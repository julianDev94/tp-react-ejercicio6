import { Button, Card, Row, Col } from "react-bootstrap";

const CardColor = ({ color }) => {
  return (
    <Card id="card" className="mb-2 shadow-lg mx-3">
      <Card.Header>{color.nombre}</Card.Header>
      <Card.Body>
        <Card.Text>{color.codigo}</Card.Text>
        <Button variant="danger">Borrar</Button>
      </Card.Body>
    </Card>
  );
};

export default CardColor;
