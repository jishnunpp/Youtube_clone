import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appslice";
import { useSearchParams } from "react-router-dom";
import { COMMENT_API_KEY } from "../utils/constant";
import CommentContainer from "./CommentContainer";

const Watchpage = () => {
  const [searchparams] = useSearchParams();
  console.log(searchparams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  // useEffect(() => {
  //   getComment();
  // }, []);

  // const getComment = async () => {
  //   const data = await fetch(COMMENT_API_KEY);
  //   const json = await data.json();
  //   // console.log(json.items);

  //   console.log(json);
  // };
  return (
    <div className="p-4">
      <iframe
        width="900"
        height="350"
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
        <CommentContainer/>
      </div>
    </div>
  );
};

export default Watchpage;
