import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appslice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constant";

import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQueary] = useState("");
  const [sugsestion, setSugsestion] = useState([]);
  const [showSugsetion, setShowsugsetion] = useState(false);

  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSugsestion(searchCache[searchQuery]);
      } else {
        getSearcheSugsestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearcheSugsestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();

    setSugsestion(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-3 m-2  sticky top-0 bg-white z-10 ">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 cursor-pointer "
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8iICGSkZIkHyEPDA3z8vIyMTEhGx40MDEeHB4jICEeHR4AAAAxMTEgHh4gHB3W1tYtKyyXlpe6uroKBQhzcnJ+fX7CwsKysrJmZWX19fXk5OQYFhc5ODgoJidta2xUVFRfXV7Kysqsq6yjo6MHDa+eAAAB8UlEQVR4nO3c3VLaQBgGYJY/IQtE1Iogrfbn/q+xCaQ2TqtFm222+jwHDC8MMO8EdjnY+QYDAAAAAAAAAAAAAAAAeI/OL4Z5uDhP0m+yXYwzcbX4cJug4d045GN8Pem84GYd+67VUq6/dN7wou9Sjy1u0jQcjUZ9V2skaHhZfUuLbBrGYtN5w8F2HLNpGFOsNIPddlo3XGUgTK9T7BbVFzWbHX+zS1IQAAAAAAAAAABeZJKHVPXO76dHs9msul1OH+JfpOmr0ufuz15Wbhb78uzBvJzPWym2U/XU6Sk+lc6eTnEfv3Zf8PZjeTib2AihnYpwOJl5Qhp1kULY33d/1Pvbp9XTDcO/bhjGl503HD5uUX/Mn1PxTPr964pTUkhygra+hj9U16V10LS6+/pUtFLxTAo/00GCa1j/DhtFDw2Lxw1T/A7rtTRWS+ZhES2rdS3O22lep/qBX1LZSmetFI+pfvzk1HximrW03g9ns4edadboIy2XafbDWt9/Zhqp6gEAAAAAAAAAwAu89Zl7u+00xFXse2ZiLdHcxO24PLx7DpLMvrxcHy9f3+WOUswvHYZVRg2TTNktqnqjTCa0Jmm4WZcZNUwxC3pwd5VPwyLJlN3JdnHV9zD2RqKZ7G9/rj4AAAAAAAAAAAAAAAD8T74DVhZG6MsBqOQAAAAASUVORK5CYII="
          alt="menu"
        ></img>

        <a href="/">
          <img
            className="h-10 ml-5"
            src="data:image/png;base64,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"
            alt="youtubelogo"
          ></img>
        </a>
      </div>

      <div className="col-span-10 text-center ">
        <div>
          <input
            className="w-1/2 border-solid border-2 border-gray-500 p-2 rounded-l-full"
            placeholder="search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQueary(e.target.value)}
            onFocus={() => setShowsugsetion(true)}
            onBlur={() => setShowsugsetion(false)}
          />
          <button className="bg-gray-400 border-solid border-2 border-gray-500  p-2 rounded-r-full">
            🔍
          </button>
        </div>
        {showSugsetion && (
          <div className="   fixed bg-white border-1 border-gray-200   w-auto ml-60 py-2 px-5 shadow-lg rounded-lg  ">
            <ul>
              {sugsestion.map((s) => (
                <li
                  className=" py-1 hover:bg-gray-100 shadow-sm text-left"
                  key={s}
                >
                  🔍{s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-10"
          src="data:image/png;base64,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"
          alt="user-icon"
        ></img>
      </div>
    </div>
  );
};

export default Header;
