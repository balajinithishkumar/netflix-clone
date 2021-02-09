const API_KEY = "2a75ae9da341516d03368a04664fab15";

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchRumanceMovie: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
};

export default requests;
