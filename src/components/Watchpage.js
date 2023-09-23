import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appslice";
import { useSearchParams } from "react-router-dom";

import CommentContainer from "./CommentContainer";
import VideoDetails from "./VideoDetails";

const Watchpage = () => {
  const [searchparams] = useSearchParams();
  // console.log(searchparams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

 
  return (
    <div className="p-4">
      <iframe
        width="950"
        height="450"
        src={"https://www.youtube.com/embed/" + searchparams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      {/* <div>
        {"http://www.youtube.com/channel/"+searchparams.get("v")}
      </div> */}
      <div >
        <VideoDetails/>
        <CommentContainer/>
      </div>
    </div>
  );
};

export default Watchpage;
