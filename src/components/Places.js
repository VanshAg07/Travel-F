import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Nav from './Nav';
import Footer from '../Footer';
import "./Places.css"; // Ensure this file has the styles defined above
import bg from "../img/india.jpg";
import Card from './3dCard';
import Whyus from '../Whyus';
import review from "../img/reviews.png";

import Hiking from './Hiking';
import Visit from './Visit';
import Food from './Food';
import Shop from './Shop';
import Form from "./Form";

const placesData = {
  1:{},
  2: { name: 'Place 2', description: 'Description for Place 2', img: '../img/international.jpg' },
  13:{},
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
      <Nav />
      <div className="place-container">
        <div className="place-hero">
          <img className='pl-img' src={bg} alt="Background" />
          <img src={review} className='review-img' alt='Review' />
          <div>
            <h1>Meghalaya Tour Packages</h1>
            <p>The Perfect Blend of Serenity and Adventure</p>
          </div>
        </div>
        <div>
          <h1 className="all-packages-heading">Featured Packages</h1>
          <div>
          <Link to={"/Packagedetails"}>  <Card /></Link>
          </div>
        </div>
        <div className='hiking-container'>
          <h1>Best activities to do in Meghalaya for a thrilling adventure</h1>
          <p>Meghalaya is an excellent place to create cherished memories with loved ones through its various breathtaking activities like trekking, river canyoning, hiking, and more. You can also enjoy the breathtaking views of nature here.</p>
       <Hiking/>
       <Hiking/>
       <Hiking/>
        </div>
        <div className='Visiting-container'>
          <h1>Beautiful Places To Visit In Meghalaya For A Blissful Vacay</h1>
          <p>Whether you're looking for an adrenaline rush or simply want to enjoy natural scenery, Meghalaya is the perfect place for you. It should be at the top of your list for your next getaway.</p>
      <Visit/>
       <Visit/>
       <Visit/>
        </div>
        <div className='food-container'>
          <h1>Places to Enjoy The Rich Flavors Of Meghalaya</h1>
          <p>Meghalaya, known as the abode of clouds, offers a diverse culinary experience with a range of traditional and modern food options. From local delicacies like Jadoh and Dohneiiong to global cuisines, the state has plenty of places to eat and explore.</p>
      <Food/>
      <Food/>
    </div>
    <div className='shop-container'>
          <h1>Best Places to shop in Meghalaya</h1>
          <p>Meghalaya, a northeastern state of India, offers a unique shopping experience with its vibrant local markets and handicrafts. Visitors can explore the bustling bazaars for traditional clothes, accessories, bamboo crafts, and food items.</p>
      <Shop/>
    <Shop/>
    </div>
      
        <div className="travel-guidelines1-container">
          <h1 className="guidelines1-heading">Himachal Pradesh Travel Guidelines</h1>
          <p className="guidelines1-description">The following are the travel guidelines for Himachal Pradesh as announced by the Himachal Pradesh Government latest on 04-08-2021.</p>
          <ol className="guidelines1-list">
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
        <div className='why'>
        <Whyus />
        </div>
           <Form />
      </div>
      <Footer />
    </>
  );
};

export default Place;
