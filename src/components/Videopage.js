import React from 'react'
import './Videopage.css'
import video from '../img/48668-455853174_medium.mp4'

const Videopage = () => {
  return (
    <div className='w-full h-full'>
    <h1 className='videopg-h1'>Discover the real value of travel</h1>
      <video 
        src={video} 
        autoPlay 
        loop 
        muted 
        style={{ height: '100vh' }} 
        className='w-full object-cover'
      ></video>
      
    </div>
  )
}

export default Videopage