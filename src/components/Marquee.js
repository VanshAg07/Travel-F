import React, { Component } from "react";

import './Marquee.css';
import img1 from '../img/dubai.jpg';
import img3 from '../img/Europe.jpg';
import img4 from '../img/bali.jpg';
import img5 from '../img/singapore.jpg';
import img7 from '../img/kashmir.jpg';
import img8 from '../img/rajasthan.jpg';
import img9 from '../img/kerala.jpg';
import img10 from '../img/leh.jpg';

export default class Marquee extends Component {
  componentDidMount(){
    fetch("https://travel-server-iley.onrender.com/userData",{
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer your-token'
    },
    body: JSON.stringify({
     token: window.localStorage.getItem("token"),
    })
    })
    .then((res)=> res.json())
    .then ((data)=>{
    console.log(data, "userData");  
    })
  }
  logOut= ()=>{
    window.localStorage.clear();
    window.location.href = "./Signup"
  }

  render() {
    const images = [
      { src: img1 },
      { src: img3 },
      { src: img4 },
      { src: img5 },
      { src: img7 },
      { src: img8 },
      { src: img9 },
      { src: img10 }
    ];

    // Duplicate the images array to create a seamless loop
    const duplicatedImages = [...images, ...images];

    return (
      <div className="marquee-container">
        <h1>Our most visited places</h1>
        <div className="marquee">
          {duplicatedImages.map((image, index) => (
            <img key={index} src={image.src} alt={`Image ${index + 1}`} className="marquee-image" />
          ))}
          
        </div>
        <div>
        <button onClick={this.logOut}>log out</button>
        </div>
      </div>
    );
  }
}