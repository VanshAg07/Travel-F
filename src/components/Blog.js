import React from "react";
import Nav from "./Nav";
import Blog1 from "../img/Blog1.png";
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
  },
  {
    image: img2,
    title: "kashmir",
  },
  {
    image: img3,
    title: "ladakh",
  },
  {
    image: img4,
    title: "udaipur",
  },
  {
    image: img5,
    title: "kerala",
  },
  {
    image: img6,
    title: "meghalaya",
  },
  {
    image: img6,
    title: "choptatungnath",
  },
  {
    image: img6,
    title: "himachalpradesh",
  },
];

const Blog = () => {
  return (
    <>
      <Nav />
      <Dropnav />
      <div className="blog-container">
        <img className="blog-img" src={Blog1} alt="Blog Cover" />
        <h1 className=" blog-h1 blog-heading-bottom">
          From Beaches to Mountains: What Travel Communities Are Excited About!
        </h1>
      </div>
      <div>
        <h2 className=" blog-h2 pt-2 text-center text-2xl font-bold">Blog</h2>
      </div>
      <div className="card-grid">
        {Data.map((item, index) => (
          <Link key={index} to={`/blogdetails/${item.title}`}>
            <div className="bg-blue-100 p-4 flex flex-col items-center justify-between rounded-lg shadow-md transition-transform transform hover:translate-y-[-10px]">
              <img
                src={item.image}
                alt="Card"
                className="object-cover w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-md"
              />
              <div className="w-full text-center">
                <h3 className=" blog-h3 py-4 capitalize font-bold text-xl md:text-2xl">
                  {item.title}
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
