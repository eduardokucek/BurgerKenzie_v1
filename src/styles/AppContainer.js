import styled from "styled-components";

export const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 769px) {
    flex-direction: row;
    align-items: flex-start;
  }

`;
