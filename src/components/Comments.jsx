import React from "react";
import moment from "moment";

export const Comment = ({ author, text, createdAt }) => (
  <div className="comentario mb-3">
    <div className="comentario-info">
      <strong className="text-base font-semibold text-gray-900">
        {author}
      </strong>
      <small className="text-sm font-normal text-gray-500 ml-1">
        -{moment(createdAt).format("DD/MM/YYYY")}
        <span className="isolate inline-flex rounded-md shadow-sm">
          <button
            type="button"
            className="relative inline-flex items-center rounded-l-md bg-white px-2 py-1 text-xs font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            Edit
          </button>
          <button
            type="button"
            className="relative -ml-px inline-flex items-center bg-white px-2 py-1 text-xs font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            Delete
          </button>
        </span>
      </small>
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
