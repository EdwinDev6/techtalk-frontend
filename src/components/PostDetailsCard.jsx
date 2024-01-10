import React, { useEffect, useState } from "react";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import { insertMedia } from "./PostCard";
import logoImg from "../Images/postimg.jpg";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Comments } from "./Comments";
import toast from "react-hot-toast";
import { SocialShare } from "./SocialShare";
import { usePosts } from "../context/postContext";

export function PostDetailsCard() {
  const { state } = useLocation();
  const normalDate = moment(state.post.createdAt).format("DD/MM/YYYY");
  const [commentText, setCommentText] = useState("");
  const [isCommentSubmitted, setIsCommentSubmitted] = useState(false);
  const { getPost } = usePosts();
  const [postData, setPostData] = useState(state.post);

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
        toast.success("Successful comment");
        setCommentText("");
        setIsCommentSubmitted(true);
      } else {
        toast.error("Error posting comment");
      }
    } catch (error) {
      toast.error("This didn't work.");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isCommentSubmitted) {
          const data = await getPost(state.post._id);
          setPostData(data);
        }
      } catch (error) {
        toast.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [state, isCommentSubmitted, getPost]);

  return (
    <article className="container mx-auto max-w-2xl bg-white rounded shadow-lg hover:scale-105 hover:shadow-2xl transform transition-all duration-500 m-10">
      <header className="flex items-center justify-between px-4">
        <div className="flex justify-between items-center py-4">
          <img className="w-12 rounded-full" src={logoImg} alt="logo" />
          <div className="ml-3">
            <h1 className="text-xl font-bold text-gray-800 cursor-pointer">
              {postData.author}
            </h1>
            <p className="text-sm text-gray-800 hover:underline cursor-pointer">
              {normalDate}
            </p>
            <p className="text-blue-400 capitalize ">{postData.categories}</p>
          </div>
        </div>
        <div>
          <SocialShare />
        </div>
      </header>

      {postData.image && insertMedia(postData.image.url)}

      <div className="p-6">
        <h2 className="text-xl text-gray-800 font-semibold">
          {postData.title}
        </h2>
        <ReactMarkdown className="text-lg font font-thin text-black text-justify">
          {postData.description}
        </ReactMarkdown>
        <h4 className="text-gray-400 capitalize my-2">
          Source: {postData.source}
        </h4>

        <form onSubmit={handleCommentSubmit}>
          <label
            htmlFor="commentText"
            className="block text-gray-800 font-medium mb-1"
          >
            Write your comment:
          </label>
          <textarea
            id="commentText"
            name="commentText"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            rows={4}
            placeholder="Type your comment..."
            className="px-3 py-2 border shadow-sm border-gray-300 rounded-md w-full block placeholder:text-gray-400 placeholder-gray-500
            focus:outline-none focus:ring-1 bg-gray-50 focus:ring-blue-600 focus:border-blue-600 text-sm"
            required
          />
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center text-gray-100 font-medium leading-none
            bg-blue-600 rounded-md py-2 px-3 border border-transparent transform-gpu hover:-translate-y-0.5 
            transition-all ease-in duration-300 hover:text-gray-200 hover:bg-blue-700 text-sm "
          >
            Send comment
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2 rotate-90 "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </form>

        <div className="text-base font-bold text-gray-700 mt-3 my-2">
          {postData.comments.length} Comment(s)
        </div>

        <Comments comments={postData.comments} />
      </div>
    </article>
  );
}
