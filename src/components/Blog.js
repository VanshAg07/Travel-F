import React from "react";
import Nav from "./Nav";
import Blog1 from "../img/Blog1.png"; 
import img1 from "../img/dubai.jpg";
import img2 from "../img/Maldives.jpg";
import img3 from "../img/Europe.jpg";
import img4 from "../img/bali.jpg";
import img5 from '../img/HimachalPradesh.png';
import img6 from '../img/Uttarakhand.png';
import "./Blog.css";
import Footer from "../Footer";
import Crd from "./Card";
import { Link } from "react-router-dom";

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
        <Link to="/blogdetails/kedarnath">
          <Crd image={img1} title="Kedarnath" />
        </Link>
        <Link to="/blogdetails/Kashmir">
          <Crd image={img2} title="Kashmir" />
        </Link>
        <Link to="/blogdetails/ladakh">
          <Crd image={img3} title="Ladakh" />
        </Link>
        <Link to="/blogdetails/Himachalpradesh">
          <Crd image={img6} title="Himachalpradesh" />
        </Link>
        <Link to="/blogdetails/udaipur">
          <Crd image={img4} title="Udaipur" />
        </Link>
        <Link to="/blogdetails/kerala">
          <Crd image={img5} title="Kerala" />
        </Link>
        <Link to="/blogdetails/meghalaya">
          <Crd image={img6} title="Meghalaya" />
        </Link>
        <Link to="/blogdetails/Choptatungnath">
          <Crd image={img6} title="Choptatungnath" />
        </Link>

      </div>
      <Footer />
    </>
  );
};

export default Blog;

