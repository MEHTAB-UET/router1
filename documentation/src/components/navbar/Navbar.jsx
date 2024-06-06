import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navcontainer">
        <Link className="btn" to="/">
          Home
        </Link>

        <Link className="btn" to="/login">
          Sign In
        </Link>
      </div>
    </>
  );
};

export default Navbar;
