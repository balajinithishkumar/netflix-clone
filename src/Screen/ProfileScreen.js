import React from "react";
import { selectuser } from "../features/counterSlice";
import Nav from "../Nav";
import { auth } from "./firebase";
import "./ProfileScreen.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function ProfileScreen() {
  const user = useSelector(selectuser);
  console.log(user);
  return (
    <div className="profilescreen">
      <Nav />
      <div className="profile_body">
        <div className="profile__info">
          <h1>Edit Profile</h1>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"></img>
        </div>
        <div className="profile_user_info">
          <h2>{user.email}</h2>
          <div className="profile__plans">
            <Link to="/loginscreen">
              <button onClick={() => auth.signOut()}>Sign out</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
