import { Check, Info } from "phosphor-react";
import { Benefit, CardContainer, ContainerBenefits, ContainerButton, HeaderCard, LineHorizontal } from "./styles";

export function Card(){
    return(
        <CardContainer>
           <HeaderCard>
                <h3>Para você começar</h3>
                <div>
                    <h2>Essentials</h2>
                    <p>19,97</p>
                </div>
           </HeaderCard>
           <ContainerButton>
                Assinar agora
           </ContainerButton>
          <LineHorizontal />
          <ContainerBenefits>
            <Benefit>
            <div>
            <Check size={22} weight="fill"/>
            <p>Até 3 usuários</p>
            </div>

            <Info size={18} />
            </Benefit>
            <Benefit>
            <div>
            <Check size={22} weight="fill"/>
            <p>Autoatendimento</p>
            </div>

            <Info size={18} />
            </Benefit>
          </ContainerBenefits>
        </CardContainer>
    );
}