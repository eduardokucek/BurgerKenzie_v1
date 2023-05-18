import { ProductCard, ProductImage, ProductDetails } from "./style.js";

export const Product = ({ product, handleClick }) => {
  return (
    <ProductCard>
      <ProductImage>
        <img src={product.img} alt="produto"></img>
      </ProductImage>
      <ProductDetails>
        <h3>{product.name}</h3>
        <span>{product.category}</span>
        <p>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </ProductDetails>
      <button type="button" onClick={() => handleClick(product.id)}>
        Adicionar
      </button>
    </ProductCard>
  );
};
