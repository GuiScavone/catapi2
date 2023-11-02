import React from "react";
import { BodyHome, BodyPage, SlideContainer, ImageStyled } from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import image from "../../assets/GatoFofo.png";

const Home = () => {
  return (
    <BodyPage>
      <BodyHome>
        <h1>Adopt.    Don't Shop</h1>
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
