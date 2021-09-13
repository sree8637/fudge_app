import axios from 'axios';
export const getUsers = ({ commit }) => {
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    commit('SET_USERS', response.data);
  })
}

export const getTopComments = ({ commit }) => {
  axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then(response => {
    commit('SET_COMMENTS', response.data);
  })
}

export const getNews = ({ commit }) => {
  axios.get('https://jsonplaceholder.typicode.com/users/1/posts')
  .then(response => {
    commit('SET_NEWS', response.data);
  })
}