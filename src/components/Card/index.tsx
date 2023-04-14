import { CardContainer, HeaderCard } from "./styles";

export function Card(){
    return(
        <CardContainer>
           <HeaderCard>
                <h3>Para você começar</h3>
                <div>
                    <h2>Essentials</h2>
                    <p>R$ 19,97/mês</p>
                </div>
           </HeaderCard>
        </CardContainer>
    );
}