import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./Screen/HomeScreen";
import requests from "./Requests";
import Row from "./Row";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginScreen from "./Screen/LoginScreen";
import { auth } from "./Screen/firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectuser } from "./features/counterSlice";
import ProfileScreen from "./Screen/ProfileScreen";
function App() {
  const user = useSelector(selectuser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
        console.log(authUser);
      }
    });
    return unSubscribe;
  }, []);
  console.log(user);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Route path="/loginscreen">
            <LoginScreen />
          </Route>
        ) : (
          <Switch>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
            <Route path="/">
              <HomeScreen />
              <Row
                title="NETFLIX ORIGINAL"
                FetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
              ></Row>

              <Row
                title="HorrorMovies"
                FetchUrl={requests.fetchHorrorMovies}
              ></Row>

              <Row title="Trending" FetchUrl={requests.fetchTrending}></Row>

              <Row
                title="RumanceMovie"
                FetchUrl={requests.fetchRumanceMovie}
              ></Row>

              <Row
                title="ActionMovies"
                FetchUrl={requests.fetchActionMovies}
              ></Row>
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
