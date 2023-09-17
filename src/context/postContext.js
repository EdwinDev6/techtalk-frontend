import { useState, createContext, useContext } from "react";
import {
  getPostsRequest,
  createPostRequest,
  deletePostRequest,
  getPostRequest,
  updatePostRequest,
} from "../api/posts";
import useAuth from "../hooks/useAuth";
import { toast } from "react-hot-toast";

export const postContext = createContext();

export const usePosts = () => {
  const context = useContext(postContext);
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const { auth } = useAuth();

  const getAllPost = async () => {
    try {
      const res = await getPostsRequest();
      setPosts(res.data);
    } catch (error) {
      toast.error(error);
    }
  }

  const createPost = async (post) => {
    try {
      const res = await createPostRequest(post, auth.token);
      setPosts([...posts, res.data]);
    } catch (error) {
      
    }
  };

  const deletePost = async (id) => {
    await deletePostRequest(id, auth.token);
    setPosts(posts.filter((post) => post._id !== id));
    getAllPost()
  };

  const getPost = async (id) => {
    
    try {
      const res = await getPostRequest(id);
      return res.data;
    } catch (error) {
      
    }
  };

  const updatePost = async (id, post) => {
    const res = await updatePostRequest(id, post, auth.token);
    setPosts(posts.map((post) => (post.id === id ? res.data : post)));
    getAllPost()
  };

  return (
    <postContext.Provider
      value={{
        posts,
        getAllPost,
        createPost,
        deletePost,
        getPost,
        updatePost,
      }}
    >
      {children}
    </postContext.Provider>
  );
};
