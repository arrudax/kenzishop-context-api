import { useContext } from "react";

import { Container, Content } from "./style.js";

import { BeersContext } from "../../provider/ProductsBeer";
import ListProducts from "../ListProducts";

function Showcase() {
  const { products } = useContext(BeersContext);

  console.log(products);
  return (
    <Container>
      <Content>
        {products.map(({ name, abv, image_url, description, id }) => (
          <ListProducts
            key={id}
            name={name}
            abv={abv}
            image_url={image_url}
            description={description}
          />
        ))}
      </Content>
    </Container>
  );
}

export default Showcase;
