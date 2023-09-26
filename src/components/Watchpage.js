import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appslice";
import { useSearchParams } from "react-router-dom";

import CommentContainer from "./CommentContainer";
import VideoDetails from "./VideoDetails";
import { YOUTUBE_API_KEY } from "../utils/constant";
import LiveChat from "./LiveChat";

const Watchpage = () => {
  const [searchparams] = useSearchParams();
  const [VideoDetail, setVideoDetails] = useState([]);
  // console.log(searchparams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    getVideosData();
  }, []);

  const getVideosData = async () => {
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    //  console.log(json.items);
    setVideoDetails(json.items);
  };

  return (
    <div className="w-full">
      <div className="p-4 flex  w-full ">
        <div >
          <iframe
            width="950"
            height="450"
            src={"https://www.youtube.com/embed/" + searchparams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
        
      </div>
      <div>
          <VideoDetails info={VideoDetail[0]} />

          <CommentContainer />
        </div>
    </div>
  );
};

export default Watchpage;
