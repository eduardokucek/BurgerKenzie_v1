import styled from "styled-components";

export const CardCartProduct = styled.li`
  display: flex;
  height: 80px;
  width: 100%;

  p {
    color: var(--color-grey-100);
    font-size: var(--heading-4);
  }

  button {
    background-color: transparent;
    color: var(--color-grey-50);
    height: 40px;
    width: 120px;
  }

  button:hover {
    color: var(--color-grey-100);
  }
`;

export const CardCartImg = styled.div`
  background-color: var(--color-grey-20);
  height: 100%;
  width: 100px;
  border-radius: 5px;

  img {
    width: 80px;
  }
`;

export const CardCartDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0.4rem 1rem;
  width: 100%;

  p {
    font-size: var(--heading-3);
  }

  span {
    font-size: var(--heading-4);
    color: var(--color-grey-50);
  }
`;
