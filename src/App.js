import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import HomeScreen from "./HomeScreen";
import requests from "./Requests";
import Row from "./Row";

function App() {
  return (
    <div className="app">
      <HomeScreen />
      <Row
        title="NETFLIX ORIGINAL"
        FetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      ></Row>

      <Row title="HorrorMovies" FetchUrl={requests.fetchHorrorMovies}></Row>

      <Row title="Trending" FetchUrl={requests.fetchTrending}></Row>

      <Row title="RumanceMovie" FetchUrl={requests.fetchRumanceMovie}></Row>

      <Row title="ActionMovies" FetchUrl={requests.fetchActionMovies}></Row>
    </div>
  );
}

export default App;
