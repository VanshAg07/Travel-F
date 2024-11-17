import React, { useEffect, useState } from "react";
import icon1 from "../img/1why.png";
import icon2 from "../img/2why.png";
import icon3 from "../img/3why.png";
import icon4 from "../img/4why.png";

const WhyTravello = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const reasons = [
    {
      title: "No Unnecessary Add-ons",
      description:
        "100% In-House Expertise on Every Adventure! No Outsiders, Just Quality!",
      image: icon1,
      marginTop: isMobile ? "-20px" : "0px", // Apply custom margin only on small screens
    },
    {
      title: "Clarity & Trust",
      description:
        "Live Monitoring of All Trips—Stay Informed with Up-to-Date Routes and Weather Conditions!",
      image: icon2,
      marginTop: isMobile ? "-20px" : "0px", // Apply custom margin only on small screens
    },
    {
      title: "Custom Co-Travelers Selection",
      description:
        "Connecting You with the Perfect Travel Companions—Handpicked for Compatibility, Shared Interest.",
      image: icon3,
      marginTop: "-50px",
    },
    {
      title: "Your Stress-Free Travel Solution",
      description:
        "Luxury Stays, Trained Drivers, Friendly Crew, and Experienced Trip Leaders—Crafting Unforgettable Memories!",
      image: icon4,
      marginTop: "-40px",
    },
  ];

  return (
    <div className="why-travello-container px-4 w-[90vw] mx-auto relative">
      <h2 className="text-center md:text-2xl text-xl lg:text-4xl font-bold md:mb-8 mb-4">
        Why Travello10?
      </h2>
      <div className="flex justify-between pb-10 flex-wrap lg:flex-nowrap gap-4">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="w-full lg:w-1/4 h-[48vh] md:h-[55vh] bg-white p-6 rounded-lg shadow-lg shadow-black flex flex-col justify-between"
          >
            <div>
              <h3 className="md:text-2xl text-lg text-[#03346e] font-semibold mb-2">
                {reason.title}
              </h3>
              <p className="md:text-base text-sm">{reason.description}</p>
            </div>
            <img
              src={reason.image}
              alt={reason.title}
              className="w-full whyuss-img h-auto object-contain mt-auto"
              style={{ marginTop: reason.marginTop }} // Apply custom margin
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyTravello;
