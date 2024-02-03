import { Button, Card,Form } from "react-bootstrap";

const CardColor = ({ color }) => {
  return (
    <Card id="card" className="mb-2 shadow-lg mx-3 text-center">
      <Card.Header className="fs-4 fw-bold">{color.nombre}</Card.Header>
      <Card.Body className="d-flex flex-column align-items-center bg-info">
      <Form.Control
              type="color"
              size="lg"
              id="inputColor"
              title="Cambia tu color"
              defaultValue={color.codigo}
            />
        <Button variant="danger" className="mt-3">Borrar</Button>
      </Card.Body>
    </Card>
  );
};

export default CardColor;
