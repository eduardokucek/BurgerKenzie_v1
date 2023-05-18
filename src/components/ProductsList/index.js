import { ProductList, List, SearchBar } from "./style.js";
import { Product } from "../Product";

export const ProductsList = ({
  products,
  filteredProducts,
  setFilteredProducts,
  handleClick,
  inputValue,
}) => {
  return (
    <>
      {filteredProducts.length === 0 ? (
        <ProductList>
          <List>
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                handleClick={handleClick}
              />
            ))}
          </List>
        </ProductList>
      ) : (
        <ProductList>
          <SearchBar>
            <h3>
              Resultados para: <span>{inputValue}</span>
            </h3>
            <button onClick={() => setFilteredProducts([])}>
              Limpar busca
            </button>
          </SearchBar>
          <List>
            {filteredProducts.map((product) => (
              <Product
                key={product.id}
                product={product}
                handleClick={handleClick}
              />
            ))}
          </List>
        </ProductList>
      )}
    </>
  );
};
