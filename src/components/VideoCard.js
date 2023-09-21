import React from "react";
import PropTypes from "prop-types";

function VideoCard({ info }) {
  
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 shadow-lg   w-52">
      <img
        className="rounded-lg"
        alt="thumbnails"
        src={thumbnails.medium.url}
      />

      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}  views</li>
      </ul>
    </div>
  );
}
VideoCard.propTypes = {
  info: PropTypes.object.isRequired,
};

export  const AddVideoCard=({info})=>{
  
  return(
<div className="border-solid border-2 border-red-500 ">
<VideoCard info={info}/>

</div>
  )
}

AddVideoCard.propTypes = {
  info: PropTypes.object.isRequired,
};
export default VideoCard;
