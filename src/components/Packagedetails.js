import React, { useState } from "react";
import "./Packagedetails.css";
import Nav from "./Nav";
import bg from "../img/india.jpg";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { RxCrossCircled } from "react-icons/rx";
import { GoDot } from "react-icons/go";
import Footer from "../Footer";
import { GoDotFill } from "react-icons/go";

const Packagedetails = () => {
  // State to track the active link
  const [activeSection, setActiveSection] = useState("overview");
  // State to track if content is expanded
  const [isExpanded, setIsExpanded] = useState(false);

  const [isDay1Expanded, setIsDay1Expanded] = useState(false);

  // Function to handle the download action
  const handleDownload = () => {
    window.open("/itinerary.pdf", "_blank");
  };

  // Function to toggle the expanded state
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleToggleDay1 = () => {
    setIsDay1Expanded(!isDay1Expanded);
  };

  return (
    <div>
      <Nav />
      <img src={bg} alt="Descriptive Alt Text" className="full-width-image" />
      <button className="cssbuttons-io-button" onClick={handleDownload}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="currentColor"
            d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
          ></path>
        </svg>
        <span>Download Itinerary</span>
      </button>
      <div>
        <h2>Meghalaya Road Trip</h2>
      </div>
      <div className="icons">
        <div className="icon-text-container">
          <FaMapMarkerAlt className="icon" />
          <span className="icon-text">Pickup & Drop:</span>
          <span className="icon-text">Guwahati</span>
        </div>
        <div className="icon-text-container">
          <FaClock className="icon" />
          <span className="icon-text">Duration:</span>
          <span className="icon-text">5N - 6D</span>
        </div>
      </div>
      <div>
        <nav className="package-nav">
          <a
            href="#overview"
            className={activeSection === "overview" ? "active" : ""}
            onClick={() => setActiveSection("overview")}
          >
            Overview & Highlights
          </a>
          <a
            href="#itinerary"
            className={activeSection === "itinerary" ? "active" : ""}
            onClick={() => setActiveSection("itinerary")}
          >
            Itinerary
          </a>
          <a
            href="#inclusions"
            className={activeSection === "inclusions" ? "active" : ""}
            onClick={() => setActiveSection("inclusions")}
          >
            Inclusion
          </a>
          <a
            href="#exclusions"
            className={activeSection === "exclusions" ? "active" : ""}
            onClick={() => setActiveSection("exclusions")}
          >
            Exclusion
          </a>
          <a
            href="#other-info"
            className={activeSection === "other-info" ? "active" : ""}
            onClick={() => setActiveSection("other-info")}
          >
            Other Info
          </a>
        </nav>
      </div>


      <div id="overview" className="overview-container">
        <h1>Overview & Highlights</h1>
        <h2>
          Guwahati - Shillong - Cherrapunjee - Shnongpdeng - Shillong - Guwahati
        </h2>
        <p>
          Meghalaya- A Potpourri of Beauty & Culture Confused about choosing
          your next travel destination? Wondering whether to go trekking in
          forests, or take a dip in blue lagoons or just relax by the beachside?
          What if we tell you there exists a magical land very much in India
          that offers all of these activities and many more without burning a
          hole in your pocket? Sounds dreamy, right? Well, pinch yourself to
          reality because WanderOn is taking you all the way to the abode of
          clouds with our
          {isExpanded && (
            <>
             Meghalaya tour package! Charming Landscapes If there’s
          one word for Meghalaya, it is exotic. It is one of the gems of
          Northeast India. Don’t get us wrong if we say it is one of the most
          beautiful seven sisters! That is because Meghalaya is a potpourri of
          vivid landscapes. It is indeed God’s own garden with lush green
          mountains, mysterious caves, sparkling rivers, and some majestic
          waterfalls. Being the recipient of maximum rainfall, Meghalaya has
          every hue of green in its forests. It surely is a photographer’s
          paradise. Richness of Culture Home to the Khasi and Garo culture,
          Meghalaya boasts of its unique cuisines, vibrant clothing, and
          melodious folk music. Though it has a moderate climate round the year,
          the best time to visit Meghalaya is during autumn. It is then that the
          famous Wangala drum festival showcases the best of its culture. Its
          capital Shillong, popularly known as ‘The Rock Capital of India’, has
          a peppy evening vibe. With scrumptious food and jamming sessions, the
          cafes at Shillong are so charming they would surely leave you wanting
          for more. Apart from cafes, there are a lot of places to visit in
          Shillong. The Umiam Lake, Elephant Falls, and evergreen forests are a
          few major attractions. There is no doubt as to why the British named
          Shillong as the Scotland of East. Most Scenic Villages of Asia
          Speaking of other places, the true essence of Meghalaya tourism lies
          in its villages. Here cleanliness is a culture that is practiced so
          dedicatedly, that the Village Mawlynnong is titled as the cleanest
          village of Asia! The Living Roots bridges at Nongriat Village are so
          mystical they seem to be straight out of some Peter Pan movie! Also,
          if you have seen those pictures of a slender boat over crystal clear
          waters then you already know what boating in Umngot River at Dawki
          Village looks like. But hey, only if looking at a picture was enough,
          we all would have traveled the world, right? Since that is far from
          being possible, you need to pack your bags and get ready to unravel
          the hidden beauty of NorthEast India with Wanderon’s Meghalaya tour
          package. Explore With WanderOn Whether you are a bunch of friends or
          you move solo, Wanderon always takes care of your needs while
          designing the itinerary and Meghalaya Chapter is no different. We’ve
          curated the best Meghalaya tour itinerary so that you can enjoy every
          aspect of this beautiful place. All this and more at super affordable
          prices! So don’t just sit there thinking because we can already hear
          the abode of clouds calling! Join WanderOn’s next Meghalaya batch and
          become a part of India’s coolest travel community!
          </>
          )}
        </p>
        <button onClick={handleToggle} className="toggle-button-1">
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
      </div>

      <div id="itinerary" className="itinerary-container">
  <h1>Itinerary</h1>
  <div className="day-container">
    <div className="day-header">
      <h3>Day 1</h3>
      <p>Guwahati Arrival | Umiam Lake | Overnight at Shillong</p>
      <span className="plus-icon" onClick={handleToggleDay1}>+</span>
    </div>
    {isDay1Expanded && (
      <ul className="itinerary-details">
        <li>Arrive at Lokpriya Gopinath Bordoloi International Airport by morning. Arrive till 11:30 AM</li>
        <li>Post breakfast, depart for Shillong.</li>
        <li>Post lunch visit Umiam Lake & then head to Shillong market for some shopping.</li>
        <li>Check in to the hotel & freshen up.</li>
        <li>Overnight stay at Shillong.</li>
      </ul>
    )}
  </div>
  <div className="day-container">
    <div className="day-header">
      <h3>Day 2</h3>
      <p>Shillong to Cherrapunjee | Lyngksiar Waterfalls | Arwah Cave | Nohkalikai Falls</p>
      <span className="plus-icon" onClick={handleToggleDay1}>+</span>
    </div>
    {isDay1Expanded && (
      <ul className="itinerary-details">
        <li>Wake up and enjoy your breakfast with a view.</li>
        <li>Check out from Hotel and visit the beautiful Lyngksiar Waterfalls.</li>
        <li>Later depart for Arwah Cave.</li>
        <li>Post lunch continue toward Cherrapunjee.</li>
        <li>Spend your time awestruck by the amazing beauty.</li>
        <li>Reach Cherrapunjee and visit Nohkalikai Falls</li>
        <li>Dinner & sleep overnight.</li>
      </ul>
    )}
  </div>
  
  <div className="day-container">
    <div className="day-header">
      <h3>Day 3</h3>
      <p>Guwahati Arrival | Umiam Lake | Overnight at Shillong</p>
      <span className="plus-icon" onClick={handleToggleDay1}>+</span>
    </div>
    {isDay1Expanded && (
      <ul className="itinerary-details">
        <li>Post breakfast, depart for Tyrna Village.</li>
        <li>Reach Tyrna & first start your trek to the Single Root Bridge.</li>
        <li>Later Visit the astonishing Double Decker Bridge. Trek back to Tyrna Village & start your journey to Cherrapunjee. ( This trek consists of 3300 steps one side, a total of 6600 steps in the entire trek )</li>
        <li>Reach Cherrapunjee.</li>
        <li>Overnight stay at Cherrapunjee.</li>
      </ul>
    )}
  </div>
  <div className="day-container">
    <div className="day-header">
      <h3>Day4 </h3>
      <p>Mawsma Mawlynnong Village | Overnight at Shnongpdeng ( Dawki )</p>
      <span className="plus-icon" onClick={handleToggleDay1}>+</span>
    </div>
    {isDay1Expanded && (
      <ul className="itinerary-details">
        <li>Post breakfast, Visit Mawsmai Caves</li>
        <li>Mawer to Mawlynnong Village.</li>
        <li>Later transfer to Shnongpdeng Village.</li>
        <li>Arrive at Shnongpdeng & check in to the camps. Camping by the crystal clear Umngot river which is also known as Dawki river</li>
        <li>Overnight stay at Shnongpdeng.</li>
      </ul>
    )}
  </div>
  <div className="day-container">
    <div className="day-header">
      <h3>Day5 </h3>
      <p>Water Sports | Phe-Phe Waterfall | Overnight at Shillong</p>
      <span className="plus-icon" onClick={handleToggleDay1}>+</span>
    </div>
    {isDay1Expanded && (
      <ul className="itinerary-details">
        <li>Enjoy your breakfast with a sight of crystal clear water of the river.</li>
        <li>Enjoy various water sports activities.</li>
        <li>Have your lunch and transfer to Shillong.</li>
        <li>On the way visit Phe-Phe Waterfall.</li>
        <li>Reach Shillong & explore the local market.</li>
        <li>Overnight stay at Shillong.</li>
      </ul>
    )}
  </div>

  <div className="day-container">
    <div className="day-header">
      <h3>Day6 </h3>
      <p>Laitlum Grand Canyon | Departure</p>
      <span className="plus-icon" onClick={handleToggleDay1}>+</span>
    </div>
    {isDay1Expanded && (
      <ul className="itinerary-details">
        <li>Enjoy a delicious breakfast.</li>
        <li>Check out and depart for Laitlum Grand Canyon.</li>
        <li>Later depart for Guwahati Airport.</li>
        <li>Reach your home with a suitcase full of memories.Book your flight post 5 PM.</li>
      </ul>
    )}
  </div>
  
</div>



      <div id="inclusions" className="inclusions-container">
  <h1>Inclusions</h1>
  <ul className="inclusions-list">
        <li><SiTicktick className="icon" />Entire travel as per the itinerary by tempo traveler.</li>
        <li><SiTicktick className="icon" />5 nights accommodation – 2 Nights in Hotel at Cherrapunjee, 1 Night in Camps at Shnongpdeng & 2 Nights in Hotel at Shillong on double/triple sharing basis.</li>
        <li><SiTicktick className="icon" />6 meals – Breakfast on Day 2, Day 3, Day 4, Day 5 & Day 6 + Dinner on Day 4.</li>
        <li><SiTicktick className="icon" />Entry fees to the sightseeing places mentioned in the itinerary.</li>
        <li><SiTicktick className="icon" />Guided trek to various points.</li>
        <li><SiTicktick className="icon" />Team Captain throughout the trip.</li>
        <li><SiTicktick className="icon" />Medical Kit to handle emergency conditions.</li>
        <li><SiTicktick className="icon" />Driver night charges, toll & parking charges.</li>
        <li><SiTicktick className="icon" />All inner line permits.</li>
        <li><SiTicktick className="icon" />Boating in Shnongpdeng.</li>
        <li><SiTicktick className="icon" />Bonfire (If Weather permits).</li>
      </ul>
</div>

      <div id="exclusions" className="Exclusion-container">
  <h1>Exclusions</h1>
  <ul className="Exclusion-list">
        <li><RxCrossCircled className="icon-e" />GST (5%) is applicable extra.</li>
        <li><RxCrossCircled className="icon-e" />Any other food or beverage charges that are not included in the package.</li>
        <li><RxCrossCircled className="icon-e" />Any other costing involved due to any kind of natural calamity, forced circumstances, which are out of our control.</li>
        <li><RxCrossCircled className="icon-e" />Any other expense not mentioned in the inclusion column.</li>

      </ul>
</div>

      <div id="other-info" className="Other-info-container">
        <h1>Other-Info</h1>
        <ul className="Other-info-list">
          <p>Must Carry</p>
          <li><GoDotFill className="icon-e" />Authentic Government ID Card</li>
          <li><GoDotFill className="icon-e" />Comfortable warm clothing</li>
          <li><GoDotFill className="icon-e" />Personal Medicines (if any)</li>
          <li><GoDotFill className="icon-e" />Sunscreen & lip balm</li>
          <p>Travel Essentials</p>

          {/* Display additional content only if expanded */}
          {isExpanded && (
            <>
              <p>Gears</p>
              <li><GoDot className="icon-e" />A rucksack bag and a day pack</li>
              <li><GoDot className="icon-e" />3-litre water bladder or water bottle</li>
              <p>clothes</p>
              <li><GoDot className="icon-e" />One cotton long sleeves and 2 short sleeve t-shirt</li>
              <li><GoDot className="icon-e" />1 pair of gloves</li>
              <li><GoDot className="icon-e" />At least 2 long pants (trek pants and cargo pants are favourable)</li>
              <li><GoDot className="icon-e" />4 sets of undergarments</li>
              <li><GoDot className="icon-e" />2 pair of socks</li>
              <li><GoDot className="icon-e" />A rain jacket or a poncho</li>
              <li><GoDot className="icon-e" />A small towel</li>
              <p>Footwear</p>
              <li><GoDot className="icon-e" />Above-the-ankle waterproof and breathable hiking boots with good grip</li>
              <li><GoDot className="icon-e" />Flip flops/sandals</li>
              <p>Medication</p>
              <li><GoDot className="icon-e" />Glucose powder</li>
              <li><GoDot className="icon-e" />Medicines for headaches, diarrhoea, motion sickness</li>
              <li><GoDot className="icon-e" />Dettol</li>
              <li><GoDot className="icon-e" />Bandages</li>
              <li><GoDot className="icon-e" />Cotton</li>
              <p>Personal accessories</p>
              <li><GoDot className="icon-e" />Toothpaste, Toothbrush</li>
              <li><GoDot className="icon-e" />Paper soap, or sanitizer</li>
              <li><GoDot className="icon-e" />Sunscreen minimum of spf40 , lip balm, cold creams</li>
              <li><GoDot className="icon-e" />Body spray</li>
              <li><GoDot className="icon-e" />LED torch light</li>
            </>
          )}

          {/* Toggle button */}
          <button onClick={handleToggle} className="toggle-button">
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </ul>
      </div>


      <Footer />
    </div>
  );
};

export default Packagedetails;
