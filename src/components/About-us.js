import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import icon1 from "../img/aboutus.jpg";
import Nav from "./Nav";
import { FaUserTie, FaHandshake, FaShuttleVan } from "react-icons/fa";
import Dropnav from "../components/Dropnav";
import cont from "../img/cont-button.json";
import Lottie from "lottie-react";
import MainFooter from "./Footer/MainFooter";

const Aboutus = () => {
  useEffect(() => {
    fetchTeamMembers();
  }, []);
  const fetchTeamMembers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/home/get-team-member"
      );
      setTeamMembers(response.data.data);
    } catch (error) {
      console.error("Error fetching team members:", error);
    }
  };

  const [teamMembers, setTeamMembers] = useState([]);
  const whatsappMessage = "Hello, I need assistance with my issue.";

  const warriors = [
    {
      title: "Adventure Coordinators",
      icon: <FaUserTie size={50} className="mb-4  text-yellow-500 "  />,
     description: "Our trip captains are truly remarkable individuals. Fearless, adaptable, and exceptional leaders, they are the driving force behind our community adventures. Carefully selected from India’s premier travel institutes, they possess a wealth of knowledge and expertise, mastering the art of guiding diverse journeys—from thrilling biking escapades to challenging trekking expeditions. Their passion for exploration and commitment to safety ensure that every trip is not only memorable but also expertly managed, allowing our travelers to fully immerse themselves in the experience.",
    },
    {
      title: "Community Partners",
      icon: <FaHandshake size={50} className="mb-4 text-yellow-500" />,
      description: `As the vital link connecting travelers to local vendors, we take great care in selecting the partners we work with. Through extensive scouting and evaluation, we’ve discovered the most welcoming and generous vendors who go above and beyond to ensure that our travelers feel right at home, no matter how far they are from their own. Our commitment to nurturing these family-like relationships allows us to give back to the local community, ensuring that every interaction fosters goodwill and supports sustainable practices that benefit everyone involved.,`,
    },
    {
      title: "Driving Experts",
      icon: <FaShuttleVan size={50} className="mb-4 text-yellow-500" />,
      description: ` We recognize the critical role our drivers play in ensuring the safety and comfort of our travelers as they embark on adventures through the most challenging landscapes. The foundation of our journeys rests on the skill and experience of our team. At WanderOn, our drivers are not just professionals; they are local experts with years of hands-on experience. They possess an intimate knowledge of the routes, ensuring that every journey is not only safe but also enriching, as they guide travelers through hidden gems and scenic vistas.,`,
    },
  ];

  return (
    <>
      <Nav />
      <Dropnav/>
      <div>
        <div>
          <img
            src={icon1}
            alt="About Us"
            className="w-full h-[580px] object-cover"
          />
          {/* Black overlay */}
          <div className="absolute top-0 left-0 right-0 h-[580px] bg-black opacity-50"></div>
          {/* Text overlay */}
          <h1 className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">
            About Us
          </h1>
        </div>

        {/* Introduction Section */}
        <div className="py-8 px-4 sm:px-8 lg:px-24 w-full lg:w-[80%] mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
            What Do We Strive for and What Fuels Our Ambition?
          </h1>
          <p className="mb-4 text-sm sm:text-base lg:text-lg">
          TravelloTen India Private Limited is a specialist for Travel & Transport  serving exclusively the academic sector by arranging educational & fun tours for 
          students of every age all over India.
          </p>
          <p className="text-sm sm:text-base lg:text-lg">
          We are different as we educate and inform students about historical/geographical/cultural values etc. wherever the tour takes place. 
We also doing school tour , colleges tour , corporate tour & Family's tour for all place in India. 
          </p>
          <p className="text-sm sm:text-base lg:text-lg">
          We have over many years combined experience in providing the almost in quality, authenticity and service in the group travel industry.
          </p>
          <p className="text-sm sm:text-base lg:text-lg">
          We have strong hold in the domestic market as well. We believe in “Service with quality & Smile”.  
          </p>
          <p className="text-sm sm:text-base lg:text-lg">
          We use the best system for operations which adds “Valued Efficiency” to our teamwork thus making hospitality not a business affair 
          but a “Commitment & Pledge” towards client’s satisfaction. 
          </p>
          <p className="text-sm sm:text-base lg:text-lg">
         
At TravelloTen India Private Limited understand that planning a group trip can be a lot of work and that is why we believe in providing 
value every step of the way.
          </p>
        </div>

        {/* Team Section */}
        <section className="text-center py-12 sm:py-16 bg-gray-50 px-4 sm:px-8 lg:px-24">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Meet Our Amazing Team. The Perfect Blend of Talent and Dedication
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
  <div key={index} className="flex flex-col items-center">
    <img
      src={member.image}  // updated from imgSrc to image
      alt={member.name}
      className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full object-cover mb-4 shadow-lg"
    />
    <h3 className="text-xl sm:text-2xl font-semibold">{member.name}</h3>
    <hr className="border-t-4 border-yellow-500 mt-1 w-16 mb-2" />
    <p className="text-gray-600 mb-4">{member.position}</p> {/* updated from title to position */}
    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
      {member.description}
    </p>
  </div>
))}

          </div>
        </section>

        {/* Heroes Section */}
        <section className="py-12 sm:py-16 bg-white px-4 sm:px-8 lg:px-24">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">
            The HEROES Behind Our Journey Towards Community Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {warriors.map((warrior, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {warrior.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">{warrior.title}</h3>
                <div className="border-t-2 border-yellow-500 w-12 mx-auto mb-4"></div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {warrior.description}
                </p>
              </div>
            ))}
          </div>
        </section>

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
      </div>
    </>
  );
};

export default Aboutus;
