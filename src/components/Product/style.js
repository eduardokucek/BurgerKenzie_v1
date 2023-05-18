import styled from "styled-components";

export const ProductCard = styled.li`
  display: flex;
  flex-direction: column;
  min-width: 232px;
  height: 300px;
  gap: 1rem;
  border: 1px solid var(--color-grey-20);
  border-radius: 5px;

  :hover {
    border: 1px solid var(--color-grey-50);
  }

  button {
    background-color: var(--color-primary);
    color: #ffffff;
    height: 40px;
    width: 100px;
    margin-left: 0.8rem;
  }

  button:hover {
    background-color: var(--color-primary-50);
  }
`;

export const ProductImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-0);
  height: 110px;
  justify-content: center;
  border-radius: 5px 5px 0 0;

  img {
    width: 110px;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 0 1rem;
  gap: 1rem;

  h3 {
    font-size: var(--heading-3);
  }

  span {
    font-size: var(--heading-4);
    color: var(--color-grey-50);
  }

  p {
    font-size: var(--heading-4);
    color: var(--color-primary);
  }
`;
