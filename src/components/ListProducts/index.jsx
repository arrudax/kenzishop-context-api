import { Button } from "../Button /index.jsx";
import { Container } from "./style.js";

function ListProducts({ name, abv, image_url, description }) {
  return (
    <Container>
      <img src={image_url} alt={name} />
      <span> ABV: {abv}%</span>

      <p>{description}</p>

      <Button>Adicionar </Button>
    </Container>
  );
}

export default ListProducts;
