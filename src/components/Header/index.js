import logo from "../../assets/logo.svg";
import { HeaderContainer } from "./style";

export const Header = ({ showProduct, inputValue, setInputValue }) => {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo"></img>
      <input
        type="text"
        placeholder="Digitar pesquisa"
        id="search"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            showProduct(inputValue);
          }
        }}
      ></input>
      <button type="button" onClick={() => showProduct(inputValue)}>
        Pesquisar
      </button>
    </HeaderContainer>
  );
};
