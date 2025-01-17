import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FooterSection = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const fetchBlogs = () => {
    fetch(`https://api.travello10.com/api/blog/blog-title`)
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data.blogs);
      })
      .catch((error) => console.error("Error fetching blog titles:", error));
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const [packages, setPackages] = useState([]);
  useEffect(() => {
    const fetchAllPackages = async () => {
      try {
        const response = await fetch(
          "https://api.travello10.com/api/weekends/weekend-choosen-display"
        );
        const data = await response.json();
        setPackages(
          Array.isArray(data.chosenPackages) ? data.chosenPackages : []
        );
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };
    fetchAllPackages();
  }, []);

  const [backpacking, setBackpacking] = useState([]);

  useEffect(() => {
    const fetchBackPacking = async () => {
      try {
        const response = await fetch(
          "https://api.travello10.com/api/weekends/backpacking"
        );
        const data = await response.json();
        setBackpacking(data.data);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };
    fetchBackPacking();
  }, []);
  const handlePackageClick = (stateName, tripName) => {
    const sanitizedTripName = tripName.replace(/\//g, "-"); // Replace slashes with hyphens
    navigate(`/trip/${encodeURIComponent(sanitizedTripName)}/${stateName}`);
  };
  return (
    <div className="bg-[#03346E] text-white w-full">
      <div className="py-12 px-4 md:px-16 flex justify-center items-center">
        {/* Main container with 80vw width */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[80vw] max-w-screen-xl">
          {/* About Us Section with Right Border */}
          <div className="text-center md:text-left md:border-r md:border-white md:pr-8">
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mb-4">
              About Us
            </h2>
            <p className="leading-relaxed text-[#fff] text-sm md:text-base lg:text-lg">
              TravelloTen India Private Limited specializes in Travel &
              Transport services, exclusively for the academic sector. We
              arrange educational & fun tours for students all over India,
              providing insights on history, geography, and culture. Our
              services extend to school tours, college tours, corporate tours,
              and family trips across India. With years of experience, we ensure
              quality, authenticity, and exceptional service. We believe in
              “Service with Quality & Smile.”
            </p>
          </div>
          {/* Weekend Trips Section with Right Border */}
          <div className="text-center md:text-left md:border-r md:border-white md:px-8">
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mb-4">
              Weekend Trips
            </h2>
            <ul className="text-[#fff] uppercase space-y-2 text-sm md:text-base lg:text-lg">
              {packages.map((pkg, index) => (
                <li key={index}>
                  <button
                    onClick={() =>
                      handlePackageClick(pkg.tripLocation, pkg.tripName)
                    }
                    className="hover:text-[#fffe9] uppercase transition-all ease-in-out duration-200"
                  >
                    {pkg.tripName}
                  </button>
                </li>
              ))}
            </ul>
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mt-8 mb-4">
              Backpacking Trips
            </h2>
            <ul className="text-[#fff] space-y-2 text-sm md:text-base lg:text-lg">
              {backpacking.map((trip, index) => (
                <li key={index}>
                  <button
                    onClick={() =>
                      handlePackageClick(
                        trip.stateName,
                        trip.tripDetails.tripName
                      )
                    }
                    className="hover:text-[#fffe9] transition-all ease-in-out duration-200"
                  >
                    {trip.tripDetails.tripName}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Blogs & Quick Links Section */}
          <div className="text-center md:text-left md:pl-8">
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mb-4">
              Blogs
            </h2>
            <ul className="text-[#fff] space-y-2 text-sm md:text-base lg:text-lg ">
              {blogs.map((blog, index) => (
                <li key={index} onClick={() => navigate(`/blogdetails/${blog.title}`)} className="cursor-pointer">
                  {blog.name}
                </li>
              ))}
            </ul>
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mt-8 mb-4">
              Quick Links
            </h2>
            <ul className="text-[#fff] space-y-2 text-sm md:text-base lg:text-lg">
              <li>
                <Link
                  to="/Privcy"
                  className="hover:text-[#fffe9] transition-all ease-in-out duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/Cancellation"
                  className="hover:text-[#fffe9] transition-all ease-in-out duration-200"
                >
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/Termcondition"
                  className="hover:text-[#fffe9] transition-all ease-in-out duration-200"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/Disclaimer"
                  className="hover:text-[#fffe9] transition-all ease-in-out duration-200"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  to="/Aboutus"
                  className="hover:text-[#fffe9] transition-all ease-in-out duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/Payments"
                  className="hover:text-[#fffe9] transition-all ease-in-out duration-200"
                >
                  Payments
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
