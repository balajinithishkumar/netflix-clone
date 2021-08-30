import React, { useRef } from "react";
import "./SignInScreen.css";
import { auth } from "./firebase";
function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  function SignIn() {
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((authError) => {
        alert(authError.message);
      });
  }
  function register() {
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((reg) => {
        console.log(reg);
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  return (
    <div className="SignUpScreen">
      <h2> Sign In </h2>
      <div className="email_input">
        <input ref={emailRef} placeholder="Email" type="email"></input>
      </div>
      <div className="password_input">
        <input ref={passwordRef} placeholder="Password" type="password"></input>
      </div>
      <button className="signUpscreen_button" onClick={SignIn}>
        Sign In
      </button>
      <span>
        New to Netflix?
        <strong onClick={register}>Sign up now.</strong>
      </span>
    </div>
  );
}
export default SignInScreen;
