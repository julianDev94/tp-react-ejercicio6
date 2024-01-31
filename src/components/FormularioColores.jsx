import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import CardColor from "./CardColor";

const FormularioColores = () => {
  return (
    <>
      <section className="mt-4 shadow-lg p-2 rounded">
        <h4>Administrar colores</h4>
        <Form className="mt-4">
          <Form.Group className="mb-3 d-flex bg-info p-3">
            <Form.Control
              type="color"
              size="lg"
              id="inputColor"
              defaultValue="#563d7c"
              title="Cambia tu color"
            />
            <Form.Control
              type="text"
              className="ms-3"
              placeholder="Ingrese un color ej Blue"
              minLength={3}
              maxLength={30}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      </section>
      <section className="my-3">
        <CardColor/>
      </section>
    </>
  );
};

export default FormularioColores;
