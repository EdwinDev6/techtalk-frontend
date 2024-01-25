import axios from "axios";
import Cookies from "js-cookie"; 

const PostUrl = process.env.REACT_APP_POST_URL;
const UpdatePost = process.env.REACT_APP_UPDATE_POST;
const DeletePost = process.env.REACT_APP_POST_DELETE;
const PostId = process.env.REACT_APP_POST_ID;



export const getTokenFromCookie = () => {
  return Cookies.get("token") || ""; 
};


export const getPostsRequest = async () =>
  await axios.get(PostUrl, {});

export const createPostRequest = async (post) => {
  const form = new FormData();

  for (let key in post) {
    form.append(key, post[key]);
  }

  return await axios.post(PostUrl, form, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${getTokenFromCookie()}`, 
    },
  });
};

export const deletePostRequest = async (id) =>
  await axios.delete(DeletePost + id, {
    headers: {
      Authorization: `Bearer ${getTokenFromCookie()}`, 
    },
  });

export const getPostRequest = async (id) =>
  await axios.get(PostId + id);

  export const updatePostRequest = async (id, formData) => {
    try {
      const response = await axios.put(`${UpdatePost}/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${getTokenFromCookie()}`,
          'Content-Type': 'multipart/form-data', 
        },
      });
  
      return response.data;
    } catch (error) {
      
      throw error;
    }
  };