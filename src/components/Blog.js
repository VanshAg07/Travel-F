import React from "react";
import Nav from "./Nav";
import Blog1 from "../img/india.jpg";
import img1 from "../img/kedarnath.png";
import img2 from "../img/Maldives.jpg";
import img3 from "../img/Europe.jpg";
import img4 from "../img/bali.jpg";
import img5 from "../img/HimachalPradesh.png";
import img6 from "../img/Uttarakhand.png";
import { Link } from "react-router-dom";
import Dropnav from "../components/Dropnav";
import MainFooter from "./Footer/MainFooter";
import "./Blog.css";

const Data = [
  {
    image: img1,
    title: "kedarnath",
    description: "Beautiful Places to Visit in Kedarnath",
  },
  {
    image: img2,
    title: "kashmir",
    description: "Beautiful Places to Visit in Kashmir",
  },
  {
    image: img3,
    title: "ladakh",
    description: "Beautiful Places to Visit in Ladakh",
  },
  {
    image: img4,
    title: "udaipur",
    description: "Beautiful Places to Visit in Udaipur",
  },
  {
    image: img5,
    title: "kerala",
    description: "Beautiful Places to Visit in Kerala",
  },
  {
    image: img6,
    title: "meghalaya",
    description: "Beautiful Places to Visit in Meghalaya",
  },
  {
    image: img6,
    title: "choptatungnath",
    description: "Beautiful Places to Visit in Choptatungnath",
  },
  {
    image: img6,
    title: "himachalpradesh",
    description: "Beautiful Places to Visit in HimachalPradesh",
  },
];

const Blog = () => {
  return (
    <>
      <Nav />
      <Dropnav />
      <div className="blog-container">
        <div className="relative w-full h-[75vh]">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={Blog1}
            alt="Blog Cover"
          />
          {/* Content on the image */}
          <div className="relative z-10 flex flex-col justify-center items-start h-full p-4 sm:p-8">
          <h1 className="text-3xl sm:text-5xl text-white font-bold mb-4">
          Journey Through Stories
            </h1>
            <div className="bg-[yellow] p-3">
              <p className="text-lg sm:text-xl text-black font-semibold">
              Explore Our Latest Travel Blogs
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center pb-7 pt-7 text-2xl lg:text-3xl mb-5 text-gray-800 font-bold">
          Blogs
        </h2>
      </div>
      <div className="card-grid">
        {Data.map((item, index) => (
          <Link key={index} to={`/blogdetails/${item.title}`}>
            <div className="bg-white p-1 flex flex-col border-black border-2 items-center justify-between rounded-lg shadow-black shadow-lg transition-transform transform hover:translate-y-[-10px]">
              <img
                src={item.image}
                alt="Card"
                className="object-cover w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-md"
              />
              <div className="w-full text-center">
                <h3 className=" blog-h3 py-4 capitalize font-medium text-lg md:text-xl">
                  {item.description}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <MainFooter />
    </>
  );
};

export default Blog;
