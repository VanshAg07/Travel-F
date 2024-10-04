import React from "react";
import { product_card_1, product_card_2 } from "./Product_data"; // Use named imports

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

export default function Card() {
    const cardData = product_card_2.map((item) => (
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
        <div className="card_slider_container">
            <p className="list_title">Product Card Slider</p>
            <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper">
                {cardData}
            </Swiper>
        </div>
    );
}
