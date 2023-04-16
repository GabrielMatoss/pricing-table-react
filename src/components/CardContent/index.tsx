import { Card } from "../Card";
import { CardContentContainer } from "./styles";

export function CardContent() {
  return (
    <CardContentContainer>
      <Card
        benefits="Autoatendimento"
        buttonContent="Assinar agora"
        price={19.90}
        title="Essentials"
        subtitle="Para você começar"
      />
      <Card
        benefits="Autoatendimento"
        buttonContent="Assinar agora"
        price={21.25}
        title="Essentials"
        subtitle="Para você começar"
      />
      <Card
        benefits="Autoatendimento"
        buttonContent="Assinar agora"
        title="Essentials"
        subtitle="Para você começar"
        price={21.25}
      />
    </CardContentContainer>
  );
}
