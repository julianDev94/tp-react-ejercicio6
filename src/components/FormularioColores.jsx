import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import GrupoColores from "./GrupoColores";

const FormularioColores = () => {
  const [nombreColor, setNombreColor] = useState("");
  const [codigoColor, setCodigoColor] = useState("#ffffff");
  const [colores, setColores] = useState([]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const color={
      nombre: nombreColor,
      codigo: codigoColor
    }
    setColores([...colores, color]);
    setNombreColor("");
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
              onChange={(e) => setCodigoColor(e.target.value)}
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
        <GrupoColores colores={colores} />
      </section>
    </>
  );
};

export default FormularioColores;
