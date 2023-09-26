import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

import { generateRandomName, makeComment } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
     
      dispatch(
        addMessage({ name: generateRandomName(), message: makeComment(20) })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);
 
  return (
    <>
      <div className="ml-2 p-2  border-2 border-gray-200 h-[450px] w-full bg-slate-50 flex flex-col-reverse rounded-lg overflow-y-scroll  ">
        <div>
          {ChatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form className="border border-black p-1 ml-2 w-full"
      onSubmit={(e)=>{
        e.preventDefault();
        console.log('submitted' ,liveMessage);
        dispatch(
          addMessage({ name: 'JISHNU NP', message: liveMessage +'🚀'})
        );
        setLiveMessage('');
 
      }}>
        <input
          className="bg-gray-200   w-5/6   "
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="bg-green-400 px-2">send</button>
      </form>
    </>
  );
};

export default LiveChat;
