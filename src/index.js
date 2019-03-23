import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Nbar from "./Nbar";
import Main from "./Main";
import Login from "./Login";
var destination = document.querySelector("#container");
  
ReactDOM.render(
    <div className="index">
        <Login/>
    </div>,
    destination
);