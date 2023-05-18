import { CartShop, EmptyCart, CartList } from "./style";
import { CartProduct } from "../CartProduct";
import { CartTotal } from "../CartTotal";

export const Cart = ({
  currentSale,
  setCurrentSale,
  cartTotal,
  setCartTotal,
}) => {
  return (
    <>
      <CartShop>
        <h3>Carrinho de compras</h3>
        {currentSale.length <= 0 ? (
          <EmptyCart>
            Seu carrinho está vazio<span>Adicione itens</span>
          </EmptyCart>
        ) : (
          <CartList>
            {currentSale.map((sale) => (
              <CartProduct
                key={sale.id}
                sale={sale}
                currentSale={currentSale}
                setCurrentSale={setCurrentSale}
              />
            ))}
          </CartList>
        )}

        {currentSale.length <= 0 ? (
          <></>
        ) : (
          <CartTotal
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            cartTotal={cartTotal}
            setCartTotal={setCartTotal}
          />
        )}
      </CartShop>
    </>
  );
};
