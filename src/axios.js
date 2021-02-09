import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default instance;

// https://api.themoviedb.org/3/trending/all/week?api_key=2a75ae9da341516d03368a04664fab15&language=en-US
