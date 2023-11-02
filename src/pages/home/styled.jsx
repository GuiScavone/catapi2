import styled from "styled-components";
import imagem from "../../assets/background.png";
import image from "../../assets/GatoFofo.png";
import line from "../../assets/line.png";
import cat1 from "../../assets/GatoFofo.png";
import cat2 from "../../assets/gatopreto.png";

export const BodyHome = styled.body`
  background-image: url(${imagem});
   background-repeat: no-repeat;
   left: -229px;
   top:-49px;
  width: 1440px;
   height: 1641px;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
`;

export const H1Styled = styled.h1`
  display: flex;
  justify-items: center;
  color: #fefae0;
  font-family: Amaranth;
  font-size: 96px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -1.056px;

  &::first-of-type {
    font-weight: 700;
    color: #bc6c25;
  }
`;

export const H2Styled = styled.h2`
   color: #fefae0;
   font-family: Amaranth;
   font-size: 96px;
   font-style: normal;
   font-weight: 60;
   line-height: 144px;
   letter-spacing: -1.056px;
   position: absolute;
   left: 441px;
   top: 650px;
 `;

export const H3Styled = styled.h3`
color: #fefae0;
font-family: Amaranth;
font-size: 32px;
font-style: normal;
font-weight: 60;
line-height: 144px;
letter-spacing: -1.056px;
position: absolute;
left: 240px;
top: 815px;
`;

export const H4Styled = styled.h4`
color: #fefae0;
font-family: Amaranth;
font-size: 32px;
font-style: normal;
font-weight: 60;
line-height: 144px;
letter-spacing: -1.056px;
position: absolute;
left: 625px;
top: 815px;
`;

export const H5Styled = styled.h5`
color: #fefae0;
font-family: Amaranth;
font-size: 32px;
font-style: normal;
font-weight: 60;
line-height: 144px;
letter-spacing: -1.056px;
position: absolute;
left: 975px;
top: 815px;
`;

export const H6Styled = styled.h6`
   color: #bc6c25;
   font-family: Amaranth;
   font-size: 96px;
   font-style: normal;
   font-weight: 60;
   line-height: 144px;
   letter-spacing: -1.056px;
   position: absolute;
   left: 441px;
   top: 1150px;
 `;

export const BodyPage = styled.div``;

export const Swiper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;
`;

export const SwiperSlide = styled.div`
  /* width: 60px;
  height: 60px;
  margin: 3px;
  cursor: pointer; */
`;

export const SlideContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  margin: 5px;
  border-radius: 82px;
  background: #d9d9d9;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  background-image: url(${image});
  background-size: cover; /* Ajuste o tamanho da imagem para cobrir todo o componente */
  background-position: center;
`;

export const ImageStyled = styled.div`
  max-width: 100%;
  max-height: 100%;
  background-image: url(${image});
  background-size: cover; /* Ajuste o tamanho da imagem para cobrir todo o componente */
  background-position: center; /* Centralize a imagem no componente */
`;

export const Line = styled.div `
width: 794px;
  height: 18px;
  background-image: url(${line});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  left: 50%;
  top: calc(50% + 500px); /* Ajuste o valor 10px para baixo */
  transform: translate(-50%, -50%);
`;

export const CatImage = styled.div `
width: 550px;
  height: 367px;
  background-image: url(${cat1}); // Use a imagem importada aqui
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  left: 50%;
  top: calc(50% + 200px); /* Ajuste o valor 10px para baixo */
  transform: translate(25%, -50%);
`;

export const CatImage2 = styled.div `
width: 550px;
  height: 367px;
  background-image: url(${cat2}); // Use a imagem importada aqui
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  left: 0%;
  top: calc(500px + 65%);
  transform: translate(-50%, 25%);
  transform: scaleX(-1);


`;