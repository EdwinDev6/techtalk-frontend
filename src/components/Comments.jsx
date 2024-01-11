import React from "react";
import moment from "moment";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useState } from "react";

export const Comment = ({ comment, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(comment.text);

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

  const handleEditComment = async () => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/posts/${comment._id}/comments/`,
        { text: editedText },
        {
          withCredentials: true,
        }
      );

      if (onEdit) {
        onEdit(response.data);
      }

      toast.success("Comment successfully edited.");
      setIsEditing(false);
    } catch (error) {
      toast.error("Error editing the comment", error);
    }
  };

  const canEditAndDelete =
    comment?.commentator?.trim() === Cookies.get("username")?.trim();

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
                {isEditing ? (
                  <>
                    <button
                      type="button"
                      className="relative inline-flex items-center bg-white px-2 py-1 text-xs font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                      onClick={handleEditComment}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-2 py-1 text-xs font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      className="relative inline-flex items-center rounded-l-md bg-white px-2 py-1 text-xs font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                      onClick={() => setIsEditing(true)}
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
              </>
            )}
          </span>
        </small>
      </div>
      {isEditing ? (
        <textarea
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="text-sm text-gray-600 border p-1 mt-2"
        />
      ) : (
        <div className="text-sm text-gray-600">{comment.text}</div>
      )}
    </div>
  );
};

export const Comments = ({ comments, onDeleteComment, onEditComment }) => (
  <div className="comentarios">
    {comments.map((comment) => (
      <Comment
        key={comment._id}
        comment={comment}
        onDelete={onDeleteComment}
        onEdit={onEditComment}
      />
    ))}
  </div>
);
