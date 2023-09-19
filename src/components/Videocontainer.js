import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";


const Videocontainer = () => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    //  console.log(json.items);
    setVideo(json.items);
  };
  // console.log(video);

  return (video.length===0)?<Shimmer/>:(
    <div className="flex flex-wrap">
      {video.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          {" "}
          <VideoCard key={video.id} info={video} />{" "}
        </Link>
      ))}

      
     
    </div>
  );
};

export default Videocontainer;
