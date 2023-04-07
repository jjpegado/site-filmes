import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
// URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=d140d73acbc988d94ce49af4bb7ba42c&language=pt-br

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;