import { CardCartProduct, CardCartImg, CardCartDetails } from "./style";

import { toast } from "react-toastify";

export const CartProduct = ({ sale, currentSale, setCurrentSale }) => {
  function removeProduct(product) {
    setCurrentSale(currentSale.filter((sale) => sale.id !== product.id));
    toast.error("Produto removido");
  }

  return (
    <CardCartProduct>
      <CardCartImg>
        <img src={sale.img} alt={sale.name}></img>
      </CardCartImg>
      <CardCartDetails>
        <p>{sale.name}</p>
        <span>{sale.category}</span>
      </CardCartDetails>
      <button onClick={() => removeProduct(sale)}>Remover</button>
    </CardCartProduct>
  );
};
