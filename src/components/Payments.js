import React from "react";
import Nav from "./Nav";
import icon1 from "../img/payment.svg";
import icon2 from "../img/sbi.svg";
import FooterSection from "./Footersection";
import Footer from "../Footer";
import Dropnav from "../components/Dropnav";
import cont from "../img/cont-button.json";
import Lottie from "lottie-react";

const Payments = () => {
  const whatsappMessage = "Hello, I need assistance with my issue.";
  return (
    <>
      <Nav />
      <Dropnav/>
      <div className="payment-section bg-gray-100 min-h-screen pt-28 py-10">
        {/* Header Section */}
        <div className="payment-section__header flex items-center pt-10 justify-center mb-10">
          <img src={icon1} alt="Payment Icon" className="w-12 h-12 mr-4" />
          <h1 className="text-4xl font-semibold text-gray-800">Pay Us At</h1>
        </div>

        {/* Bank Transfer Section */}
        <div className="max-w-lg mx-auto bg-white p-8 shadow-md rounded-lg mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Bank Transfer</h2>
          <div className="flex items-center mb-4">
            <img src={icon2} alt="SBI Logo" className="w-10 h-10 mr-3" />
            <p className="text-lg text-gray-700">SBI - State Bank of India</p>
          </div>
          <div className="mb-2">
            <p className="text-gray-700">
              <span className="font-semibold">Account Number:</span> 41539879323
            </p>
          </div>
          <div className="mb-2">
            <p className="text-gray-700">
              <span className="font-semibold">Account Name:</span> TRAVELLOTEN INDIA PVT.LTD
            </p>
          </div>
          <div className="mb-2">
            <p className="text-gray-700">
              <span className="font-semibold">IFSC Code:</span> SBIN0061209
            </p>
          </div>
        </div>

        {/* UPI Payment Section */}
        <div className="max-w-lg mx-auto bg-white p-8 shadow-md rounded-lg mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">UPI Payment</h2>
          <div className="mb-4">
            <p className="text-gray-700">
              <span className="font-semibold">UPI us at (Google Pay/BHIM/PhonePe):</span> 8130706886@ybl
            </p>
          </div>
          <div>
            <p className="text-gray-700">
              <span className="font-semibold">Account Name:</span> TRAVELLOTEN INDIA PVT.LTD
            </p>
          </div>
        </div>

        <div className="max-w-lg mx-auto bg-white p-8 shadow-md rounded-lg mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Razorpay Link</h2>
          <div className="mb-4">
            <p className="text-gray-700">
              <span  className="font-semibold">Payment via Razorpay: </span>
              <a target="_blank" rel="noopener noreferrer" className="text-[#01afd1]" href="https://razorpay.me/@travellotenindiaprivatelimite"> https://razorpay.me/@travellotenindiaprivatelimite </a>
            </p>
          </div>
          <div>
            <p className="text-gray-700">
              <span className="font-semibold">Note:</span> A payment getaway charge 3% will be levied on using above given payment link.
            </p>
          </div>
        </div>

        {/* Payment Policy Section */}
        <div className=" max-w-5xl mx-auto bg-white p-10 rounded-lg">
          <div className=" mb-6">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">Payment Policy</h1>
            <p className="text-gray-700">
              For Short Haul Destination refer Short Haul payment and cancellation policy and for long haul
              destination refer Long Haul payment and cancellation policy.
              <br />
              Short Haul Packages: Domestic Trips, Sri Lanka, Thailand, Singapore, Bali, Dubai, Kazakhstan, Azerbaijan,
              Vietnam, Malaysia, Maldives, Mauritius
              <br />
              Long Haul Packages: Europe, UK, Turkey, Egypt, Australia, New Zealand, South Africa
            </p>
          </div>

          {/* Short Haul Table */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">SHORT HAUL PACKAGES</h2>
            <p className="text-lg text-gray-700 font-semibold mb-4">Payment Policy</p>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="border p-3">Number Of Days Prior To Tour Date</th>
                  <th className="border p-3">Amount to be paid</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="border p-3">At the time of booking</td>
                  <td className="border p-3">25% of the full tour cost or cancellation charges whichever is higher (non-refundable and non-transferable)</td>
                </tr>
                <tr>
                  <td className="border p-3">Within 45 Days from Departure Date</td>
                  <td className="border p-3">50% of the Full Tour Cost or cancellation charges whichever is higher (non-refundable and non-transferable)</td>
                </tr>
                <tr>
                  <td className="border p-3">Within 30 Days from Date of Departure</td>
                  <td className="border p-3">75% of the Full Tour Cost or cancellation charges whichever is higher (non-refundable and non-transferable)</td>
                </tr>
                <tr>
                  <td className="border p-3">20 Days from Date of Departure</td>
                  <td className="border p-3">100% of the Full Tour Cost</td>
                </tr>
                <tr>
                  <td colSpan="2" className="border p-3 bg-gray-50">Please Note: For Issuance of the Flight Tickets, we require Full Payment of Airfare</td>
                </tr>
                <tr>
                  <td colSpan="2" className="border p-3 bg-gray-50">Please Note: Non-Refundable Services in the tour package have to be paid in full at the time of Booking</td>
                </tr>
                <tr>
                  <td colSpan="2" className="border p-3 bg-gray-50">Please Note: Payment Policy is non-negotiable and has to be paid accordingly.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Long Haul Table */}
          <div className="">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">LONG HAUL PACKAGES</h2>
            <p className="text-lg text-gray-700 font-semibold mb-4">Payment Policy</p>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="border p-3">Number Of Days Prior To Tour Date</th>
                  <th className="border p-3">Amount to be paid</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="border p-3">At the time of booking</td>
                  <td className="border p-3">INR 40,000 Per Person or cancellation charges whichever is higher (non-refundable and non-transferable)</td>
                </tr>
                <tr>
                  <td className="border p-3">Within 60 Days from Departure Date</td>
                  <td className="border p-3">50% of the Full Tour Cost or cancellation charges whichever is higher (non-refundable and non-transferable)</td>
                </tr>
                <tr>
                  <td className="border p-3">Within 45 Days from Departure Date</td>
                  <td className="border p-3">75% of the Full Tour Cost or cancellation charges whichever is higher (non-refundable and non-transferable)</td>
                </tr>
                <tr>
                  <td className="border p-3">30 Days from Departure Date</td>
                  <td className="border p-3">100% of the full Tour cost</td>
                </tr>
                <tr>
                  <td colSpan="2" className="border p-3 bg-gray-50">Please Note: For Issuance of the Flight Tickets, we require Full Payment of Airfare</td>
                </tr>
                <tr>
                  <td colSpan="2" className="border p-3 bg-gray-50">Please Note: Non-Refundable Services in the tour package have to be paid in full at the time of Booking</td>
                </tr>
                <tr>
                  <td colSpan="2" className="border p-3 bg-gray-50">Please Note: Payment Policy is non-negotiable and has to be paid accordingly.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <FooterSection />
      <Footer />
      <div className="fixed-button-1">
        <a
          href={`https://wa.me/918287804197?text=${encodeURIComponent(
            whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Lottie loop={true} animationData={cont} />
        </a>
      </div>
    </>
  );
};

export default Payments;
