import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, button, textarea {
        -webkit-font-smoothing: antialiased;
        font-family: 'Titillium Web', sans-serif; 
        font-weight: 400;
        font-size: 1rem;
        outline: none
    }
    
`;
