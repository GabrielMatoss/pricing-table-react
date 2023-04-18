import { Check, Info } from "phosphor-react";
import { v4 as uuidv4 } from "uuid";

import {
  Benefit,
  CardContainer,
  ContainerBenefits,
  ContainerButton,
  HeaderCard,
  LineHorizontal,
} from "./styles";

import { CardProps, formatMoney } from "../../utils/CardItens";

interface CardItemsProps {
  items: CardProps;
}

export function Card({ items }: CardItemsProps) {
  return (
    <CardContainer>
      <HeaderCard>
        <h3>{items.subtitle}</h3>
        <div>
          <h2>{items.title}</h2>
          {items.price?.map((prices) => (
            <p key={prices}>{formatMoney(prices)}</p>
          ))}
        </div>
      </HeaderCard>
      <ContainerButton>{items.buttonContent}</ContainerButton>
      <LineHorizontal />
      <ContainerBenefits>
        {items.benefits.map((benefit) => (
          <Benefit key={uuidv4()}>
            <div>
              <Check size={22} weight="fill" />
              <p>{benefit}</p>
            </div>
            {items.icon && <Info size={18} />}
          </Benefit>
        ))}
      </ContainerBenefits>
    </CardContainer>
  );
}
