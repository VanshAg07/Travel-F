import React from 'react';
import { useParams } from 'react-router-dom';
import Nav from './Nav';
import Footer from '../Footer';
import "./Places.css"; // Ensure this file has the styles defined above
import bg from "../img/india.jpg"
import Card from './3dCard';
import Whyus from '../Whyus';

const placesData = {
  1:{},
  2: { name: 'Place 2', description: 'Description for Place 2', img: '../img/international.jpg' },
  // Add more place data here with corresponding IDs
};

const Place = () => {
  const { id } = useParams();
  const place = placesData[id];

  if (!place) {
    return <div>Place not found.</div>;
  }

  return (
    <>
      <Nav/>
      <div className="place-container">
        <div className="place-hero">
          <img className='pl-img' src={bg} alt="Background"/>
          <div>
            <h1>Himachal Pradesh Tour Packages</h1>
            <p>Discover the Divine and Uncharted Realms of Adventure</p>
          </div>
        </div>
        <div>
        <h1 className="all-packages-heading">All Packages</h1>
      <p className="all-packages-description">
        Discover Your Dream Journey with Our Best-Selling Travel Packages
      </p>

      <div>
        <Card />
      </div>
        </div>
        <div class="travel-guidelines-container">
      <h1 class="guidelines-heading">Himachal Pradesh Travel Guidelines</h1>
      <p class="guidelines-description">The following are the travel guidelines for Himachal Pradesh as announced by the Himachal Pradesh Government latest on 04-08-2021.</p>
      <ol class="guidelines-list">
        <li>
        All tourists entering the territory of Himachal Pradesh need to have Aarogya Setu on their phones.
        </li>
        <li>
        Social Distancing should be maintained at all times in public places.
        </li>
        <li>
        Travellers need to have face masks on when travelling in public places.
        </li>
        <li>
        Washing of hands and the use of sanitizers is highly recommended by the government.
        </li>
      </ol>
    </div>
    <Whyus/>
      </div>
      <Footer/>
    </>
  );
};

export default Place;
