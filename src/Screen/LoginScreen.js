import React, { useState } from "react";
import "./LoginScreen.css";
import SignInScreen from "./SignInScreen";
import SignUpPage from "./SignUpPage";
function LoginScreen() {
  const [sign, setsign] = useState("");
  const [sam, setsam] = useState();
  const data = <SignInScreen />;
  var d;
  function auth_handle(par, e) {
    if (par == "signup") {
      e.preventDefault();
      d = <SignUpPage />;
      setsam(d);
      return "";
    } else {
      d = <SignInScreen />;
      setsam(d);
      return "";
    }
  }
  return (
    <div className="loginscreen">
      <img
        className="loginscreen_logo"
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
      ></img>
      <div className="loginscreen__gradient"></div>
      <div className="loginscreen__body">
        <div className="login_button">
          <button onClick={() => auth_handle("signin")}>Sign In</button>
        </div>

        {sam ? (
          sam
        ) : (
          <>
            <h2>unlimited films, Tv programmes and more.</h2>
            <p>Watch anywere. Cancel at any time</p>
            <span>
              Ready to watch?Enter your email to create and restart your
              membership
            </span>
            <form type="submit">
              <input type="email" placeholder="Email Address"></input>
              <button
                className="loginscreen_getstarted_button"
                onClick={(e) => auth_handle("signup", e)}
              >
                Get Started
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
export default LoginScreen;
