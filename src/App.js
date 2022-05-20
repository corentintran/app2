import React from "react";

import "./App.css";

import Navigation from "./component/Navigation";

//import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import Home from './pages/Home';
//import VolcanoList from './pages/VolcanoList';
//import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <h1> Volcanoes of the World </h1>
      </header>
    </div>
  );
}
export default App;
