import React from 'react';
import { Button, Card } from 'react-bootstrap';


const CardColor = () => {
    return (
        <Card
        id='card'
          className="mb-2 shadow-lg"
        >
          <Card.Header>Nombre Color</Card.Header>
          <Card.Body>
            <Card.Text>
              Color
            </Card.Text>
            <Button variant='danger'>Borrar</Button>
          </Card.Body>
        </Card>
    );
};

export default CardColor;