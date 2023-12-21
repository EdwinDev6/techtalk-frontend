import React from "react";

export const Comment = ({ author, text }) => (
  <div className="comentario">
    <strong>{author}:</strong> {text}
  </div>
);

export const Comments = ({ comments }) => (
  <div className="comentarios">
    <h3>Comentarios</h3>
    {comments.map((comment) => (
      <Comment
        key={comment._id} // Usar el identificador único como clave
        author={comment.author} // Corregir el nombre de la propiedad
        text={comment.text} // Corregir el nombre de la propiedad
      />
    ))}
  </div>
);
