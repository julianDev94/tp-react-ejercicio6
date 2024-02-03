import { CardGroup } from "react-bootstrap"
import CardColor from "./CardColor";


const GrupoColores = ({colores}) => {
    return (
        <CardGroup>
            {colores.map((color, posicionColor)=><CardColor key={posicionColor} color={color}/>)}
        </CardGroup>
    );
};

export default GrupoColores;