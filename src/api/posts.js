import axios from "axios";

export const getPostsRequest = async () =>
  await axios.get("http://localhost:4000/api/posts", {});

export const createPostRequest = async (post, token) => {
  const form = new FormData();

  for (let key in post) {
    form.append(key, post[key]);
  }

  return await axios.post("http://localhost:4000/api/posts", form, {
    headers: {
      "Content-Type": "multipart/form-data",
      
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deletePostRequest = async (id, token) =>
  await axios.delete("http://localhost:4000/api/posts/" + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getPostRequest = async (id) =>
  await axios.get("http://localhost:4000/api/posts/" + id);

export const updatePostRequest = async (id, newFields, token) =>
  await axios.put(`http://localhost:4000/api/posts/${id}`, newFields, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
