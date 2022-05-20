import React from "react";

import "./Navigation.css";

const token = localStorage.getItem("token");

const Navigation = () => {
  if (token === "null") {
    return (
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="VolcanoList">Volcano List</a>
          </li>
          <li>
            <a href="Register">Register</a>
          </li>
          <li>
            <a href="Login">Login</a>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="VolcanoList">Volcano List</a>
          </li>
          <li>
            <a href="Logout">Logout</a>
          </li>
        </ul>
      </div>
    );
  }
};

export default Navigation;

//<li><a href={logout(token)}>Logout</a></li>
