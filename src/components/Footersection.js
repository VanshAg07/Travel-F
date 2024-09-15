import React from 'react';
import { Link } from 'react-router-dom';

const FooterSection = () => {
  return (
    <div className="bg-cyan-500 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Upper Section with Icons (Optional) */}
        <div className="flex justify-center mb-8">
          {/* Add your SVG icons or images here */}
          <img src="/path-to-your-icons/icons.png" alt="Icons" className="w-full h-auto" />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* About Us */}
          <div className="md:col-span-2">
            <h2 className="font-bold text-2xl mb-4">About Us</h2>
            <p className="leading-relaxed">
            TravelloTen india Private Limited is a specialist for Travel &
          Transport serving exclusively the academic sector by arranging
          educational & fun tours for students of every age all over India. We
          are different as we educate and inform students about
          historical/geographical/cultural values etc. wherever the tour takes
          place. We also doing school tour , colleges tour , corporate tour &
          Family's tour for all place in India. We have over many years combined
          experience in providing the almost in quality, authenticity and
          service in the group travel industry. We have strong hold in the
          domestic market as well. We believe in “Service with quality & Smile”.
          We use the best system for operations which adds “Valued Efficiency”
          to our teamwork thus making hospitality not a business affair but a
          “Commitment & Pledge” towards client’s satisfaction. At Travello10
          understand that planning a group trip can be a lot of work and that is
          why we believe in providing value every step of the way.
            </p>
          </div>

          {/* Weekend Trips */}
          <div>
            <h2 className="font-bold text-2xl mb-4">Weekend Trips</h2>
            <ul>
              <li>Bir Billing</li>
              <li>Chopta Tungnath</li>
              <li>Kasol Kheerganga</li>
              <li>Tirthan Valley</li>
              <li>Manali Solang</li>
            </ul>
          </div>

          {/* Backpacking Trips */}
          <div>
            <h2 className="font-bold text-2xl mb-4">Backpacking Trips</h2>
            <ul>
              <li>Himachal Backpacking</li>
              <li>Spiti Valley</li>
              <li>Ladakh Trips</li>
              <li>Meghalaya Backpacking</li>
              <li>Kashmir Backpacking</li>
            </ul>

            <h2 className="font-bold text-2xl mt-8 mb-4">Blogs</h2>
            <ul>
              <li>Beautiful Places to Visit in Spring in India</li>
              <li>Workcations: The New Trend of Travel</li>
              <li>Breathtaking Monasteries of Ladakh</li>
              <li>Soul-Satisfying things to do in Spiti Valley</li>
              <li>Mesmerizing Waterfalls of Meghalaya to Visit</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-bold text-2xl mb-4">Quick Links</h2>
            <ul>
            <Link to='/Privcy'>  <li>Privacy Policy</li></Link>
            <Link to="/Cancellation"> <li>Cancellation Policy</li></Link> 
             <Link to="/Termcondition"> <li>Terms & Conditions</li></Link>
             <Link to="/Disclaimer"> <li>Disclaimer</li> </Link>
             <Link> <li>Careers</li></Link>
              <li>About Us</li>
              <li>Payments</li>
            </ul>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="fixed bottom-8 right-8">
          <button className="bg-white text-cyan-500 p-4 rounded-full shadow-lg">
            ↑
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
