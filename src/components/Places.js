import React from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "./Nav";
import "./Places.css"; // Ensure this file has the styles defined above
import bg from "../img/india.jpg";
import Card from "./3dCard";
import Whyuss from "./Whyuss";
import Review from "./Review";
import Hiking from "./Hiking";
import Visit from "./Visit";
import Food from "./Food";
import Shop from "./Shop";
import Dropnav from "../components/Dropnav";
import cont from "../img/cont-button.json";
import Lottie from "lottie-react";
import MainFooter from "./Footer/MainFooter";
import Mainreview from "./Mainreview";

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
          <div>
            <h1>{name} Tour Packages</h1>
            <p>The Perfect Blend of Serenity and Adventure</p>
          </div>
        </div>
        <Mainreview />
        <div>
          <h1 className="all-packages-heading">Featured Packages</h1>
          <div>
            <Link to={`/Packagedetails/${name}`}>
              <Card />
            </Link>
          </div>
        </div>
        <div className="hiking-container p-4 md:p-6 lg:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed">
            Best activities to do in {name} for a thrilling adventure
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            {name} is an excellent place to create cherished memories with loved
            ones through its various breathtaking activities like trekking,
            river canyoning, hiking, and more. You can also enjoy the
            breathtaking views of nature here.
          </p>

          <Hiking />
        </div>

        <div className=" hiking-container p-4 md:p-6 lg:p-8 Visiting-container">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed">
            Beautiful Places To Visit In {name} For A Blissful Vacay
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            Whether you're looking for an adrenaline rush or simply want to
            enjoy natural scenery, {name} is the perfect place for you. It
            should be at the top of your list for your next getaway.
          </p>
          <Visit />
        </div>
        <div className="food-container p-4 md:p-6 lg:p-8 Visiting-container">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed">
            Places to Enjoy The Rich Flavors Of {name}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            {name}, known as the abode of clouds, offers a diverse culinary
            experience with a range of traditional and modern food options. From
            local delicacies to global cuisines, the state has plenty of places
            to eat and explore.
          </p>
          <Food />
        </div>
        <div className="shop-container p-4 md:p-6 lg:p-8 Visiting-container ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed">
            Best Places to shop in {name}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            {name}, a northeastern state of India, offers a unique shopping
            experience with its vibrant local markets and handicrafts. Visitors
            can explore the bustling bazaars for traditional clothes,
            accessories, bamboo crafts, and food items.
          </p>
          <Shop />
        </div>

        <div className="travel-guidelines1-container p-4 md:p-6 lg:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed">
            {name} Travel Guidelines
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4">
            The following are the travel guidelines for {name} as announced by
            the {name} Government latest on 04-08-2021.
          </p>
          <ol className="list-decimal ml-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed space-y-2">
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
        <h1 className="pt-14 md:pt-20 text-2xl md:text-4xl font-bold text-center text-gray-800">
          Contact Form
        </h1>
        <div className="min-h-screen flex items-center justify-center px-4">
          {/* Outer div with 80% width */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-full max-w-4xl lg:w-4/5">
            {/* Inner form container with 60% width */}
            <div className="w-full md:w-3/5 mx-auto">
              <h2 className="text-cyan-500 text-lg font-semibold mb-1">
                Travello10 Calling?
              </h2>
              <h3 className="text-lg font-semibold mb-6">
                Allow Us to Call You Back!
              </h3>
              <form>
                {/* Name */}
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="name"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="e.g. John Smith"
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>

                {/* Phone Number */}
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="phone"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Enter your 10 digit number"
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="email"
                  >
                    Email ID *
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Any Message"
                    className="w-full border border-gray-300 p-2 rounded-md"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 rounded-md transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
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
