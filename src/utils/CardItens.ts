

export interface CardProps{
    id: number,
    buttonContent: string;
    title: string;
    subtitle: string;
    price?: number[];
    benefits: string[];
    icon?: boolean;
}

export function formatMoney(value: number) {
    return value.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
    });
}

export const cardItens:CardProps[] = [
    {
        id: 0,
        title: "Essentials",
        subtitle: "Para você começar",
        buttonContent: "Assinar agora",
        price: [19.97],
        benefits: ["Até 3 usuários", "Autoatendimento"],
        icon: true,
    },
    {   
        id: 1,
        title: "Ultimate",
        subtitle: "Para você decolar",
        buttonContent: "Assinar agora",
        price: [29.97],
        benefits: ["Usuários ilimitados", "Suporte 24/7", "CSM Dedicado", "Treinamentos"],
        icon: true,
    },
    {   
        id: 2,
        title: "Enterprise",
        subtitle: "Para sua empresa",
        buttonContent: "Fale com a gente",
        benefits: ["Plano customizado especialmente para a necessidade de seu negocio"],
        icon: false,
    }
]
