import styled from "styled-components";

export const CardContentContainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 40px;
  padding-inline: 20px;
  @media (max-width: 930px) {
    flex-direction: column;
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;
