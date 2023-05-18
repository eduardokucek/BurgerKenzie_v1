import React from "react";
import { useState, useEffect } from "react";
import { api } from "./services/api.js";

import { Header } from "./components/Header";
import { AppContainer } from "./styles/AppContainer";
import { ProductsList } from "./components/ProductsList";
import { Cart } from "./components/Cart";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [card, setCard] = useState(0);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get("products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadProducts();
  }, []);

  function showProduct(inputValue) {
    const search = products.filter(
      (product) =>
        product.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        product.category.toLowerCase().includes(inputValue.toLowerCase())
    );
    if (inputValue === "") {
      toast.warning("Digite um termo para busca");
    } else if (search.length <= 0) {
      toast.error("Produto ou categoria não encontrados");
    } else {
      setFilteredProducts(search);
    }
  }

  function handleClick(productId) {
    setCard(card + 1);

    const idCard = currentSale.find((product) => product.id === productId);

    if (card > 0 && idCard) {
      toast.error("Produto já adicionado");
    } else {
      toast.success("Produto adicionado com sucesso");
      setCurrentSale([
        ...currentSale,
        products.find((product) => product.id === productId),
      ]);
    }
  }

  return (
    <AppContainer>
      <ToastContainer />
      <Header
        showProduct={showProduct}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <ProductsList
        products={products}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        handleClick={handleClick}
        inputValue={inputValue}
      />
      <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
    </AppContainer>
  );
}

export default App;
