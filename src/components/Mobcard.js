import React from "react";
import { product_card_1 } from "./Product_data"; // Use named imports

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
export default function Card() {
  const cardData = product_card_1.map((item) => (
    <SwiperSlide key={item.id}>
      <div className="product-card">
        {item.label ? <div className="dealTag">{item.label}</div> : ""}
        <div className="product_card_info">
          <div
            className="product_image"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <a href={item.url} title={item.title}></a>
          </div>
          <div className="product_wrapper">
            <a href={item.url}>
              <div className="product_name">{item.title}</div>
            </a>
            <div className="new-price">
              {item.currency} {item.offerPrice}
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <div className="">
      <div className="flex justify-between items-center mb-4 h-[10vh]">
        <div className="flex ml-4 flex-col">
          <h1 className="text-lg font-bold">Indian Packages</h1>
          <div className="w-32 border-b-4 border-blue-400 mt-1" />
        </div>
        <a
          href="/all-packages"
          className="text-red-500 text-sm mr-4"
        >
          See All
        </a>
      </div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {cardData}
      </Swiper>
    </div>
  );
}