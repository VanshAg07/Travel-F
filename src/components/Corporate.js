import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "./Nav";
import Footer from "../Footer";
import "./Places.css";
import bg from "../img/india.jpg";
import Whyuss from "./Whyuss";
import FooterSection from "./Footersection";
import review from "../img/reviews.png";
import Form from "./Form";
import Superpower from "./Superpower";
import Beyondordinary from "./Beyondordinary";
import Corpohero from "./Corpo-hero";
import Servicecorpo from "./Services-corpo";
import ClienteleHallOfFame from "./Clients-corpo";
import Image1 from "../images/corporateImage.jpg";
const Corporate = () => {
  const [expandedMore, setExpandedMore] = useState(false);

  const toggleReadMoreText = () => {
    setExpandedMore(!expandedMore);
  };

  return (
    <>
      <Nav />
      <div className="place-container">
        <div className="place-hero">
          <img className="pl-img" src={bg} alt="Background" />
          <img src={review} className="review-img" alt="Review" />
          <div>
            <h1>Corporate Tours</h1>
            <p>Elevate Your Team: Uniting Business and Adventure</p>
          </div>
        </div>
        <div className="justify-center items-center flex flex-col w-full ">
          <h1 className="all-packages-heading">
            Unleash the Excitement in Corporate Tours
          </h1>
          <div className="flex flex-row w-full ">
            <div className=" flex flex-col ml-56">
              <p className="text-yellow-400 text-3xl mt-10 text-center ">
                Transform Your Corporate Journey with Us
              </p>
              <p>
                Give your Corporate Trips a much-needed change and add a dash of
                adventure with WanderOn’s brand-new MICE Tourism. Say bye to
                those boring boardroom gatherings and say hello to an era where
                business meets adventure. Our MICE tour packages are designed to
                foster team bonding, ignite creativity, and dazzle your senses
                in the most amazing way.
              </p>
              {expandedMore && (
                <>
                  <p>
                    With WanderOn, it's not just business as usual; it's
                    business mixed with an extraordinary dash of excitement!
                    Let's turn those office outings into legendary tales of
                    thrill and connections. Welcome to the new era of corporate
                    travel!
                  </p>
                  <div className="mt-10">
                    <p className=" font-bold text-2xl text-yellow-500">
                      What Is MICE Tourism?
                    </p>
                    <p className="mt-3">
                      MICE Tourism stands for Meetings, Incentives, Conferences
                      and Exhibitions. It is a niche segment of tourism tailored
                      to meet the needs of business and professional
                      organisations. It combines aspects of business and leisure
                      travel, providing a comprehensive platform for corporate
                      meetings, rewarding incentive trips, educational
                      conferences, and engaging exhibitions. In simple words,
                      it’s basically you organising your meetings, conferences
                      and rewarding employees in exotic destinations.
                    </p>
                    <p className="font-bold mt-5 mb-2 ">Meeting Trips</p>
                    <p>
                      Meetings Trips are professional meetings or gatherings
                      focused on business objectives, networking and
                      collaboration. These trips often involve stakeholders from
                      various locations converging in a single venue to discuss
                      corporate matters, and strategize or foster business
                      relationships. The primary goal of Meetings Trips in MICE
                      Tourism is to provide a conducive environment that
                      promotes effective communication, decision making and
                      problem solving.
                    </p>
                    <p className="font-bold mt-5 mb-2">Incentive Tourism</p>
                    <p>
                      Incentive Tourism is a motivational tool used by
                      businesses to reward and encourage their employees or
                      clients. This aspect of MICE Tourism is about crafting
                      unique travel experiences that serve as a reward for
                      achieving certain business goals or performance
                      benchmarks. Incentive Tourism not only serves as a token
                      of appreciation but also as a powerful motivator for
                      future performance.
                    </p>
                    <p className="font-bold mt-5 mb-2">Conference Trips</p>
                    <p>
                      Conference Trips, an integral component of MICE Tourism
                      are large scale gatherings aimed at education, knowledge
                      sharing and networking within specific industries or
                      fields. These trips offer a platform for professionals to
                      discuss recent advancements, share research and explore
                      future trends.
                    </p>
                    <p className="font-bold mt-5 mb-2">Exhibition Trips</p>
                    <p>
                      Exhibition Trips in MICE Tourism involve travelling to
                      locations where trade shows, expos and industry
                      exhibitions are held. These trips are crucial for
                      companies looking to showcase their products or services,
                      explore new markets and establish business contacts.
                    </p>
                  </div>
                  <div className="mt-10">
                    <p className=" font-bold text-2xl text-yellow-500">
                      Why You Should Opt For MICE Tourism?
                    </p>
                    <p>
                      MICE Tourism, which stands for Meetings, Incentives,
                      Conferences and Exhibitions, is a crucial segment for
                      corporates. Here's why it's so important for your
                      organisation.
                    </p>
                    <p className="font-bold mt-5 mb-2 ">
                      1. Fosters Innovation And Creativity:
                    </p>
                    <p>
                      MICE Tourism removes employees from the same old
                      atmosphere of traditional office spaces and places them in
                      stimulating new environments. This change of scenery can
                      spark creativity, leading to innovative ideas and
                      solutions. Experiencing different cultures and settings
                      can inspire fresh thinking and perspective.
                    </p>
                    <p className="font-bold mt-5 mb-2 ">
                      2. Boosts Morale And Motivation:
                    </p>
                    <p>
                      Incentive trips reward employees for their hard work,
                      serving as a powerful tool for motivation. Recognising
                      achievements with travel incentives can improve employee
                      satisfaction, loyalty and retention. It's a tangible way
                      to show appreciation, which can significantly boost
                      morale.
                    </p>
                    <p className="font-bold mt-5 mb-2 ">
                      3. Enhances Team Building and Collaboration:
                    </p>
                    <p>
                      Travelling together allows colleagues to interact in a
                      more relaxed and informal setting, which can strengthen
                      team bonds. Group activities and challenges during MICE
                      trips can enhance teamwork skills and improve
                      communication, leading to more effective collaboration
                      back in the office.
                    </p>
                    <p className="font-bold mt-5 mb-2 ">
                      4. Professional Development Opportunities:
                    </p>
                    <p>
                      Conferences and exhibitions are integral parts of MICE
                      Tourism, providing opportunities for professional
                      development. Employees can attend workshops, seminars and
                      networking events gaining new skills and knowledge that
                      they can bring back to their roles.
                    </p>
                    <p className="font-bold mt-5 mb-2 ">
                      5. Encourages Work-Life Balance:
                    </p>
                    <p>
                      MICE trips often combine business elements with leisure
                      activities, showing employees that the company values
                      their work-life balance. This approach can reduce burnout
                      and increase job satisfaction, leading to a happier, more
                      productive workforce.
                    </p>
                    <p className="font-bold mt-5 mb-2 ">
                      6. Offers Networking Opportunities:
                    </p>
                    <p>
                      MICE events are excellent for networking, allowing
                      businesses to connect with industry leaders, potential
                      clients and vendors. These interactions can lead to
                      partnerships, sales and expansions of professional
                      networks that are invaluable for business growth.
                    </p>
                    <p className="font-bold mt-5 mb-2 ">
                      7. Increases Cultural Competence:
                    </p>
                    <p>
                      International MICE Tourism exposes employees to new
                      cultures and business practices increasing their cultural
                      awareness and competence. This is particularly beneficial
                      for companies looking to expand or operate globally.
                    </p>
                  </div>

                  <div className="mt-10">
                    <p className=" font-bold text-2xl text-yellow-500">
                      Here’s What We Offer With Our MICE Travel Services
                    </p>
                    <p className="font-bold mt-5 mb-2 ">
                      1. Personalised Itineraries:
                    </p>
                    <p>
                      At WanderOn, we believe that the key to unforgettable MICE
                      Travel lies in the personal touch. That's why our MICE
                      Packages are crafted to meet the unique needs and
                      preferences of each corporate client.
                    </p>
                    <p>
                      With a deep understanding of the varied objectives that
                      MICE Travel serves, we ensure that every detail, from the
                      destination to the daily schedule, aligns perfectly with
                      your company's goals.
                    </p>
                    <p>
                      Our personalised itineraries are not just about locations;
                      they are experiences, meticulously tailored to inspire,
                      motivate, and reward. Choose our MICE Packages for a
                      journey that is as unique as your team and as ambitious as
                      your business vision.
                    </p>
                    <p className="font-bold mt-5 mb-2 ">2. Expertise:</p>
                    <p>
                      Our MICE Tour Packages are crafted by a team of
                      knowledgeable MICE specialists who bring a wealth of
                      expertise to your corporate travel experience. These
                      professionals are adept at designing MICE Tour Packages
                      that seamlessly integrate business with leisure ensuring a
                      perfect blend of productivity and relaxation.
                    </p>
                    <p>
                      With their deep understanding of the nuances of MICE
                      travel, our specialists tailor each package to meet your
                      specific objectives, whether it's inspiring innovation,
                      rewarding performance, or fostering team unity.
                    </p>
                    <p className="font-bold mt-5 mb-2 ">3. 24x7 Support:</p>
                    <p>
                      Our MICE Travel Service is defined by round-the-clock
                      support, ensuring that every aspect of your corporate
                      event unfolds without a hitch. Our dedicated 24/7
                      assistance is a cornerstone of our MICE Travel Service,
                      providing peace of mind and immediate solutions no matter
                      the time or place.
                    </p>
                    <p>
                      Whether it's a last-minute change in the itinerary or an
                      unexpected request, our responsive team is always on
                      standby. We strive to anticipate and address your needs,
                      ensuring that your MICE experience is seamless,
                      stress-free, and wholly conducive to the success of your
                      event.
                    </p>
                    <p className="font-bold mt-5 mb-2 ">4. Visa Assistance:</p>
                    <p>
                      Embarking on MICE journeys often involves navigating the
                      complex world of international travel regulations. That's
                      where our MICE Travel Service shines. We understand the
                      nitty-gritty of securing travel visas for diverse global
                      destinations.
                    </p>
                    <p>
                      With our dedicated MICE Travel Service, you'll receive
                      expert guidance on all visa requirements, ensuring a
                      smooth and hassle-free process for your entire corporate
                      group. We handle the paperwork, communicate with
                      embassies, and offer up-to-date advice so your focus
                      remains on the upcoming event, not the red tape.
                    </p>
                    <p className="font-bold mt-5 mb-2 ">5. Trip Videos:</p>
                    <p>
                      Our dedicated content team specialises in capturing the
                      essence of your MICE Tourism adventures, ensuring that
                      every significant moment of your trip is immortalized.
                      With expertise in MICE Tourism, they know exactly how to
                      showcase the unique blend of business and leisure that
                      defines these trips.
                    </p>
                    <p>
                      From the excitement of team-building activities to the
                      grandeur of conferences, our team expertly crafts videos
                      that not only document your journey but also tell a
                      compelling story. These professionally captured memories
                      serve as a powerful tool to reflect on the success and
                      enjoyment of your MICE Tourism.
                    </p>
                  </div>

                  <div className="mt-10">
                    <p className=" font-bold text-2xl text-yellow-500">
                      Some Of The Clients We’ve Worked For
                    </p>
                    <p className="font-bold mt-5 mb-2 ">
                      1. Japan For High Level:
                    </p>
                    <p>
                      WanderOn recently organized an extraordinary MICE Tour for
                      High Level, a global company renowned for its
                      forward-thinking approach and distributed team.
                      Recognizing the unparalleled value of in-person
                      interactions, High Level sought WanderOn's expertise to
                      create a memorable experience that would unite their team
                      in a profound way.
                    </p>
                    <p>
                      The mission was ambitious: to bring nearly 200 High Level
                      employees together from various parts of the world,
                      bridging gaps across time zones, languages, and cultures.
                      The destination chosen for this grand endeavour was Japan,
                      a land where ancient tradition and cutting-edge innovation
                      exist in harmony.
                    </p>
                    <p>
                      WanderOn's meticulous planning was crucial for the success
                      of the tour. The logistics, which included obtaining
                      visas, booking flights, and arranging accommodations, were
                      managed so smoothly that the participants needed only to
                      pack their bags and set off on their adventure,
                      worry-free.
                    </p>
                    <p>
                      A pivotal aspect of this tour was WanderOn's strategic
                      partnership with the Tourism Board of Japan. This alliance
                      went beyond mere logistics; it was an immersive cultural
                      celebration. Participants were not just tourists but
                      became active parts of Japan's rich tapestry of heritage
                      and modernity. The experience was designed to rejuvenate
                      the spirit and stimulate the mind, providing a refreshing
                      break from the daily grind.
                    </p>
                    <p>
                      Team-building was at the heart of this journey. WanderOn
                      crafted a series of team-building activities that were not
                      just fun but also integral in fostering stronger bonds
                      among the High Level employees. These activities were
                      thoughtfully designed to encourage collaboration, trust,
                      and a deeper sense of community within the team.
                    </p>
                    <p>
                      As the days unfolded, from the serene sunsets behind
                      Kyoto's temples to the vibrant pulse of Tokyo's neon-lit
                      streets, the group found themselves transforming. They had
                      arrived in Japan as colleagues but would leave as
                      something much more—a family with strengthened ties and a
                      shared sense of accomplishment.
                    </p>
                    <p>
                      This MICE Tour was more than just a trip; it was a
                      metamorphosis. High Level's employees returned to their
                      respective homes carrying with them not just souvenirs,
                      but also a renewed sense of unity, growth and a collective
                      energy to drive forward into the future.
                    </p>
                    <p className="font-bold mt-5 mb-2 ">
                      2. Spiti Valley For TVS:
                    </p>
                    <p>
                      TVS, with a workforce eager for adventure beyond the
                      confines of the office, chose WanderOn to transform this
                      collective desire into an exhilarating reality. Over the
                      course of their collaboration, WanderOn organized not just
                      one, but over 10 thrilling bike tours for TVS. These were
                      no ordinary outings; they were voyages to some of the most
                      stunning and untamed locales across India and overseas.
                    </p>
                    <p>
                      Picture this: a group of 50 TVS employees, donning their
                      helmets, with the engines of their bikes roaring in
                      unison, all set to conquer some of the world's most
                      daunting terrains. WanderOn's impeccable planning ensured
                      that every detail was addressed. The accommodations were a
                      diverse mix—ranging from snug lodges tucked away in the
                      mountains to luxurious tents under the vast celestial
                      canopy, providing comfort in the heart of the wilderness.
                    </p>
                    <p>
                      But WanderOn's role extended far beyond just organizing
                      the tours. They were the unseen backbone, providing
                      essential mechanical and medical support. This
                      comprehensive backup was pivotal, especially when the
                      unpredictable nature of adventure travel meant dealing
                      with the occasional hiccup on the road.
                    </p>
                    <p className="font-bold mt-5 mb-2 ">
                      3. Multiple Indian Destinations For Paytm:
                    </p>
                    <p>
                      WanderOn crafted a series of engaging MICE Tours for
                      Paytm, offering a refreshing deviation from the daily 9 to
                      5 grind. Recognizing the power of team outings to
                      strengthen bonds and break the routine, these tours were
                      designed not just as trips, but as transformative
                      experiences across various picturesque locales in India.
                    </p>
                    <p>
                      A vibrant group of 60 Paytm employees, each filled with a
                      sense of adventure, setting out on a journey meant to
                      enhance camaraderie and teamwork. WanderOn was at the
                      forefront, meticulously orchestrating every aspect of
                      these outings. From handpicking destinations that provided
                      the perfect setting for team activities to ensuring
                      comfortable and serene accommodations, every detail was
                      carefully curated.
                    </p>
                    <p>
                      What truly made these tours stand out were the bespoke
                      experiences tailored for Paytm's team. Understanding the
                      essence of unity and collaboration, WanderOn put a
                      spotlight on team-building exercises. These activities,
                      ranging from creative problem-solving challenges to
                      thrilling adventures, were designed to test and strengthen
                      the team's dynamics, fostering a spirit of cooperation and
                      mutual support.
                    </p>
                    <p>
                      MICE Tourism isn't just about travel; it's about embarking
                      on journeys that transform teams and businesses. It's
                      where meetings, incentives, conferencing and exhibitions
                      converge to create experiences that go beyond boardrooms
                      and spreadsheets. Through MICE, connections are deepened,
                      ideas are born and horizons are broadened. It's the
                      perfect blend of business with pleasure, where every
                      destination becomes a backdrop for growth and every
                      itinerary, a blueprint for new beginnings.
                    </p>
                  </div>
                </>
              )}
              {!expandedMore && (
                <button
                  onClick={toggleReadMoreText}
                  className="flex justify-end"
                >
                  Read More
                </button>
              )}
              {expandedMore && (
                <button
                  onClick={toggleReadMoreText}
                  className="flex justify-end"
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
        </div>
        <div className="mx-48">
          <Superpower />
          <Beyondordinary />
        </div>
        <Corpohero />
        <Form />
        <Servicecorpo />
        <ClienteleHallOfFame />
        <Whyuss />
      </div>
      <FooterSection />
      <Footer />
    </>
  );
};

export default Corporate;
