import React from 'react';
import { Link } from 'react-router-dom';

const FooterSection = () => {
  return (
    <div className="bg-cyan-500 text-white py-10 px-36">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-5  gap-8">
          {/* About Us */}
          <div className="md:col-span-2 w-[75%] float-right">
            <h2 className="font-bold text-2xl mb-4">About Us</h2>
            <p className="leading-relaxed text-[#fffff9d5]">
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
            </p>
          </div>

          {/* Weekend Trips */}
          <div>
            <h2 className="font-bold text-2xl mb-4">Weekend Trips</h2>
            <ul className='text-[#fffff9d5]'>
             <Link> <li>Bir Billing</li></Link>
             <Link> <li>Chopta Tungnath</li></Link>
           <Link>   <li>Kasol Kheerganga</li></Link>
            <Link>  <li>Tirthan Valley</li></Link>
             <Link> <li>Manali Solang</li></Link>
            </ul>
          </div>

          {/* Backpacking Trips */}
          <div>
            <h2 className="font-bold text-2xl mb-4">Backpacking Trips</h2>
            <ul className='text-[#fffff9d5]'>
             <Link> <li>Himachal Backpacking</li></Link>
             <Link> <li>Spiti Valley</li></Link>
             <Link><li>Ladakh Trips</li></Link>
             <Link> <li>Meghalaya Backpacking</li></Link>
             <Link> <li>Kashmir Backpacking</li></Link>
            </ul>

            <h2 className="font-bold text-2xl mt-8 mb-4">Blogs</h2>
            <ul className='text-[#fffff9d5]'>
            <Link>  <li>Beautiful Places to Visit in Spring in India</li></Link>
            <Link> <li>Workcations: The New Trend of Travel</li></Link>
            <Link>  <li>Breathtaking Monasteries of Ladakh</li></Link>
            <Link>  <li>Soul-Satisfying things to do in Spiti Valley</li></Link>
            <Link>  <li>Mesmerizing Waterfalls of Meghalaya to Visit</li></Link>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-bold text-2xl mb-4">Quick Links</h2>
            <ul className='text-[#fffff9d5]'>
            <Link to='/Privcy'>  <li>Privacy Policy</li></Link>
            <Link to="/Cancellation"> <li>Cancellation Policy</li></Link>
             <Link to="/Termcondition"> <li>Terms & Conditions</li></Link>
             <Link to="/Disclaimer"> <li>Disclaimer</li> </Link>
              <li>About Us</li>
              <li>Payments</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;