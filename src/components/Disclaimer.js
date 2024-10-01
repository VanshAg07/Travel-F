import React from "react";
import "./Disclaimer.css"; // You may not need this if you're using Tailwind CSS for all styling
import Nav from "./Nav";
import FooterSection from "./Footersection";
import Footer from "../Footer";
import Dropnav from "../components/Dropnav"

const Disclaimer = () => {
  return (
    <>
      <Nav />
      <Dropnav />
      <div className="disclaimer-container  px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">DISCLAIMER</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
          The information provided on www.travello10.com is for general informational purposes only
Welcome to www.travello10.com The terms and conditions of your use of this Site are described below.
These terms and conditions may be updated or changed without any notice to you.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
          The website, www.travello10.com is developed, owned and operated by TravelloTen India Pvt.Ltd having 
Its Registered Office at 3rd Floor Plot, Kakarola Housing Complex, 103, Kakrola Rd, opposite DDA park, 
Raju Enclave, Sector 15 Dwarka, Dwarka, Delhi, 110078. The use and viewing of this site and the content 
therein is governed by the Terms of Use. When you use this site you acknowledge that you have read the 
Terms of Use and that you agree to be bound by same, which may be modified from time to time.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
          The content on TravelloTen India Pvt.Ltd is intended for informational purposes only. While we strive for accuracy, 
we cannot guarantee that all information is complete, current, or error-free, Prices, schedules, and availability 
of travel services may change without notice, and we recommend verifying all details directly with TravelloTen 
service providers.
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
