//import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import VolcanoList from "./pages/VolcanoList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import VolcanoPage from "./pages/VolcanoPage";
import Logout from "./pages/Logout";

import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/VolcanoList" element={<VolcanoList />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Volcano" element={<VolcanoPage />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
