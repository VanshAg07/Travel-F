import React from "react";
import icon1 from "../img/1why.png";
import icon2 from "../img/2why.png";
import icon3 from "../img/3why.png";
import icon4 from "../img/4why.png";

const WhyTravello = () => {
  const reasons = [
    {
      title: "No Unnecessary Add-ons",
      description:
        "100% In-House Expertise on Every Adventure! No Outsiders, Just Quality!",
      image: icon1,
    },
    {
      title: "Clarity & Trust",
      description:
        "Live Monitoring of All Trips—Stay Informed with Up-to-Date Routes and Weather Conditions!",
      image: icon2,
    },
    {
      title: "Custom Co-Travelers Selection",
      description:
        "Bringing the Right People Together with Precision Filtering—For the Perfect Trip!",
      image: icon3,
      marginTop: "-25px",
    },
    {
      title: "Your Stress-Free Travel Solution",
      description:
        "Luxury Stays, Trained Drivers, Friendly Crew, and Experienced Trip Leaders—Crafting Unforgettable Memories!",
      image: icon4,
      marginTop: "-30px",
    },
  ];

  return (
    <div className="why-travello-container py-10 px-4 w-[90vw] mx-auto">
      {" "}
      {/* Set width to 90vw and center */}
      <h2 className="text-center md:text-2xl text-xl lg:text-4xl font-bold md:mb-8 mb-4">
        Why Travello10?
      </h2>
      <div className="flex justify-between flex-wrap lg:flex-nowrap gap-4">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="w-full lg:w-1/4 h-[60vh] bg-white p-6 rounded-lg shadow-lg shadow-black flex flex-col justify-between"
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
