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
import Mainreview from "../components/Mainreview.js";
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
      <div className="hero-section-left-1">
        <img className="hero-img" src={Blog1} alt="International" />
        {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0"></div>
        <div className="relative flex flex-col items-center">
  <div className="relative w-full flex items-start justify-center">
    <h1 className="ml-6 text-center text-white font-bold text-2xl xs:text-2xl sm:text3xl lg:text-4xl leading-tight mt-4 sm:mt-8">
      Journey Through Stories
    </h1>
  </div>
  
  <h1 className="inline-block text-center text-black bg-[yellow] px-4 py-2 mt-4 text-xl xs:text-xl sm:text-2xl lg:text-3xl">
   Explore Our Latest Blogs
  </h1>
</div>
      </div>
      <div className="mt-[100px] md:mt-0">
  <Mainreview />
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
