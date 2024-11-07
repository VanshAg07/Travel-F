import React, { useState, useEffect } from "react";
import "./VideoModal.css";
import VideoCard from "../components/Reels/VideoCard";
// import db from "./firebase";

function VideoModal() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchReelVideo = async () => {
      try {
        const response = await fetch("https://api.travello10.com/api/reel/reels");
        const data = await response.json();
        setVideos(data); // Assuming data is an array of video objects
        if (data.length > 0) {
          setSelectedVideo(`https://api.travello10.com/upload/${data[0].video[0]}`);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchReelVideo();
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(({ videoTitle, video, videoSubtitle, urlLink }) => (
          <VideoCard
            key={videoTitle} // Using videoTitle as the key
            videoTitle={videoTitle}
            videoSubtitle={videoSubtitle}
            video={video}
            url={`https://api.travello10.com/upload/${video[0]}`}
            link={urlLink}
          />
        ))}
      </div>
    </div>
  );
}

export default VideoModal;
