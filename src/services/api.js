import axios from 'axios';

const api = axios.create({
    baseURL: 'http://18.228.11.123:3333'
});

export default api;