import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
    },
});

export default api;