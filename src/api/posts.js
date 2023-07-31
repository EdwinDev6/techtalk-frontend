import axios from "axios";

const PostUrl = process.env.REACT_APP_POST_URL;
const UpdatePost = process.env.REACT_APP_UPDATE_POST;
const DeletePost = process.env.REACT_APP_POST_DELETE;
const PostId = process.env.REACT_APP_POST_ID;


export const getPostsRequest = async () =>
  await axios.get(PostUrl, {});

export const createPostRequest = async (post, token) => {
  const form = new FormData();

  for (let key in post) {
    form.append(key, post[key]);
  }

  return await axios.post(PostUrl, form, {
    headers: {
      "Content-Type": "multipart/form-data",

      Authorization: `Bearer ${token}`,
    },
  });
};

export const deletePostRequest = async (id, token) =>
  await axios.delete(DeletePost + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getPostRequest = async (id) =>
  await axios.get(PostId + id);
  export const updatePostRequest = async (id, newFields, token) =>
  await axios.put(`${UpdatePost}/${id}`, newFields, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });