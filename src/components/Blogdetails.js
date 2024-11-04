import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MainFooter from "./Footer/MainFooter";

const BlogDetails = () => {
  const { blogTitle } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBlog = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/blog/blogs/${blogTitle}`
      );
      setBlog(response.data.blog);
    } catch (error) {
      console.error("Error fetching blog:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [blogTitle]);

  // Display loading indicator or blog content
  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  // Handle case where blog data is not found
  if (!blog) {
    return <div className="text-center p-4">Blog not found</div>;
  }

  return (
    <div className="flex flex-col items-center w-full">
      {/* Background and Card Images */}
      <div className="relative w-full h-[70vh] mb-8">
        <img
          src={blog.blogBackgroundImage} // Fixed typo
          alt={blog.blogTitle}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-black font-semibold py-2 px-4 rounded-full">
          {blog.blogName}
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white text-2xl font-semibold py-3 px-8 rounded-lg">
          {blog.blogTitle}
        </div>
      </div>
      {/* Blog Description */}
      <div className="w-[70%] bg-yellow-100 p-8 rounded-lg shadow-lg mb-10">
        <p className="text-gray-800 text-lg font-medium leading-relaxed">
          {blog.blogDescription}
        </p>
      </div>
      {/* Blog Headings and Points */}
      {blog.blogHeading.map((heading) => (
        <div key={heading._id} className="w-[70%] mb-12">
          <h2 className="text-3xl font-bold text-yellow-600 mb-4">
            {heading.headingTitle}
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            {heading.headingDescription}
          </p>
          {heading.points.map((point) => (
            <div
              key={point._id}
              className="mb-4 pl-4 border-l-4 border-yellow-400"
            >
              <h3 className="text-2xl font-semibold text-gray-800">
                {point.pointTitle}
              </h3>
              <p className="text-gray-600">{point.pointDescription}</p>
            </div>
          ))}
        </div>
      ))}
      {/* Blog Images Gallery */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        {blog.blogImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Blog image ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
          />
        ))}
      </div>
      <div className="w-full">
      <MainFooter />
      </div>
    </div>
  );
};

export default BlogDetails;