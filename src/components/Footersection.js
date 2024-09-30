import React from 'react';
import { Link } from 'react-router-dom';

const FooterSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-950 to-blue-600 text-white w-full ">
      <div className="py-12 px-4 md:px-16 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full max-w-screen-xl">
          {/* About Us Section */}
          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="font-bold text-3xl mb-4 text-center md:text-left">About Us</h2>
            <p className="leading-relaxed text-gray-300 text-sm md:text-base">
              TravelloTen India Private Limited specializes in Travel & Transport services, exclusively for the academic sector. We arrange educational & fun tours for students all over India, providing insights on history, geography, and culture. Our services extend to school tours, college tours, corporate tours, and family trips across India. With years of experience, we ensure quality, authenticity, and exceptional service. We believe in “Service with Quality & Smile.”
            </p>
          </div>
          
          {/* Weekend Trips Section */}
          <div className="text-center md:text-left">
            <h2 className="font-bold text-2xl mb-4">Weekend Trips</h2>
            <ul className="text-gray-300 space-y-2 text-sm md:text-base">
              <li><Link to="#" className="hover:text-yellow-300">Bir Billing</Link></li>
              <li><Link to="#" className="hover:text-yellow-300">Chopta Tungnath</Link></li>
              <li><Link to="#" className="hover:text-yellow-300">Kasol Kheerganga</Link></li>
              <li><Link to="#" className="hover:text-yellow-300">Tirthan Valley</Link></li>
              <li><Link to="#" className="hover:text-yellow-300">Manali Solang</Link></li>
            </ul>
          </div>
          
          {/* Backpacking Trips Section */}
          <div className="text-center md:text-left">
            <h2 className="font-bold text-2xl mb-4">Backpacking Trips</h2>
            <ul className="text-gray-300 space-y-2 text-sm md:text-base">
              <li><Link to="#" className="hover:text-yellow-300">Himachal Backpacking</Link></li>
              <li><Link to="#" className="hover:text-yellow-300">Spiti Valley</Link></li>
              <li><Link to="#" className="hover:text-yellow-300">Ladakh Trips</Link></li>
              <li><Link to="#" className="hover:text-yellow-300">Meghalaya Backpacking</Link></li>
              <li><Link to="#" className="hover:text-yellow-300">Kashmir Backpacking</Link></li>
            </ul>

            <h2 className="font-bold text-2xl mt-8 mb-4">Blogs</h2>
            <ul className="text-gray-300 space-y-2 text-sm md:text-base">
              <li><Link to="#" className="hover:text-yellow-300">Beautiful Places to Visit in Spring</Link></li>
              <li><Link to="#" className="hover:text-yellow-300">Workcations: The New Trend of Travel</Link></li>
              <li><Link to="#" className="hover:text-yellow-300">Monasteries of Ladakh</Link></li>
              <li><Link to="#" className="hover:text-yellow-300">Things to Do in Spiti Valley</Link></li>
              <li><Link to="#" className="hover:text-yellow-300">Waterfalls of Meghalaya</Link></li>
            </ul>
          </div>
          
          {/* Quick Links Section */}
          <div className="text-center md:text-left">
            <h2 className="font-bold text-2xl mb-4">Quick Links</h2>
            <ul className="text-gray-300 space-y-2 text-sm md:text-base">
              <li><Link to="/Privcy" className="hover:text-yellow-300">Privacy Policy</Link></li>
              <li><Link to="/Cancellation" className="hover:text-yellow-300">Cancellation Policy</Link></li>
              <li><Link to="/Termcondition" className="hover:text-yellow-300">Terms & Conditions</Link></li>
              <li><Link to="/Disclaimer" className="hover:text-yellow-300">Disclaimer</Link></li>
              <li><Link to="/Aboutus" className="hover:text-yellow-300">About Us</Link></li>
              <li><Link to="/Payments" className="hover:text-yellow-300">Payments</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
