import { useContext } from "react";
import { CartContext } from "../../provider/cart";
import Button from "../Button ";
import ListProducts from "../ListProducts";

import { Container, Content } from "./style";

function Cart() {
  const { cartProduct, removeItem } = useContext(CartContext);

  return (
    <Container>
      <Content>
        <h1>Cart</h1>
        {cartProduct.map(({ name, abv, image_url, description, id }) => (
          <>
            <ListProducts
              key={id}
              name={name}
              abv={abv}
              image_url={image_url}
              description={description}
              id={id}
            />
            <Button onClick={() => removeItem(id)}>Remove item</Button>
          </>
        ))}
      </Content>
    </Container>
  );
}

export default Cart;
