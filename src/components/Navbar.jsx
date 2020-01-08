import React from "react";
import "./styles/Navbar.css";

export default function Navbar(props) {
  return (
    <div id="NavbarLayout">
      <div className="title" onClick={props.mainViewChanger}>
        To Do List
      </div>
      <div id="time">{props.time}</div>
    </div>
  );
}
