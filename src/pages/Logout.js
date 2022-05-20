import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Navigation from "../component/Navigation";

export default function Logout() {
  const navigate = useNavigate();

  localStorage.setItem("token", null);
  return (
    <div className="logout">
      <Navigation />
      <h1>You've been succesfully Logout</h1>

      <Button
        color="info"
        size="sm"
        className="mt-3"
        onClick={() => navigate("/")}
      >
        Back Home
      </Button>
    </div>
  );
}
