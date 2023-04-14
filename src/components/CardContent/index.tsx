import { Card } from "../Card";
import { CardContentContainer } from "./styles";

export function CardContent(){
    return(
        <CardContentContainer>
            <Card />
            <Card />
            <Card />
        </CardContentContainer>
    );
}