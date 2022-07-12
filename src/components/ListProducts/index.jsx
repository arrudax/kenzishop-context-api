import { Container } from "./style.js";

function ListProducts({ name, abv, image_url, description, id }) {
  return (
    <Container>
      <h4>{name}</h4>
      <img src={image_url} alt={name} />

      <span> ABV: {abv}%</span>

      <p>{description}</p>
    </Container>
  );
}

export default ListProducts;
