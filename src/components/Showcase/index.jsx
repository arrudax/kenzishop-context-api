import { useContext } from "react";

import { Container, Content } from "./style.js";

import { BeersContext } from "../../provider/ProductsBeer";
import ListProducts from "../ListProducts";
import Button from "../Button /index.jsx";
import { CartContext } from "../../provider/cart/index.jsx";
import Cart from "../Cart/index.jsx";

function Showcase() {
  const { products } = useContext(BeersContext);
  const { addToCart } = useContext(CartContext);

  return (
    <Container>
      <Content>
        <h1>Showcase</h1>
        {products.map(({ name, abv, image_url, description, id }) => (
          <>
            <ListProducts
              key={id}
              name={name}
              abv={abv}
              image_url={image_url}
              description={description}
              id={id}
            />

            <Button onClick={() => addToCart(id)}>Adicionar</Button>
          </>
        ))}
      </Content>
      <Cart />
    </Container>
  );
}

export default Showcase;
