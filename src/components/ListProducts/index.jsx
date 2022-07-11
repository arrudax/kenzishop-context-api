import { Container } from "./style.js";

function ListProducts({ name, abv, image_url, description }) {
  return (
    <Container>
      <img src={image_url} alt={name} />
      <span> ABV: {abv}%</span>

      <p>{description}</p>
    </Container>
  );
}

export default ListProducts;
