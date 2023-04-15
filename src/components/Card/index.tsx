import { CardContainer, ContainerButton, HeaderCard, LineHorizontal } from "./styles";

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
        </CardContainer>
    );
}