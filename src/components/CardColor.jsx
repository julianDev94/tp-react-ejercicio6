import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';


const CardColor = ({nombreColores}) => {
    return (
            nombreColores.map((color) => <Card
            id='card'
              className="mb-2 shadow-lg mx-3"
            >
              <Card.Header>{color}</Card.Header>
              <Card.Body>
                <Card.Text>
                  Color
                </Card.Text>
                <Button variant='danger'>Borrar</Button>
              </Card.Body>
            </Card> )
    );
};

export default CardColor;