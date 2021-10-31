import axios from 'axios'
const baseURL = "/api/"

const getAll = () => {
    return axios.get(baseURL + "posts")
                .then(response => response.data)
}

const create = (newObject, user) => {
    if (!user) {
        return new Promise((response) => response(null))
    }
    const config = {headers: {Authorization: "Bearer " + user.token}}
    return axios.post(baseURL + "posts", newObject, config)
                .then(response => response.data)
}

const specific = (postid) => {
    return axios.get(baseURL + "posts/" + postid)
                .then(response => response.data)
}

const update = (post) => {
    return axios.put(baseURL + "posts/" + post.id, post)
                .then(response => response.data)
}

const del = (postid) => {
    return axios.delete(baseURL + "posts/" + postid)
                .then(response => response.data)
}

const login = ({username, password}) => {
    return axios.post(baseURL + '/login', {username, password})
                .then(response => response.data)
}

export default {getAll, create, update, specific, delete: del, login} 