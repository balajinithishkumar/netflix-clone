import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
function Row({ title, FetchUrl, isLargeRow = false }) {
  const [movies, setmovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(FetchUrl);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [FetchUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className={`row__poster ${isLargeRow && "row_largrporster"}`}
            src={`${base_url}${movie.backdrop_path}`}
          ></img>
        ))}
      </div>
      {console.log(isLargeRow)}
    </div>
  );
}

export default Row;
