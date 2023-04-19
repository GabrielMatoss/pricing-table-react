import styled from "styled-components";

export const GlobalWrapperContainer = styled.div`
    max-width: 90rem;
    min-height: 100vh;
    margin: 0 auto;
    background: ${({theme}) => theme.colors["gray-50"]};
    display: flex;
    align-items: center;
    justify-content: center;
`;