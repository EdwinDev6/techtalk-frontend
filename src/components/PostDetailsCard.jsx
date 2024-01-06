import React, { useState } from "react";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import { insertMedia } from "./PostCard";
import logoImg from "../Images/postimg.jpg";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Comments } from "./Comments";
import toast from "react-hot-toast";
import { SocialShare } from "./SocialShare";

export function PostDetailsCard() {
  const { state } = useLocation();
  const normalDate = moment(state.post.createdAt).format("DD/MM/YYYY");
  const [commentText, setCommentText] = useState("");

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    const postId = state.post._id;

    try {
      const response = await axios.post(
        `http://localhost:4000/api/posts/${postId}/comments`,
        { text: commentText },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${""}`,
          },
        }
      );

      if (response.status === 201) {
        toast.success("successful comment");
        setCommentText("");
      } else {
      }
    } catch (error) {
      toast.error("This didn't work.");
    }
  };

  return (
    <article className="container mx-auto max-w-2xl bg-white rounded shadow-lg hover:scale-105 hover:shadow-2xl transform transition-all duration-500 m-10">
      <header className="flex items-center justify-between px-4">
        <div className="flex justify-between items-center py-4">
          <img className="w-12 rounded-full" src={logoImg} alt="logo" />
          <div className="ml-3">
            <h1 className="text-xl font-bold text-gray-800 cursor-pointer">
              {state.post.author}
            </h1>
            <p className="text-sm text-gray-800 hover:underline cursor-pointer">
              {normalDate}
            </p>
            <p className="text-blue-400 capitalize ">{state.post.categories}</p>
          </div>
        </div>
        <div>
          <SocialShare />
        </div>
      </header>

      {state.post.image && insertMedia(state.post.image.url)}

      <div className="p-6">
        <h2 className="text-xl text-gray-800 font-semibold">
          {state.post.title}
        </h2>
        <ReactMarkdown className="text-lg font font-thin text-black text-justify">
          {state.post.description}
        </ReactMarkdown>
        <h4 className="text-gray-400 capitalize my-2">
          Source: {state.post.source}
        </h4>

        <form onSubmit={handleCommentSubmit}>
          <label
            htmlFor="commentText"
            className="block text-gray-800 font-medium mb-1"
          >
            write your comment:
          </label>
          <textarea
            id="commentText"
            name="commentText"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            rows={4}
            className="w-full border p-2 mb-2"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Send comment
          </button>
        </form>

        <Comments comments={state.post.comments} />
      </div>
    </article>
  );
}
