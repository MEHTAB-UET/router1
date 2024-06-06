import React from "react";
import "./login.css";

const login = () => {
  return (
    <>
      <div className="boxContainer">
        {" "}
        <div className="logincontainer">
          <div className="logInHeading">
            <h1>Log In</h1>
          </div>
          <label className="label">
            Name: <input type="text" placeholder="Enter your name"></input>
            <br />
            <br />
          </label>
          <label className="label">
            Password: <input type="text" placeholder="********"></input>
          </label>
          <br />
          <br />
          <button className="logInBtn">Log In</button>
        </div>
      </div>
    </>
  );
};

export default login;
