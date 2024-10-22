import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdHotel } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import Whyuss from "../../components/Whyuss";
import Homeglry from "../../components/Homeglry";
import Nav from "../Nav";
import Dropnav from "../../components/Dropnav";
import intern from "../../img/india.jpg";
import cont from "../../img/cont-button.json";
import Lottie from "lottie-react";
import Mainreview from "../../components/Mainreview";
import MainFooter from "../Footer/MainFooter";
import weekend from "../../img/weekend.json";
import Grouptourhero from "../../components/Grouptour-hero";
import Grouptourform from "../../components/Groupform";

const BackpackingTrips = () => {
  const whatsappMessage = "Hello, I need assistance with my issue.";
  return (
    <>
      <Nav />
      <Dropnav />
      <div className="w-[100%] h-[100%] text-center justify-center items-center  ">
        <img className="h-[730px] w-[100%]" src={intern} alt="India" />
        <h1
          className="top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 absolute text-white text-center
            text-4xl sm:text-5xl md:text-[2.7rem] leading-tight pb-3"
        >
          Backpacking Trips 2024
          <br />
          <span className="block text-2xl sm:text-3xl md:text-[2rem] mt-10">
            Venture Into the Heart of Uncharted Backpacking Paradises
          </span>
        </h1>
      </div>

      <Mainreview />

      <div className="lottie-wr">
        <Lottie
          animationData={weekend}
          loop={true}
          autoplay={true}
          speed={0.5}
          className="hero-lottie"
        />
      </div>

      <div className="py-12 bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-800 pt-10 sm:text-3xl lg:text-4xl">
            Backpacking Trips
          </h1>
        </div>

        {/* Icon section */}
        <div className="w-[70%] mx-auto flex justify-between items-center mt-8 flex-nowrap">
          {/* First item */}
          <div className="flex flex-col items-center mb-6">
            <FaHandHoldingHeart className="text-3xl text-blue-500 mb-4 sm:text-4xl md:text-5xl lg:text-6xl" />
            <p className="text-xs font-semibold text-gray-800 text-center sm:text-sm md:text-base lg:text-lg">
              Top Notch <br /> Hospitality
            </p>
          </div>

          {/* Second item */}
          <div className="flex flex-col items-center mb-6">
            <MdHotel className="text-3xl text-yellow-500 mb-4 sm:text-4xl md:text-5xl lg:text-6xl" />
            <p className="text-xs font-semibold text-gray-800 text-center sm:text-sm md:text-base lg:text-lg">
              Beautiful <br /> Handpicked Stays
            </p>
          </div>

          {/* Third item */}
          <div className="flex flex-col items-center mb-6">
            <FaUserFriends className="text-3xl text-red-500 mb-4 sm:text-4xl md:text-5xl lg:text-6xl" />
            <p className="text-xs font-semibold text-gray-800 text-center sm:text-sm md:text-base lg:text-lg">
              Fun <br /> Team Captains
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 min-h-screen">
       {/* Sections */}
        <div className="container mx-auto mt-8 p-4 space-y-12">

          {/* Adventure Section */}
          <div id="adventure" className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-2">Adventure Tours</h2>
            <h3 className="text-xl text-gray-600 mb-4">
              Exploring the Unknown
            </h3>
            <p className="text-gray-700">
              Adventure tours provide students with the perfect opportunity to
              step outside their comfort zones and explore the great outdoors
              while developing important life skills. These tours offer
              thrilling experiences that combine physical challenges with
              personal growth, allowing students to push their limits, conquer
              fears, and build resilience. Whether it's trekking through rugged
              mountains, rafting down rapid rivers, or zip-lining through lush
              forests, adventure tours foster a sense of independence and
              self-confidence as participants navigate new and exciting
              environments. Such experiences not only encourage personal
              development but also help students form lasting memories and
              friendships through shared adventures.
            </p>
            <br></br>
            <br></br>
            <p className="text-gray-700">
              The hands-on, immersive nature of adventure tours also provides
              students with a unique way to learn about the world around them.
              Environmental awareness, teamwork, and problem-solving are at the
              core of these experiences. Students gain a deeper appreciation for
              nature and sustainability as they engage in activities that
              promote physical well-being and environmental stewardship. Whether
              it’s navigating a challenging terrain or setting up camp in the
              wilderness, these experiences teach essential survival skills and
              an understanding of the natural world that can’t be found in a
              classroom.
            </p>
            <br></br>
            <br></br>
            <p className="text-gray-700">
              For schools and colleges, adventure tours provide an ideal
              opportunity to promote holistic development in students. Beyond
              physical fitness, these experiences cultivate emotional
              intelligence and leadership skills. Whether it’s leading a group
              through uncharted territory or offering support to teammates
              during a strenuous activity, students are encouraged to take
              responsibility and develop initiative. By tackling adventurous
              activities, they build character and resilience that will serve
              them well in both their academic and personal lives. Tailored
              adventure tours can also be customized to meet specific learning
              outcomes, blending outdoor exploration with educational goals to
              ensure that students return home enriched both physically and
              intellectually.
            </p>
          </div>
        </div>
      </div>

      <Grouptourhero />

      <Whyuss />
      <Homeglry />
      <Grouptourform />
      <MainFooter />
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

export default BackpackingTrips;
