import { createContext, useContext, useState } from "react";
import { BeersContext } from "../ProductsBeer";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cartProduct, setCartProduct] = useState([]);

  const { products } = useContext(BeersContext);

  const addToCart = (id) => {
    const product = products.filter((product) => product.id === id);

    setCartProduct([...cartProduct, ...product]);
  };

  const removeItem = (id) => {
    const map = cartProduct.map((e) => e.id).indexOf(id);
    cartProduct.splice(map, 1);

    setCartProduct([...cartProduct]);
  };

  return (
    <CartContext.Provider value={{ addToCart, cartProduct, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
