import styled from "styled-components";

export const CardContainer = styled.div`
    max-width: 320px;
    width: 100%;
    min-height: 282px;
    border-radius: 24px;
    padding: 24px;

    background: ${({theme}) => theme.colors.white};
`;

export const HeaderCard = styled.div`
    background-color: bisque;
    display: flex;
    flex-direction: column;

    > div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;