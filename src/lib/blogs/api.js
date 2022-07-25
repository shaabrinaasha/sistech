import axios from 'axios';

const API_TOKEN="f862cd12-43c0-464c-aedc-5bd9699f88ed"
const API='https://sistech-api.vercel.app/blog'

export const getBlog = function () {
    // axios.get(API, Headers: {"Authorization": `Bearer ${token}`})
    return axios({
        method: 'get',
        url: API,
        headers : {"Authorization": `Bearer ${API_TOKEN}`},
      });

} 

export const updateBlog = function (blogData) {
    return axios({
        method: 'put',
        url: API,
        headers : {"Authorization": `Bearer ${API_TOKEN}`},
        data: blogData,
    }
    )
}

export const likeBlog = function (id) {
    return axios(
        {
            method: 'post',
            url: `${API}/like`,
            headers: {"Authorization": `Bearer ${API_TOKEN}`},
            data: {
                id: id,
            }
        }
    )
}

export const createBlog = function (initBlogData) {
    return axios(
        {
            method: 'post',
            url: API,
            headers: {"Authorization": `Bearer ${API_TOKEN}`},
            data: initBlogData,
        }
    )
}


