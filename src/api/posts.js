import axios from 'axios';

export const getPostsRequests = async () => await axios.get('http://localhost:4000/api/posts')

export const createPostsRequests = async (post) => await axios.post('http://localhost:4000/api/posts', post)