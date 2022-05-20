import React from "react";
import Navigation from "../component/Navigation";
import { useState } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Login1 = function (mail, pswd) {
  const url = "http://sefdb02.qut.edu.au:3001/user/login";

  fetch(url, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json"
    },

    body: JSON.stringify({ email: mail, password: pswd })
  })
    .then((res) => res.json())
    .then((res) => localStorage.setItem("token", res.token));
};

const token = localStorage.getItem("token");

function Login() {
  const navigate = useNavigate();

  const [mail, setMail] = useState("");
  const [psw, setPsw] = useState("");

  if (token !== "null") {
    return navigate("/");
  } else {
    return (
      <div className="App">
        <Navigation />

        <h1> LOGIN </h1>

        <input
          type="email"
          id="email"
          placeholder="email"
          value={mail}
          onChange={(event) => {
            const newMail = event.target.value;
            setMail(newMail);
          }}
          required
        />

        <input
          type="password"
          id="password"
          placeholder="password"
          value={psw}
          onChange={(event) => {
            const newPsw = event.target.value;
            setPsw(newPsw);
          }}
          required
        />

        <Button
          color="info"
          size="sm"
          className="mt-3"
          onClick={() => Login1(mail, psw)}
        >
          Login
        </Button>
      </div>
    );
  }
}

export default Login;

//<button onClick={login1(mail,psw)}>Login</button>
