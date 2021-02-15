import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";
function LoginScreen() {
  const [sign, setsign] = useState(false);

  return (
    <div className="loginscreen">
      <img
        className="loginscreen_logo"
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
      ></img>

      <div className="loginscreen__gradient"></div>

      <div className="loginscreen__body">
        <div className="login_button">
          <button onClick={() => setsign(true)}>Sign In</button>
        </div>
        {sign ? (
          <SignUpScreen />
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
                onClick={() => setsign(true)}
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

{
  /* <h2>unlimited films, Tv programmes and more.</h2>
<p>Watch anywere. Cancel at any time</p>
<span>
  Ready to watch?Enter your email to create and restart your membership
</span>
<form type="submit">
  <input type="email" placeholder="Email Address"></input>
  <button className="loginscreen_getstarted_button" onClick={() => setsign(true)}>
    Get Started
  </button>
</form>
</div> */
}
