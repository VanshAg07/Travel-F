import React from "react";
import Nav from "./Nav";
import Blog1 from "../img/Blog1.png";
import img1 from "../img/kedarnath.png";
import img2 from "../img/Maldives.jpg";
import img3 from "../img/Europe.jpg";
import img4 from "../img/bali.jpg";
import img5 from "../img/HimachalPradesh.png";
import img6 from "../img/Uttarakhand.png";
import "./Blog.css";
import Footer from "../Footer";
import Crd from "./Card";
import { Link } from "react-router-dom";

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
  }
];

const Blog = () => {
  return (
    <>
      <Nav />
      <div className="blog-container">
        <img className="blog-img" src={Blog1} alt="Blog Cover" />

        <h1 className="blog-heading-bottom">
          From Beaches to Mountains: What Travel Communities Are Excited About!
        </h1>
      </div>
      <div>
        <h2 className="pt-2 text-center">Blog</h2>
      </div>
      <div className="card-grid">
        {Data.map((item, index) => (
          <Link key={index} to={`/blogdetails/${item.title}`}>
            <div className="bg-blue-100 p-4 flex flex-col items-center justify-between ">
              <img src={item.image} alt="Card" className=" object-fill w-full h-[300px] rounded-md " />
              <div className="">
                <h3 className="py-4 capitalize font-bold text-xl">{item.title}</h3>
              </div>
            </div>
          </Link>
        ))}

      </div>
      <Footer />
    </>
  );
};

export default Blog;
