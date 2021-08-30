import React, { useRef } from "react";
import "./SignUpPage.css";
import { auth } from "./firebase";
function SignUpPage() {
  const emailRef = useRef("d");
  const passwordRef = useRef(null);
  function signin() {
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((sign) => {
        console.log(sign);
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  function register() {
    auth
      .createUserWithEmailAndPassword(
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
  return (
    <div className="SignUpScreen">
      <h2> Sign up </h2>
      <div className="email_input">
        <input
          ref={emailRef}
          placeholder="Email"
          type="email"
          autoComplete="off"
        ></input>
      </div>
      <div className="password_input">
        <input
          ref={passwordRef}
          placeholder="Password"
          type="password"
          autoComplete="off"
        ></input>
      </div>
      <button className="signUpscreen_button" onClick={register}>
        Sign up
      </button>
    </div>
  );
}
export default SignUpPage;