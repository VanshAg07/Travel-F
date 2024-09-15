import React from "react";
import product_card from "./Product_data";

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import {EffectCards} from "swiper/modules";

export default function Card(){
    let cardData = product_card.map((item)=>
        <SwiperSlide key={item.id}>
            <div className="product-card">
                {item.label? <div className="dealTag">{item.label}</div>:""}
                <div className="product_card_info">
                   <div className="product_image">
                    <a href={item.url} title ={item.title}>
                    <img src={item.image} alt={item.title}/>
                    </a>
                   </div> 
                   <div className="product_wrapper">
                    <a href={item.url}>
                    <div className="product_name">{item.title}</div>
                    </a>
                    <div className="new-price">
                        {item.currency} {item.offerPrice}
                    </div>
                    <div className="offer_label">
                        <span className="label_icon">
                            <i className="fa fa-shopping-cart"></i>
                            <i className="fa fa-heart-o"></i>
                        </span>
                        {
                            item.rating===5 ?
                            <div className="ratings">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            :''
                        }
                        {
                            item.rating===4 ?
                            <div className="ratings">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            :''
                        }
                        {
                            item.rating===3 ?
                            <div className="ratings">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            :''
                        }

                        {
                            item.rating===2 ?
                            <div className="ratings">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            :''
                        }
                        {
                            item.rating===1 ?
                            <div className="ratings">
                                <i className="fa fa-star"></i>
                            </div>
                            :''
                        }
                    </div>
                   </div>
                </div>
            </div>
        </SwiperSlide>
     );
    return (
        <div className="card_slider_container">
            <p className="list_title">Product Card Slider</p>
            <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            >
                {cardData}
            </Swiper>
        </div>
    )
}