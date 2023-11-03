import styled from "styled-components";
import imagem from "../../assets/background.png";

export const BodyHome = styled.body`
  background-image: url(${imagem});
  width: 100vw;
  height: 100vw;
  flex-shrink: 0;
  background-attachment: fixed;
`;
