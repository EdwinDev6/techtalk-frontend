import React from "react";
import moment from "moment"; 

export const Comment = ({ author, text, createdAt }) => (
  <div className="comentario mb-3"> 
    <div className="comentario-info">
      <strong className="text-base font-semibold text-gray-900">{author}</strong>
      <small className="text-sm font-normal text-gray-500 ml-1">-{moment(createdAt).format("DD/MM/YYYY")}</small>
    </div>
    <div className="text-sm text-gray-600">{text}</div>
  </div>
);


export const Comments = ({ comments }) => (
  <div className="comentarios">
    {comments.map((comment) => (
      <Comment
        key={comment._id}
        author={comment.author}
        text={comment.text}
        createdAt={comment.createdAt}
      />
    ))}
  </div>
);
