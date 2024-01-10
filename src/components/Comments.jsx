import React from "react";
import moment from "moment";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

export const Comment = ({ comment, onDelete }) => {
  const handleDeleteComment = async () => {
    try {
      await axios.delete(
        `http://localhost:4000/api/posts/${comment._id}/comments/`,
        {
          withCredentials: true,
        }
      );

      onDelete(comment._id);

      toast.success("Comment successfully deleted.");
    } catch (error) {
      toast.error("Error deleting the comment", error);
    }
  };

  const canEditAndDelete =
    comment.commentator.trim() === Cookies.get("username").trim();

  return (
    <div className="comentario mb-3">
      <div className="comentario-info">
        <strong className="text-base font-semibold text-gray-900">
          {comment.commentator}
        </strong>
        <small className="text-sm font-normal text-gray-500 ml-1">
          -{moment(comment.createdAt).format("DD/MM/YYYY")}
          <span className="isolate inline-flex rounded-md shadow-sm">
            {canEditAndDelete && (
              <>
                <button
                  type="button"
                  className="relative inline-flex items-center rounded-l-md bg-white px-2 py-1 text-xs font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="relative -ml-px inline-flex items-center bg-white px-2 py-1 text-xs font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                  onClick={handleDeleteComment}
                >
                  Delete
                </button>
              </>
            )}
          </span>
        </small>
      </div>
      <div className="text-sm text-gray-600">{comment.text}</div>
    </div>
  );
};

export const Comments = ({ comments, onDeleteComment }) => (
  <div className="comentarios">
    {comments.map((comment) => (
      <Comment key={comment._id} comment={comment} onDelete={onDeleteComment} />
    ))}
  </div>
);
