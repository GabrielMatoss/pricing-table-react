import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 320px;
  width: 100%;
  min-height: 282px;
  border-radius: 24px;
  padding: 24px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  background: ${({ theme }) => theme.colors.white};

`;

export const HeaderCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h3 {
    color: ${({ theme }) => theme.colors["purple-200"]};
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 21px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: ${({ theme }) => theme.colors["gray-800"]};
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 37px;
    }

    p {
      color: ${({ theme }) => theme.colors["gray-800"]};
      font-style: normal;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 27px;

      &::before {
        content: "R$";
        font-weight: 400;
        font-size: 1rem;
        margin-right: 2px;
      }

      &::after {
        content: "/mês";
        font-size: 1.1rem;
      }
    }
  }
`;

export const ContainerButton = styled.button`
  width: 100%;
  outline: none;
  border: none;
  background: ${({ theme }) => theme.colors.white};
  height: 3.5rem;
  padding: 16px, 24px, 16px, 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors["gray-800"]};

  font-weight: 700;
  font-size: 1rem;
  line-height: 24px;
`;


export const LineHorizontal = styled.div`
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.colors["gray-200"]};
`;