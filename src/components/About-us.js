import React from "react";
import icon1 from "../img/aboutus.jpg";
import Nav from "./Nav";
import FooterSection from "./Footersection";
import Footer from "../Footer";
import { FaLinkedin } from "react-icons/fa";
import { FaUserTie, FaHandshake, FaShuttleVan } from "react-icons/fa";
import InstaIcon from '../img/icons8-insta.svg';
import Dropnav from "../components/Dropnav";
import cont from "../img/cont-button.json";
import Lottie from "lottie-react";
import MainFooter from "./Footer/MainFooter";

const Aboutus = () => {
  const whatsappMessage = "Hello, I need assistance with my issue.";
  const teamMembers = [
    {
      name: "Govind Gaur",
      title: "CEO, Founder",
      imgSrc: "path-to-image1", // replace with actual image path
      description:
        "Govind is a visionary travelpreneur with an experience of leading more than 200 community trips. He’s fond of all kinds of voyages, yet his favourite are motorbiking expeditions, hence he accounts for 30000kms of extreme rides. He can hold a conversation around business, human values and almost everything one can think of. The man knows how to get down to work and party, equally well.",
    },
    {
      name: "Madhusudan Jaju",
      title: "Head of Finance",
      imgSrc: "path-to-image2", // replace with actual image path
      description:
        "Madusudhan is a passionate learner, and an instinctive marketer. He has led more than 40 trips and has taken his hot wheels on a ride of total 50,000kms. He has a habit of finding a path even where it seems impossible, that is why he has been to over 30 treks, some well known, others unexplored. Being an avid reader, he is the perfect motivational speaker for the team.",
    },
    {
      name: "Chirag Jain",
      title: "Head of Operations",
      imgSrc: "path-to-image3", // replace with actual image path
      description:
        "Chirag is a strong analyst of travel operations, and thus heads the responsibility of running the entire show. Just like Sindbad the Sailor, he finds out the most interesting experiences and tests them out before presenting to the community. With so many duties to perform, it is hard to believe that he managed to code the html and css for this website!",
    },
  ];

  const warriors = [
    {
      title: "Adventure Coordinators",
      icon: <FaUserTie size={50} className="mb-4 ml-44 text-yellow-500"  />,
      description: `Our trip captains are truly remarkable individuals. Fearless, adaptable, and exceptional leaders, they are the driving force behind our community adventures. Carefully selected from India’s premier travel institutes, they possess a wealth of knowledge and expertise, mastering the art of guiding diverse journeys—from thrilling biking escapades to challenging trekking expeditions. Their passion for exploration and commitment to safety ensure that every trip is not only memorable but also expertly managed, allowing our travelers to fully immerse themselves in the experience.`,
    },
    {
      title: "Community Partners",
      icon: <FaHandshake size={50} className="mb-4 ml-48 text-yellow-500" />,
      description: `As the vital link connecting travelers to local vendors, we take great care in selecting the partners we work with. Through extensive scouting and evaluation, we’ve discovered the most welcoming and generous vendors who go above and beyond to ensure that our travelers feel right at home, no matter how far they are from their own. Our commitment to nurturing these family-like relationships allows us to give back to the local community, ensuring that every interaction fosters goodwill and supports sustainable practices that benefit everyone involved.`,
    },
    {
      title: "Driving Experts",
      icon: <FaShuttleVan size={50} className="mb-4 ml-48 text-yellow-500" />,
      description: `We recognize the critical role our drivers play in ensuring the safety and comfort of our travelers as they embark on adventures through the most challenging landscapes. The foundation of our journeys rests on the skill and experience of our team. At WanderOn, our drivers are not just professionals; they are local experts with years of hands-on experience. They possess an intimate knowledge of the routes, ensuring that every journey is not only safe but also enriching, as they guide travelers through hidden gems and scenic vistas.`,
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
        <div className="py-10 px-4 w-[80%] mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">
            What Do We Strive for and What Fuels Our Ambition?
          </h1>
          <p className="mb-4">
          TravelloTen India Private Limited is a specialist for Travel & Transport  serving exclusively the academic sector by arranging educational & fun tours for 
          students of every age all over India.
          </p>
          <p>
          We are different as we educate and inform students about historical/geographical/cultural values etc. wherever the tour takes place. 
We also doing school tour , colleges tour , corporate tour & Family's tour for all place in India. 
          </p>
          <p>
          We have over many years combined experience in providing the almost in quality, authenticity and service in the group travel industry.
          </p>
          <p>
          We have strong hold in the domestic market as well. We believe in “Service with quality & Smile”.  
          </p>
          <p>
          We use the best system for operations which adds “Valued Efficiency” to our teamwork thus making hospitality not a business affair 
          but a “Commitment & Pledge” towards client’s satisfaction. 
          </p>
          <p>
         
At TravelloTen India Private Limited understand that planning a group trip can be a lot of work and that is why we believe in providing 
value every step of the way.
          </p>
        </div>

        {/* Team Section */}
        <section className="text-center py-16 bg-gray-50">
          <h2 className="text-4xl font-bold mb-6">
            Meet Our Amazing Team. The Perfect Blend of Talent and Dedication
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-8 lg:px-20">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"
                />
                <h3 className="text-2xl font-semibold">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.title}</p>
                <div className="flex justify-center space-x-4 mb-4">
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <FaLinkedin size={26} />
                  </a>
                  <a href="#">
                    <img src={InstaIcon}  className="w-8 h-8" />
                  </a>
                </div>
                <hr className="border-t-2 border-yellow-500 w-16 mb-4" />
                <p className="text-gray-700 px-4 text-justify">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Heroes Section */}
        <section className="py-16 bg-white">
          <h2 className="text-3xl font-bold text-center mb-12">
            The HEROES Behind Our Journey Towards Community Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 lg:px-20">
            {warriors.map((warrior, index) => (
              <div key={index} className="text-center">
                {warrior.icon}
                <h3 className="text-2xl font-semibold mb-2">{warrior.title}</h3>
                <div className="border-t-2 border-yellow-500 w-12 mx-auto mb-4"></div>
                <p className="text-gray-600 leading-relaxed">
                  {warrior.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <MainFooter/>
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

export default Aboutus;
