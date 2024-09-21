import React from "react";
import "./Disclaimer.css"; // You may not need this if you're using Tailwind CSS for all styling
import Nav from "./Nav";
import FooterSection from "./Footersection";
import Footer from "../Footer";

const Disclaimer = () => {
  return (
    <>
      <Nav />
      <div className="disclaimer-container px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">DISCLAIMER</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            WanderOn provides the www.wanderon.in Web site as a service to the public and Web site owners.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            WanderOn is not responsible for, and expressly disclaims all liability for, damages of any kind arising out of use, reference to, or reliance on any information contained within the site. While the information contained within the site is periodically updated, no guarantee is given that the information provided in this Website is correct, complete, and up-to-date.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Although the WanderOn Website may include links providing direct access to other Internet resources, including Web sites, WanderOn is not responsible for the accuracy or content of information contained in these sites.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Links from wanderon.in to third-party sites do not constitute an endorsement by WanderOn of the parties or their products and services. The appearance on the Web site of advertisements and product or service information does not constitute an endorsement by WanderOn.
          </p>
        </div>
      </div>
      <FooterSection />
      <Footer />
    </>
  );
};

export default Disclaimer;
