import React from "react";
import "./Cancellation.css";
import Nav from "./Nav";
import FooterSection from "./Footersection";
import Footer from "../Footer";
import Dropnav from "../components/Dropnav"

const Cancellation = () => {

  return (
    <>
    <Nav />
    <Dropnav />
    <div className="cancellation-container">

      <div className="cancellation-header">
        <h1 className="cancellation-title">Cancellation Policy</h1>
        <p className="cancellation-intro">
          For Short Haul Destination refer to the Short Haul payment and cancellation policy, and for long haul destination refer to the Long Haul payment and cancellation policy.
          <br />
          Short Haul Packages: Domestic Trips, Sri Lanka, Thailand, Singapore, Bali, Dubai, Kazakhstan, Azerbaijan, Vietnam, Malaysia, Maldives, Mauritius.
          <br />
          Long Haul Packages: Europe, UK, Turkey, Egypt, Australia, New Zealand, South Africa.
        </p>
      </div>

      <div className="table-container">
        <h1 className="package-title">SHORT HAUL PACKAGES</h1>
        <p className="policy-text">Cancellation Policy</p>
        <table className="cancellation-table">
          <thead>
            <tr>
              <th>Number Of Days Prior To Tour Date</th>
              <th>Cancellation Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>31 and More Days prior to the Departure Date</td>
              <td>The Booking Amount is Non-Refundable; a credit note will be given for the balance amount.</td>
            </tr>
            <tr>
              <td>30 to 16 Days prior to the Departure Date</td>
              <td>50% of the full Tour cost; a credit note will be given for the balance amount.</td>
            </tr>
            <tr>
              <td>15 Days prior to the Departure Date</td>
              <td>100% of the full Tour cost</td>
            </tr>
            <tr>
              <td colSpan="2">Please Note: Actual Airfare Cancellation will be applicable in case of Cancellation.</td>
            </tr>
            <tr>
              <td colSpan="2">Please Note: No Refund will be made against Non-Refundable Services in the Tour Package.</td>
            </tr>
            <tr>
              <td colSpan="2">Please Note: Cancellation Policy is non-negotiable, and 5% GST will be applicable on Total Cancellation Amount.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="table-container">
        <h1 className="package-title">LONG HAUL PACKAGES</h1>
        <p className="policy-text">Cancellation Policy</p>
        <table className="cancellation-table">
          <thead>
            <tr>
              <th>Number Of Days Prior To Tour Date</th>
              <th>Cancellation Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>46 and More Days prior to the Departure Date</td>
              <td>The Booking Amount is Non-Refundable; a credit note will be given for the balance amount.</td>
            </tr>
            <tr>
              <td>45 to 31 Days prior to the Departure Date</td>
              <td>60% of the full Tour cost; a credit note will be given for the balance amount.</td>
            </tr>
            <tr>
              <td>30 to 21 Days prior to the Departure Date</td>
              <td>80% of the full Tour cost; a credit note will be given for the balance amount.</td>
            </tr>
            <tr>
              <td>20 Days prior to the Departure Date</td>
              <td>100% of the full Tour cost</td>
            </tr>
            <tr>
              <td colSpan="2">Please Note: Actual Airfare Cancellation will be applicable in case of Cancellation.</td>
            </tr>
            <tr>
              <td colSpan="2">Please Note: No Refund will be made against Non-Refundable Services in the Tour Package.</td>
            </tr>
            <tr>
              <td colSpan="2">Please Note: Cancellation Policy is non-negotiable, and 5% GST will be applicable on Total Cancellation Amount.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <FooterSection/>
    <Footer />
    </>
  );
};

export default Cancellation;
