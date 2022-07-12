import {  CartProvider } from "./cart";
import { BeerProvider } from "./ProductsBeer";

function Providers({ children }) {
  return (
    <BeerProvider>
      <CartProvider>{children}</CartProvider>
    </BeerProvider>
  );
}

export default Providers;
