import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "./Requests";
function Banner() {
  const [movie, setmovie] = useState([]);
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n) + "..." : string;
  }

  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(requests.fetchTrending);
      setmovie(
        request.data.results[
          Math.floor(
            Math.floor(Math.random() * request.data.results.length - 1)
          )
        ]
      );
      return request;
    }
    fetchdata();
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner_title">
          {movie?.original_title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">Add To Cart</button>
        </div>
        <h5 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h5>
      </div>
      <div className="nithu"></div>

    </header>
  );
}
export default Banner;
