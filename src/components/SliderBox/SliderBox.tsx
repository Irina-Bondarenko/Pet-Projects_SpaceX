// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { TourCard } from "../TourCard";

import { SLIDER_BOX_PRESET } from "./SliderBox.data";
import {
  StyledSwiperButtonNext,
  StyledSwiperButtonPrev,
  StyledSwiperButtonsContainer,
  StyledSwiperContainer,
} from "../../styled";
import { useRecoilValue } from "recoil";
import { toursState } from "../../state";
import { IIconBoxProps } from "./SliderBox.types";

export const SliderBox = ({
  preset = SLIDER_BOX_PRESET.INFO_CARD,
}: IIconBoxProps) => {
  const swiperRef: React.MutableRefObject<null> = useRef(null);
  const tours = useRecoilValue(toursState);

  return (
    <>
      <StyledSwiperContainer>
        <StyledSwiperButtonsContainer>
          <StyledSwiperButtonPrev className="swiper-button-prev" />
          <StyledSwiperButtonNext className="swiper-button-next" />
        </StyledSwiperButtonsContainer>
        <div className="slider-box__slider">
          <Swiper
            ref={swiperRef}
            pagination={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            style={{ minHeight: "850px" }}
            slidesPerView={3}
            spaceBetween={24}
            modules={[Navigation, Pagination]}
            className="swiper"
          >
            {tours?.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="item d-flex justify-content-center"
                  data-value={item.id}
                >
                  {preset === SLIDER_BOX_PRESET.INFO_CARD && (
                    <TourCard
                      className="background-white text-center pt64"
                      titleClassName="title-regular"
                      data={item}
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </StyledSwiperContainer>
    </>
  );
};
