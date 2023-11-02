import React from "react";
import {
  BodyHome,
  BodyPage,
  SlideContainer,
  ImageStyled,
  H1Styled,
  H2Styled,
  H3Styled,
  H4Styled,
  H5Styled,
  H6Styled,
  Line,
  CatImage,
  CatImage2,
 
} from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import image from "../../assets/GatoFofo.png";
import line from "../../assets/line.png";

const Home = () => {
  return (
    <BodyPage>
      <BodyHome>
        <H1Styled>Adopt. Don't Shop</H1Styled>
        <CatImage />
        <CatImage2 />
        <H2Styled>How its works</H2Styled>
        <H3Styled>Find your Cat</H3Styled>
        <H4Styled>Know Your Cat</H4Styled>
        <H5Styled>Take Your Pet Home</H5Styled>
        <Line src={line} alt="Linha de marcação" />
        <H6Styled>Meet our cats</H6Styled>
      </BodyHome>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SlideContainer>
            <ImageStyled src={image} alt="Gato Fofo" />
          </SlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContainer></SlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContainer></SlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContainer></SlideContainer>
        </SwiperSlide>
      </Swiper>
    </BodyPage>
  );
};

export default Home;
