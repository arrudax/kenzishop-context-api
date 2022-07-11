import styled from "styled-components";

export const Container = styled.li`
  list-style: none;

  max-width: 300px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-width: 80px;
    width: 100%;
  }
  p {
    max-width: 250px;
    width: 100%;
  }
`;
