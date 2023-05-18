import { CartTotalStyled, Divisor } from "./style";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const CartTotal = ({ currentSale, setCurrentSale }) => {
  const total = currentSale
    .map((sale) => sale.price)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  function removeAll() {
    toast.info("Sua lista de compras esta vazia");
    setCurrentSale([]);
  }
  return (
    <CartTotalStyled>
      <Divisor></Divisor>
      <div>
        <p>Total</p>
        <span>
          {total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <button onClick={() => removeAll()}>Remover todos</button>
    </CartTotalStyled>
  );
};
