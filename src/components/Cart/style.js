import styled from "styled-components";

export const CartShop = styled.aside`
  display: flex;
  flex-direction: column;
  width: 95%;

  margin-top: 0.8rem;
  gap: 0.8rem;
  border: none;
  border-radius: var(--radius-default);
  background-color: var(--color-grey-0);
  overflow: hidden;

  h3 {
    background-color: var(--color-primary);
    color: #ffffff;
    height: 60px;
    padding: 1rem;
  }

  @media (min-width: 769px) {
    width: 50%;
    margin: 8rem 3rem 0 0;
  }

  @media (min-width: 1025px) {
    width: 40%;
    margin-right: 8rem;
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;

  font-size: var(--heading-3);
  font-weight: 700;
  gap: 0.8rem;

  span {
    font-size: var(--heading-4);
    font-weight: 400;
    color: var(--color-grey-50);
  }
`;

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 1rem;
  gap: 1rem;
`;
