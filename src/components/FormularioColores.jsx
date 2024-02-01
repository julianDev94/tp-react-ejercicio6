import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import CardColor from "./CardColor";
import { useState } from "react";

const FormularioColores = () => {
  const [nombreColor, setNombreColor] = useState("");
  const [nombreColores, setNombreColores] = useState([]);
  const [codigoColor, setCodigoColor] = useState("");


  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log("dentro del evento submit");
    setNombreColores([...nombreColores,nombreColor]);
    setNombreColor('');
    setCodigoColor('');
  };

  return (
    <>
      <section className="mt-4 shadow-lg p-2 rounded">
        <h4>Administrar colores</h4>
        <Form className="mt-4" onSubmit={handlerSubmit}>
          <Form.Group className="mb-3 d-flex bg-info p-3">
            <Form.Control
              type="color"
              size="lg"
              id="inputColor"
              title="Cambia tu color"
              onChange={(e)=>setCodigoColor(e.target.value)}
              value={codigoColor}
            />
            <Form.Control
              type="text"
              className="ms-3"
              placeholder="Ingrese un color ej Blue"
              minLength={3}
              maxLength={30}
              onChange={(e) => setNombreColor(e.target.value.trim())}
              value={nombreColor}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      </section>
      <section className="my-3 d-flex">
        <CardColor nombreColores={nombreColores}  />
      </section>
    </>
  );
};

export default FormularioColores;
