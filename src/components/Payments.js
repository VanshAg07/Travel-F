import React from "react";
import Nav from "./Nav";
import icon1 from "../img/payment.svg";
import icon2 from "../img/sbi.svg";
import Dropnav from "../components/Dropnav";
import cont from "../img/cont-button.json";
import Lottie from "lottie-react";
import MainFooter from "./Footer/MainFooter";

const Payments = () => {
  const whatsappMessage = "Hello, I need assistance with my issue.";
  return (
    <>
      <Nav />
      <Dropnav />
      <div className="payment-section bg-gray-100 min-h-screen pt-28 py-10">
        {/* Main Container for Centering */}
        <div className="container mx-auto max-w-6xl px-4">
          {/* Header Section */}
          <div className="payment-section__header flex flex-col sm:flex-row items-center justify-center pt-10 mb-10">
            <img
              src={icon1}
              alt="Payment Icon"
              className="w-16 h-16 mb-4 sm:mb-0 sm:mr-4"
            />
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 text-center">
              Pay Us At
            </h1>
          </div>

          {/* Payment Methods Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Bank Transfer Section */}
            <div className="bg-white p-6 md:p-8 shadow-md rounded-lg">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
                Bank Transfer
              </h2>
              <div className="flex items-center mb-4">
                <img src={icon2} alt="SBI Logo" className="w-10 h-10 mr-3" />
                <p className="text-lg text-gray-700">
                  SBI - State Bank of India
                </p>
              </div>
              <div className="mb-2">
                <p className="text-gray-700">
                  <span className="font-semibold">Account Number:</span>{" "}
                  41539879323
                </p>
              </div>
              <div className="mb-2">
                <p className="text-gray-700">
                  <span className="font-semibold">Account Name:</span>{" "}
                  TRAVELLOTEN INDIA PVT.LTD
                </p>
              </div>
              <div className="mb-2">
                <p className="text-gray-700">
                  <span className="font-semibold">IFSC Code:</span> SBIN0061209
                </p>
              </div>
            </div>

            {/* UPI Payment Section */}
            <div className="bg-white p-6 md:p-8 shadow-md rounded-lg">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
                UPI Payment
              </h2>
              <div className="mb-4">
                <p className="text-gray-700">
                  <span className="font-semibold">
                    UPI (Google Pay/BHIM/PhonePe):
                  </span>{" "}
                  8130706886@ybl
                </p>
              </div>
              <div>
                <p className="text-gray-700">
                  <span className="font-semibold">Account Name:</span>{" "}
                  TRAVELLOTEN INDIA PVT.LTD
                </p>
              </div>
            </div>

            {/* Razorpay Section */}
            <div className="bg-white p-6 md:p-8 shadow-md rounded-lg">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
                Razorpay Link
              </h2>
              <p className="text-gray-700 text-sm md:text-base mb-4">
                <span className="font-semibold">Payment via Razorpay: </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#01afd1] underline break-words whitespace-normal"
                  href="https://razorpay.me/@travellotenindiaprivatelimite"
                >
                  https://razorpay.me/@travellotenindiaprivatelimite
                </a>
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                <span className="font-semibold">Note:</span> Payment gateway
                charges will be levied on using the above payment link.
              </p>
            </div>
          </div>

          {/* Payment Policy Section */}
          {/* <div className=" mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-lg mt-10">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Payment Policy
            </h1>
            <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
              For Short Haul Destination refer to Short Haul payment and
              cancellation policy and for Long Haul destination refer to Long
              Haul payment and cancellation policy.
              <br />
              <span className="font-semibold">Short Haul Packages:</span>{" "}
              Domestic Trips, Sri Lanka, Thailand, Singapore, Bali, Dubai, etc.
              <br />
              <span className="font-semibold">Long Haul Packages:</span> Europe,
              UK, Turkey, Egypt, Australia, etc.
            </p>

           Short Haul Table 
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
              SHORT HAUL PACKAGES
            </h2>
            <p className="text-lg font-semibold text-gray-700 mb-4">
              Payment Policy
            </p>
            <div className="overflow-x-auto mb-10">
              <table className="min-w-full border border-gray-200 text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2 md:p-4 border text-gray-700 text-sm md:text-base">
                      Number Of Days Prior To Tour Date
                    </th>
                    <th className="p-2 md:p-4 border text-gray-700 text-sm md:text-base">
                      Amount to be Paid
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700"></tbody>
              </table>
            </div>

           
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
              LONG HAUL PACKAGES
            </h2>
            <p className="text-lg font-semibold text-gray-700 mb-4">
              Payment Policy
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2 md:p-4 border text-gray-700 text-sm md:text-base">
                      Number Of Days Prior To Tour Date
                    </th>
                    <th className="p-2 md:p-4 border text-gray-700 text-sm md:text-base">
                      Amount to be Paid
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700"></tbody>
              </table>
            </div>
          </div> */}
        </div>
      </div>

      <MainFooter />

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-4 right-4">
        <a
          href={`https://wa.me/918287804197?text=${encodeURIComponent(
            whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Lottie
            loop={true}
            animationData={cont}
            className="w-12 h-12 sm:w-16 sm:h-16"
          />
        </a>
      </div>
    </>
  );
};

export default Payments;
