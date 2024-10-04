import React, { useState } from "react";
import Nav from "./Nav";
import "./Places.css";
import bg from "../img/india.jpg";
import Whyuss from "./Whyuss";
import Superpower from "./Superpower";
import Beyondordinary from "./Beyondordinary";
import Corpohero from "./Corpo-hero";
import Servicecorpo from "./Services-corpo";
import ClienteleHallOfFame from "./Clients-corpo";
import Image1 from "../images/corporateImage.jpg";
import Dropnav from "../components/Dropnav";
import cont from "../img/cont-button.json";
import Lottie from "lottie-react";
import  Mainreview from "../components/Mainreview";
import MainFooter from "./Footer/MainFooter";
import Forms from "./Forms";
const Corporate = () => {
  const [expandedMore, setExpandedMore] = useState(false);

  const toggleReadMoreText = () => {
    setExpandedMore(!expandedMore);
  };
  const whatsappMessage = "Hello, I need assistance with my issue.";

  return (
    <>
      <Nav />
      <Dropnav />
      <div className="place-container">
        <div className="place-hero">
          <img className="pl-img" src={bg} alt="Background" />
          <div>
            <h1>Corporate Tours</h1>
            <p>Elevate Your Team: Uniting Business and Adventure</p>
          </div>
        </div>
      <Mainreview/>

        {/* <div className="justify-center items-center flex flex-col w-full ">
          <h1 className="all-packages-heading">
            Unleash the Excitement in Corporate Tours
          </h1>
          <div className="flex flex-row w-full ">
            <div className=" flex flex-col ml-56">
              <p className="text-yellow-400 text-3xl mt-10 text-center ">
                Elevate Your Team’s Spirit with a Corporate Trip
              </p>
              <p>
                In today’s fast-paced corporate world, team bonding and
                rejuvenation are key to sustaining high performance. What better
                way to foster collaboration and creativity than with an
                unforgettable corporate trip? Our tailor-made corporate travel
                packages ensure a seamless blend of work and leisure, leaving
                your team refreshed and inspired.
              </p>
              {expandedMore && (
                <>
                  <p className="font-bold mt-5 mb-2">Conference Trips</p>
                  <p>
                    * Build Team Camaraderie: Step outside the office
                    environment and foster stronger relationships through shared
                    experiences.<br></br>* Boost Creativity: A change of scenery
                    sparks fresh ideas and innovation.<br></br>* Relax and
                    Recharge: Balance work with relaxation, ensuring your team
                    returns revitalized.<br></br>* Incentive for Excellence:
                    Reward top performers with a travel experience that
                    motivates the entire team.<br></br>
                  </p>
                  <p className="font-bold mt-5 mb-2">
                    Custom Corporate Travel Solutions
                  </p>
                  <p>
                    Our travel agency provides personalized solutions for
                    corporate outings, whether it’s a weekend retreat, a
                    leadership workshop, or a destination conference. We handle
                    everything from accommodation and transport to team-building
                    activities and corporate dinners, ensuring a hassle-free
                    experience.
                  </p>
                  <div className="mt-10">
                    <p className=" font-bold text-2xl text-yellow-500">
                      MICE Corporate Trips: Elevating Business Travel
                    </p>
                    <p className="mt-3">
                      MICE (Meetings, Incentives, Conferences, and Exhibitions)
                      travel has become an essential part of corporate culture,
                      combining business with leisure and fostering team
                      bonding, innovation, and growth. As a travel agency,
                      offering tailored MICE tour packages ensures your clients
                      can host successful events in exciting destinations while
                      focusing on business goals. Let’s explore the types of
                      MICE tour packages available.
                    </p>
                    <p className="font-bold mt-5 mb-2 ">1. Meetings</p>
                    <p>
                      MICE packages for meetings are designed to provide
                      companies with ideal locations for important gatherings,
                      whether it’s for team meetings, client consultations, or
                      annual reviews. Packages often include venue arrangements,
                      transportation, accommodation, and technology support like
                      audio-visual equipment.
                    </p>
                    <p className="font-bold mt-5 mb-2">2. Incentives</p>
                    <p>
                      Incentive travel packages are rewards offered to employees
                      or business partners for achieving targets or goals. These
                      packages combine luxury experiences, such as retreats in
                      scenic locations, adventure activities, and wellness
                      programs, to motivate and reward top performers.
                    </p>
                    <p className="font-bold mt-5 mb-2">3. Conferences</p>
                    <p>
                      Conferences bring industry leaders, stakeholders, and
                      business partners together to share insights and
                      strategies. MICE tour packages for conferences typically
                      include large venue bookings, accommodation, logistics
                      management, catering, and entertainment, often in major
                      business hubs or scenic destinations.
                    </p>
                    <p className="font-bold mt-5 mb-2">4. Exhibitions</p>
                    <p>
                      Exhibition-focused MICE packages cater to businesses
                      showcasing products and services. These tours often
                      include event space rentals, exhibition booth setups,
                      travel arrangements for the team, and networking
                      opportunities to engage with potential clients or
                      partners.
                    </p>
                  </div>
                  <div className="mt-10">
                    <p className=" font-bold text-2xl text-yellow-500">
                      Why Choose MICE Corporate Trips?
                    </p>
                    <p>
                      MICE (Meetings, Incentives, Conferences, and Exhibitions)
                      corporate trips have become an indispensable tool for
                      businesses seeking to blend professional goals with team
                      building, motivation, and growth. Here are key reasons why
                      companies choose MICE corporate trips:
                    </p>
                    <p className="font-bold mt-5 mb-2 ">
                      1. Boosts Employee Morale and Productivity:
                    </p>
                    <p>
                      Incentive travel rewards top-performing employees,
                      offering a break from routine while recognizing their
                      contributions. It boosts morale, strengthens company
                      loyalty, and motivates teams to achieve better results.
                    </p>
                    <p className="font-bold mt-5 mb-2 ">
                      2. Enhances Team Building and Collaboration:
                    </p>
                    <p>
                      MICE events create opportunities for employees across
                      different departments or regions to connect, collaborate,
                      and share ideas in a relaxed, yet structured environment.
                      Corporate retreats, conferences, and team-building
                      activities foster stronger relationships, improving
                      teamwork and overall productivity.
                    </p>
                    <p className="font-bold mt-5 mb-2 ">
                      3. Strengthens Business Relationships:
                    </p>
                    <p>
                      Whether it’s a conference, exhibition, or client meeting,
                      MICE trips help companies engage with key stakeholders,
                      partners, and clients in a more personal and impactful
                      way. Face-to-face interactions during such events
                      strengthen long-term business relationships.
                    </p>
                    <p className="font-bold mt-5 mb-2 ">
                      4. Encourages Knowledge Sharing and Innovation:
                    </p>
                    <p>
                      Conferences and exhibitions provide platforms for industry
                      experts to share insights, innovations, and trends. By
                      attending these events, companies can stay ahead of
                      industry developments, gain valuable knowledge, and
                      explore growth opportunities.
                    </p>
                    <p className="font-bold mt-5 mb-2 ">
                      5. Streamlined Planning with Professional Support:
                    </p>
                    <p>
                      Choosing a MICE trip means businesses benefit from expert
                      planning and execution, allowing companies to focus on the
                      core purpose of the trip. Travel agencies take care of
                      logistics, accommodations, event venues, and leisure
                      activities, ensuring a seamless experience.
                    </p>
                    <p className="font-bold mt-5 mb-2 ">
                      6. Combines Business with Leisure:
                    </p>
                    <p>
                      MICE trips offer the perfect blend of business and
                      leisure, allowing participants to work and relax in
                      exciting destinations. From luxury resorts to cultural
                      tours, employees and partners can recharge while staying
                      engaged in professional activities.
                    </p>
                  </div>

                  <div className="mt-10">
                    <p className=" font-bold text-2xl text-yellow-500">
                      Here’s What We Offer With Our MICE Travel Services
                    </p>
                    <p>
                      At Travell10, we specialize in delivering exceptional MICE
                      travel services tailored to your business needs. MICE
                      (Meetings, Incentives, Conferences, and Exhibitions)
                      events are essential for companies looking to blend
                      corporate objectives with memorable experiences. From
                      team-building retreats to international conferences, we
                      offer comprehensive packages that make planning and
                      executing your business events stress-free and successful
                    </p>
                    <p className="font-bold mt-5 mb-2 ">
                      1. Tailored Meeting Solutions:
                    </p>
                    <p>
                      Whether it's a small team gathering or a high-stakes board
                      meeting, we offer customized solutions to ensure your
                      meetings are professional and productive. Our services
                      include venue selection, cutting-edge audio-visual setups,
                      on-site technical support, catering, and seamless
                      transportation. We work with you to create a setting that
                      aligns perfectly with your business goals.
                    </p>
                    <p className="font-bold mt-5 mb-2 ">
                      2. Incentive Travel That Motivates:
                    </p>
                    <p>
                      Reward your team with unforgettable incentive trips
                      designed to celebrate success and inspire future
                      achievements. We offer a range of exciting destinations
                      and experiences, from luxury retreats to adventure-filled
                      getaways, combining relaxation with team-building
                      activities. Let your top performers recharge while
                      building stronger bonds with their colleagues.
                    </p>
                    <p className="font-bold mt-5 mb-2 ">
                      3. Seamless Conference Planning:
                    </p>
                    <p>
                      Our comprehensive conference services are designed to
                      handle every aspect of large-scale business events. From
                      delegate management and travel arrangements to on-site
                      logistics and post-event entertainment, we ensure your
                      conference runs smoothly. We provide venue booking,
                      accommodation, speaker management, and technical support,
                      so you can focus on delivering valuable insights and
                      networking.
                    </p>
                    <p className="font-bold mt-5 mb-2 ">
                      4. Exhibition Expertise:
                    </p>
                    <p>
                      We take the complexity out of organizing exhibitions,
                      whether you’re hosting or attending. Our services include
                      booth design, event promotion, transportation of exhibits,
                      and coordination of exhibition spaces. We make sure your
                      brand stands out and connects with the right audience in a
                      professional and impactful way.
                    </p>
                  </div>

                  <div className="mt-10">
                    <p className=" font-bold text-2xl text-yellow-500">
                      Why Choose Our MICE Travel Services?
                    </p>
                    <p>
                      * Personalized Approach: Every business is unique, and so
                      are our MICE solutions. We tailor each event to match your
                      company's culture, goals, and preferences.
                    </p>
                    <p>
                      * Global Destinations: From serene resorts to bustling
                      business hubs, we offer a variety of destinations that
                      cater to both business and leisure.
                    </p>
                    <p>
                      * Expert Coordination: Our experienced team handles all
                      logistics, from venue booking to post-event entertainment,
                      ensuring a hassle-free experience.
                    </p>
                    <p>
                      * End-to-End Support: We manage every detail, including
                      transportation, accommodation, catering, and event
                      technology, leaving you free to focus on your business
                      objectives.
                    </p>
                  </div>
                  <div className="mt-10">
                    <p className=" font-bold text-2xl text-yellow-500">
                      Elevate Your Corporate Travel Experience
                    </p>
                    <p>
                      With our MICE travel services, your corporate events will
                      be more than just business. They’ll be an opportunity to
                      inspire, motivate, and connect. Let us help you create
                      successful events that leave a lasting impact on your team
                      and partners. Contact us today to start planning
                      your next MICE trip!
                    </p>
                  </div>
                </>
              )}
              {!expandedMore && (
                <button
                  onClick={toggleReadMoreText}
                  className="flex justify-end text-sky-600"
                >
                  Read More..
                </button>
              )}
              {expandedMore && (
                <button
                  onClick={toggleReadMoreText}
                  className="flex justify-end text-sky-600 "
                >
                  Read Less
                </button>
              )}
            </div>
            <div className="mt-16">
              <div className="w-[50%] ml-36 ">
                <img
                  src={Image1}
                  alt="Descriptive text here"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div> */}
        <div className="mx-48">
          <Superpower />
          <Beyondordinary />
        </div>
        <Corpohero />
        {/* <Forms /> */}
        <Servicecorpo />
        <ClienteleHallOfFame />
        <Whyuss />
      </div>
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

export default Corporate;
