import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import video from "../img/bg-v.mp4"
import "./VideoModal.css"

function VideoModal({ isOpen, onClose, videoSrc }) {
  if (!isOpen) return null;

  return (
    <div className="fixed video-z inset-0 flex justify-center items-center bg-black bg-opacity-90">
      <div className="relative w-full h-full flex items-center justify-center">
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-3xl">
          <AiOutlineClose />
        </button>
        <video className="w-full h-full object-cover" src={video} controls autoPlay />
      </div>
    </div>
  );
}

export default VideoModal;
