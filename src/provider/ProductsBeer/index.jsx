import { createContext, useEffect, useState } from "react";

import apiDrinks from "../../service/api";

export const BeersContext = createContext([]);

export const BeerProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getBeers = () => {
    apiDrinks
      .get("/beers")
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getBeers();

  }, []);

  return (
    <BeersContext.Provider value={{ products }}>
      {children}
    </BeersContext.Provider>
  );
};
