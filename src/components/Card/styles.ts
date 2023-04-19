import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 320px;
  width: 100%;
  min-height: 282px;
  border-radius: 24px;
  padding: 24px;
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 16px;

  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors["gray-200"]};
  transition: border 0.4s;
  transition: transform 0.3s;

  &:hover:not( &:nth-child(2)) {
    border-color: ${({ theme }) => theme.colors["purple-100"]};
    transform: scale(1.1)
  }

  &:nth-child(2) {
    &:hover {
    transform: scale(1.1)
  }
    padding-top: 40px;
    &::after {
      position: absolute;
      display: inline-block;
      top: -17px;
      left: 50%;
      transform: translateX(-50%);
      content: "Mais vantajoso";
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 0.75rem;
      line-height: 18px;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      font-weight: 700;
      background: ${({ theme }) => theme.colors.orange};
      color: ${({ theme }) => theme.colors["gray-900"]};
    }
    background: ${({ theme }) => theme.colors["gray-900"]};
    div > h2,
    div > h2 + p {
      color: ${({ theme }) => theme.colors.white};
    }
    div > p {
      color: ${({ theme }) => theme.colors["gray-200"]};
    }
    section > svg {
      color: ${({ theme }) => theme.colors["gray-500"]};
    }

    div > svg {
      color: ${({ theme }) => theme.colors["green-100"]};
    }
     > button {
      &:hover,
      &:active {
        background-color: ${({ theme }) => theme.colors["purple-200"]};
      }
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors["purple-100"]};
    } 
  }

  &:nth-child(3) {
    gap: 32px;
    svg {
      overflow: visible;
    }
  }

  @media (max-width: 330px){
    &:nth-child(3) {
   gap: 16px;
    }
  }

  @media (min-width: 1024px){
    max-height: 380px;
    &:nth-child(3) {
   gap: 16px;
    }
  }

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
  transition: all 0.4s;

   &:hover,
  &:active {
    background: ${({ theme }) => theme.colors["gray-800"]};
    color: ${({ theme }) => theme.colors.white};
  } 
`;

export const LineHorizontal = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.colors["gray-200"]};
`;

export const ContainerBenefits = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

export const Benefit = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > svg {
    color: ${({ theme }) => theme.colors["gray-900"]};
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    p {
      font-weight: 400;
      font-size: 1rem;
      color: ${({ theme }) => theme.colors["gray-600"]};
    }

    svg {
      color: ${({ theme }) => theme.colors["green-200"]};
    }
  }

`;

