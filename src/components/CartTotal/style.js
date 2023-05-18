import styled from "styled-components";

export const CartTotalStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.8rem;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  p {
    font-size: var(--heading-4);
    font-weight: 600;
    color: var(--color-grey-100);
  }

  span {
    font-size: var(--heading-4);
    font-weight: 600;
    color: var(--color-grey-50);
  }

  button {
    background-color: var(--color-grey-20);
    color: var(--color-grey-100);
    height: 50px;
  }

  button:hover {
    background-color: var(--color-grey-50);
    color: var(--color-grey-20);
  }
`;

export const Divisor = styled.span`
  align-self: center;
  height: 2px;
  width: 100%;
  background-color: var(--color-grey-20);
`;
