import styled from "styled-components";
import imagem from "../../assets/background.png";
import image from "../../assets/GatoFofo.png";


export const BodyHome = styled.body`
  background-image: url(${imagem});
  width: 2077px;
  height: 1261px;
  flex-shrink: 0;

  h1 {
    display: flex;
    justify-items: center;
    color: #FEFAE0;
font-family: Amaranth;
font-size: 96px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 144px */
letter-spacing: -1.056px;

  }
`;

export const BodyPage = styled.div `

`;

export const Swiper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;

`;

export const SwiperSlide = styled.div`
  width: 60px;
  height: 60px;
  margin: 3px;
  cursor: pointer;
`;

export const SlideContainer = styled.div`
    display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  height: 250px;
  margin: 5px;
  border-radius: 82px;
  background: #D9D9D9;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  background-image: url(${image});
  background-size: cover; /* Ajuste o tamanho da imagem para cobrir todo o componente */
  background-position: center;
 
`;

export const ImageStyled = styled.div `
  max-width: 100%;
  max-height: 100%;
  background-image: url(${image});
  background-size: cover; /* Ajuste o tamanho da imagem para cobrir todo o componente */
  background-position: center; /* Centralize a imagem no componente */
`;





