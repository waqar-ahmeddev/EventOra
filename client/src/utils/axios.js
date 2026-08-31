// import axios from 'axios';

// const api = axios.create({
//     baseURL: 'http://localhost:5000/api',
// });

// api.interceptors.request.use((config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });

// export default api;
import axios from 'axios';

// Localhost aur Live production URL ka conditional handle
const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

const API_BASE_URL = isLocal 
  ? 'http://localhost:5000/api' 
  : 'https://eventora-production-7f78.up.railway.app/api';

const api = axios.create({
    baseURL: API_BASE_URL
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;