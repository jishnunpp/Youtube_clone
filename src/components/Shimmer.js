import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(10)
        .fill("")
        .map((e) => (
          <div className="p-2 m-2 shadow-lg   w-52 h-64 bg-gray-200" key={23}>
            <div className="p-2 m-1   h-28 bg-gray-300 rounded-lg"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
