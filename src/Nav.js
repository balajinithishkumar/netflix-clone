import React from "react";
import { useState, useEffect } from "react";
import { useHistory,Link } from "react-router-dom";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();
  const tranctionNavBar = () => {
    if (window.scrollY > 220) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", tranctionNavBar);
    return () => {
      window.removeEventListener("scroll", tranctionNavBar);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <Link to="/">
          <img
            className="nav_logo"
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
          ></img>
        </Link>

        <img
          onClick={() => history.push("./profile")}
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default Nav;
