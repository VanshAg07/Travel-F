import React from "react";
import "./Cancellation.css";

const Cancellation = () => {
  return (
    <div>

<div>
        <h1>Cancellation Policy</h1>
        <p>
        For Short Haul Destination refer Short Haul payment and cancellation policy and for long haul destination refer Long Haul payment and cancellation policy.
        Short Haul Packages: Domestic Trips, Sri Lanka, Thailand, Singapore, Bali, Dubai, Kazakhstan, Azerbaijan,Vietnam, Malaysia, Maldives, Mauritius
        Long Haul Packages: Europe, UK, Turkey, Egypt, Australia, New Zealand, South Africa
        </p>
      </div>


            <div class="table-container">
            <h1>SHORT HAUL PACKAGES</h1>
            <p>Cancellation Policy</p>
			<table>
				<tr><th>
                Number Of Days Prior To Tour Date</th><th>Cancellation Amount</th></tr>
				<tr><td>31 and More Days prior to the Departure Date</td><td>The Booking Amount is Non-Refundable, for balance amount credit note will be given.</td></tr>
				<tr><td>30 to 16 Days prior to the Departure Date</td><td>50% of the full Tour cost, for balance amount credit note will be given.</td></tr>
				<tr><td>15 Days prior to the Departure Date</td><td>100% of the full Tour cost</td></tr>
				<tr><td>Please Note : Actual Airfare Cancellation will be applicable in case of Cancellation</td></tr>
				<tr><td>Please Note : No Refund will be made against Non-Refundable Services in the Tour Package</td></tr>
				<tr><td>Please Note : Cancellation Policy is non-negotiable and 5% GST will be applicable on Total Cancellation Amount.</td></tr>
			</table>
		</div>


        <div class="table-container">
            <h1>LONG HAUL PACKAGES</h1>
            <p>Cancellation Policy</p>
			<table>
				<tr><th>
                Number Of Days Prior To Tour Date</th><th>Cancellation Amount</th></tr>
				<tr><td>46 and More Days prior to the Departure Date</td><td>The Booking Amount is Non-Refundable, for balance amount credit note will be given.</td></tr>
				<tr><td>45 to 31 Days prior to the Departure Date</td><td>60% of the full Tour cost, for balance amount credit note will be given.</td></tr>
				<tr><td>30 to 21 Days prior to the Departure Date</td><td>80% of the full Tour cost, for balance amount credit note will be given.</td></tr>
                <tr><td>20 Days prior to the Departure Date</td><td>100% of the full Tour cost</td></tr>
				<tr><td>Please Note : Actual Airfare Cancellation will be applicable in case of Cancellation</td></tr>
				<tr><td>Please Note : No Refund will be made against Non-Refundable Services in the Tour Package</td></tr>
				<tr><td>Please Note : Cancellation Policy is non-negotiable and 5% GST will be applicable on Total Cancellation Amount.</td></tr>
			</table>
		</div>
    </div>
  );
};

export default Cancellation;
