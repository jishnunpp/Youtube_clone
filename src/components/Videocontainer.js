import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../utils/constant";
// import VideoCard from "./VideoCard"

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
  console.log(video);

  return (
    <>
    {/* <VideoCard/> */}
    </>
  );
};

export default Videocontainer;
