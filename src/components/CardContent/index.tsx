import { cardItens } from "../../utils/CardItens";
import { Card } from "../Card";
import { CardContentContainer } from "./styles";

export function CardContent() {
  return (
    <CardContentContainer>
      {cardItens.map((items) => (
        <Card key={items.id} items={items} />
      ))}
    </CardContentContainer>
  );
}
