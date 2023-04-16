import { Check, Info } from "phosphor-react";
import {
  Benefit,
  CardContainer,
  ContainerBenefits,
  ContainerButton,
  HeaderCard,
  LineHorizontal,
} from "./styles";

interface CardProps{
  buttonContent: string;
  title: string;
  subtitle: string;
  price?: number;
  benefits: string;
}
export function Card({buttonContent, title, subtitle, price, benefits}: CardProps) {
  return (
    <CardContainer>
      <HeaderCard>
        <h3>{subtitle}</h3>
        <div>
          <h2>{title}</h2>
          <p>{price}</p>
        </div>
      </HeaderCard>
      <ContainerButton>{buttonContent}</ContainerButton>
      <LineHorizontal />
      <ContainerBenefits>
        <Benefit>
          <div>
            <Check size={22} weight="fill" />
            <p>{benefits}</p>
          </div>

          <Info size={18} />
        </Benefit>
        <Benefit>
          <div>
            <Check size={22} weight="fill" />
            <p>Autoatendimento</p>
          </div>

          <Info size={18} />
        </Benefit>
      </ContainerBenefits>
    </CardContainer>
  );
}
