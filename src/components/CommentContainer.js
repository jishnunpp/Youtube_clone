import React from "react";
import PropTypes from "prop-types";

const commentsData = [
  {
    name: "jishnu",
    text: "nice video gd presentation",
    replies: [
      {
        name: "jishnu",
        text: "nice video gd presentation",
        replies: [
          {
            name: "jishnu",
            text: "nice video gd presentation",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "jishnu",
    text: "nice video gd presentation",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex py-3 bg-gray-100 m-2">
      <img
        className="h-8 w-8"
        alt="user"
        src="data:image/png;base64,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"
      ></img>
      <div className="px-3">
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div  key={index}>
      <Comment data={comment} />
      <div className="pl-5 ml-5">
        <CommentList comments={comment.replies}/>
      </div>
    </div>
    
    
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-5 p-3">
      <h1 className=" font-bold ">Comments:</h1>
      {/* <Comment data={commentsData[0]} /> */}
      <CommentList comments={commentsData} />
    </div>
  );
};
Comment.propTypes = {
  data: PropTypes.array.isRequired,
};
CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentContainer;
