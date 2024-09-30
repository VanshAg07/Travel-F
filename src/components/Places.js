import React from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "./Nav";
import Footer from "../Footer";
import "./Places.css"; // Ensure this file has the styles defined above
import bg from "../img/india.jpg";
import Card from "./3dCard";
import Whyuss from "./Whyuss";
import Review from "./Review";
import FooterSection from "./Footersection";
import review from "../img/reviews.png";
import Hiking from "./Hiking";
import Visit from "./Visit";
import Food from "./Food";
import Shop from "./Shop";
import Form from "./Form";
import Dropnav from "../components/Dropnav";
import cont from "../img/cont-button.json";
import Lottie from "lottie-react";
import MainFooter from "./Footer/MainFooter";

const Place = () => {
  const { name } = useParams();
  console.log(name);
  const whatsappMessage = "Hello, I need assistance with my issue.";
  return (
    <>
      <Nav />
      <Dropnav />
      <div className="place-container">
        <div className="place-hero">
          <img className="pl-img" src={bg} alt="Background" />
          <img src={review} className="review-img" alt="Review" />
          <div>
            <h1>{name} Tour Packages</h1>
            <p>The Perfect Blend of Serenity and Adventure</p>
          </div>
        </div>
        <div>
          <h1 className="all-packages-heading">Featured Packages</h1>
          <div>
            <Link to={`/Packagedetails/${name}`}>
              <Card />
            </Link>
          </div>
        </div>
        <div className="hiking-container">
          <h1>Best activities to do in {name} for a thrilling adventure</h1>
          <p>
            {name} is an excellent place to create cherished memories with loved
            ones through its various breathtaking activities like trekking,
            river canyoning, hiking, and more. You can also enjoy the
            breathtaking views of nature here.
          </p>
          <Hiking />
        </div>
        <div className="Visiting-container">
          <h1>Beautiful Places To Visit In {name} For A Blissful Vacay</h1>
          <p>
            Whether you're looking for an adrenaline rush or simply want to
            enjoy natural scenery, {name} is the perfect place for you. It
            should be at the top of your list for your next getaway.
          </p>
          <Visit />
        </div>
        <div className="food-container">
          <h1>Places to Enjoy The Rich Flavors Of {name}</h1>
          <p>
            {name}, known as the abode of clouds, offers a diverse culinary
            experience with a range of traditional and modern food options. From
            local delicacies to global cuisines, the state has plenty of places
            to eat and explore.
          </p>
          <Food />
        </div>
        <div className="shop-container">
          <h1>Best Places to shop in {name}</h1>
          <p>
            {name}, a northeastern state of India, offers a unique shopping
            experience with its vibrant local markets and handicrafts. Visitors
            can explore the bustling bazaars for traditional clothes,
            accessories, bamboo crafts, and food items.
          </p>
          <Shop />
        </div>

        <div className="travel-guidelines1-container">
          <h1 className="guidelines1-heading">{name} Travel Guidelines</h1>
          <p className="guidelines1-description">
            The following are the travel guidelines for {name} as announced by
            the {name} Government latest on 04-08-2021.
          </p>
          <ol className="guidelines1-list">
            <li>
              All tourists entering the territory of {name} need to have Aarogya
              Setu on their phones.
            </li>
            <li>
              Social Distancing should be maintained at all times in public
              places.
            </li>
            <li>
              Travellers need to have face masks on when travelling in public
              places.
            </li>
            <li>
              Washing of hands and the use of sanitizers is highly recommended
              by the government.
            </li>
          </ol>
        </div>
        <div className="why">
          <Whyuss />
        </div>
        <Review />
        <Form />
      </div>
      <MainFooter />
      <div className="fixed-button-1">
        <a
          href={`https://wa.me/918287804197?text=${encodeURIComponent(
            whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Lottie loop={true} animationData={cont} />
        </a>
      </div>
    </>
  );
};

export default Place;
