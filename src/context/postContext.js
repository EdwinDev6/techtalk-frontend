import { useState, createContext, useContext, useEffect } from "react";
import { getPostsRequest, createPostRequest, deletePostRequest, getPostRequest} from "../api/posts";
export const postContext = createContext();

export const usePosts = () => {
  const context = useContext(postContext);
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getPostsRequest();
      setPosts(res.data);
    })();
  }, []);

    const createPost = async (post) =>{
      const res = await createPostRequest(post)
      setPosts([...posts, res.data])
    }

      const deletePost = async (id) =>{
        await deletePostRequest(id)
       setPosts(posts.filter((post)=> post._id !==id));
      };
  
      const getPost = async (id) => {
        try {
          const res = await getPostRequest(id);
          return res.data;
        } catch (error) {
          console.error(error);
        }
      };

     


  return (
    <postContext.Provider
      value={{
        posts,
        createPost,
        deletePost,
        getPost
      }}
    >
      {children}
    </postContext.Provider>
  );
};
