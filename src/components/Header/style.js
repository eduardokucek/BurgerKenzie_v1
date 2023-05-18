import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 7rem;
  width: 100%;
  padding: 0.4rem;
  gap: 1rem;
  background-color: var(--color-grey-0);

  img {
    width: 10rem;
  }

  input {
    border: solid 1px var(--color-grey-20);
    height: 50px;
    width: 76.5%;
    max-width: 78.7%;
    padding-left: 1rem;
  }

  input::placeholder {
    color: var(--color-grey-20);
  }

  button {
    position: absolute;
    top: 50%;
    right: 14%;
    padding: 0.2rem;
    width: 80px;
    height: 40px;
    background-color: var(--color-primary);
    color: #ffffff;
  }

  button:hover {
    background-color: var(--color-primary-50);
  }

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;

    input {
      width: 300px;
      margin-right: 3rem;
    }

    img {
      margin-left: 3rem;
    }

    button {
      top: 36px;
      right: 58px;
    }
  }

  @media (min-width: 1025px) {
    input {
      margin-right: 8rem;
    }

    img {
      margin-left: 8rem;
    }

    button {
      right: 138px;
    }
  }
`;
