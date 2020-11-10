import axios from "axios";

/***base url for make a request to movie database */


const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3/"
});

export default instance;
