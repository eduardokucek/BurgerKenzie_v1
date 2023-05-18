import styled from "styled-components";

export const ProductList = styled.section`
  display: flex;
  flex-direction: column;
  height: 380px;
  width: 96%;
  margin-top: 8rem;
  gap: 0.8rem;

  @media (min-width: 769px) {
    height: 100%;
    width: 85%;
    margin-left: 3rem;
  }

  @media (min-width: 1025px) {
    margin-left: 10rem;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  h3 > span {
    color: var(--color-grey-50);
  }

  button {
    padding: 0.2rem;
    width: 120px;
    height: 40px;
    background-color: var(--color-primary);
    color: #ffffff;
  }

  button:hover {
    background-color: var(--color-primary-50);
  }

  @media (min-width: 769px) {
    width: 82%;
  }
  @media (min-width: 1025px) {
    width: 92%;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 0.8rem;
  overflow: auto;
  height: 100%;

  @media (min-width: 769px) {
    flex-wrap: wrap;
  }
`;
