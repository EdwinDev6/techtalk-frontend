import axios from 'axios';

export const getPostsRequest = async () => await axios.get('http://localhost:4000/api/posts',{

})

export const createPostRequest = async (post) => {
    const token = localStorage.getItem('auth')
    const form = new FormData()

    for (let key in post){
        form.append(key, post[key])
    }

    return await axios.post('http://localhost:4000/api/posts', form, {
        headers: {
            "Content-Type": "multipart/form-data",
            // eslint-disable-next-line no-template-curly-in-string
            'Authorization': `Bearer ${token}`
        }
    });
}

export const deletePostRequest = async id => await axios.delete("http://localhost:4000/api/posts/" + id)

export const getPostRequest = async id => await axios.get("http://localhost:4000/api/posts/" + id)

export const updatePostRequest = async (id, newFields) => await axios.put(`http://localhost:4000/api/posts/${id}`, newFields)