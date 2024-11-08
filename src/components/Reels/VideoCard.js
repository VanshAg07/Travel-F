import React, { useRef, useState } from "react";
import "./VideoCard.css";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";
import { useNavigate } from "react-router-dom";

function VideoCard({
  url,
  likes,
  shares,
  channel,
  avatarSrc,
  song,
  videoTitle,
  videoSubtitle,
}) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const onVideoPress = () => {
    if (isVideoPlaying) {
      //stop
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      //play
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };
  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="videoCard">
      <div onClick={handleBack}>
        <VideoHeader />
      </div>
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard__player"
        src={url}
        alt="IG reel video"
        loop
        autoPlay
        muted
      />
      {/* <VideoHeader /> */}
      <VideoFooter
        channel={channel}
        likes={likes}
        shares={shares}
        avatarSrc={avatarSrc}
        song={song}
        title={videoTitle}
        videoSubtitle={videoSubtitle}
      />
    </div>
  );
}

export default VideoCard;
