import React from "react";

export const Comment = ({ author, text }) => (
  <div className="comentario">
    <strong>{author}:</strong> {text}
  </div>
);

export const Comments = ({ comments }) => (
  <div className="comentarios">
    
    {comments.map((comment) => (
      <Comment
        key={comment._id} 
        author={comment.author} 
        text={comment.text} 
      />
    ))}
  </div>
);
