import React from 'react';
import './Videopage.css';
import video from '../img/bg-v.mp4';
import review from "../img/vp-img.png";

const Videopage = () => {
  return (
    <div className='w-full h-full relative'>
      <h1 className='videopg-h1'>
        <span className='line1'><span className='sp-1'>EXPLORE</span> THE WORLD</span>
        <span className='line2'>WITH <span className='sp-1'>TRAVELLO10</span></span>
      </h1>
      <p className='videopg-p'>Book trips and explore new destinations with ease from anywhere</p>
      <img src={review} className='review-image' alt='Review' />
      <video 
        src={video} 
        autoPlay 
        loop 
        muted 
        className='video-video'
      ></video>
    </div>
  );
};

export default Videopage;

