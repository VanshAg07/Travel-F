import React from "react";
import "./VideoFooter.css";
import { Avatar, Button } from "@mui/material"; // Updated for MUI v5
import { RiShareFill } from "react-icons/ri";
import logo from "../../img/logo.png"; // Updated for MUI v
function VideoFooter({ title, videoSubtitle, urlLink }) {
  return (
    <div className="bottom-20">
      <div className="videoFooter__text">
        <div className="flex flex-row items-center justify-center gap-5">
          <Avatar src={logo} className="border-2 " />
          <h3>Travello10</h3>
        </div>
        <div className="bg-black bg-opacity-15 w-full ml-16">
          <p className="">{title}</p>
          <p className="">{videoSubtitle}</p>
        </div>
      </div>
      <div className="absolute right-5 bottom-28">
        <div className="">
          <RiShareFill size={30} color="white" />
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;