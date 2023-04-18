import axios from 'axios';

export const getPostsRequests = async () => await axios.get('http://localhost:4000/api/posts')
