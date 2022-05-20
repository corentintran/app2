import React from "react";
import Navigation from "../component/Navigation";
import { useState } from "react";
import { Button } from "reactstrap";

const Register1 = function (mail, psw) {
  const url = "http://sefdb02.qut.edu.au:3001/user/register";

  fetch(url, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json"
    },

    body: JSON.stringify({ email: mail, password: psw })
  })
    .then((res) => res.json())
    .then((res) => localStorage.setItem("token", res.token));
};

function Register() {
  const [mail, setMail] = useState("");
  const [psw, setPsw] = useState("");

  return (
    <div className="App">
      <Navigation />

      <h1> Register </h1>

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
        onClick={() => Register1(mail, psw)}
      >
        Register
      </Button>
    </div>
  );
}

export default Register;
