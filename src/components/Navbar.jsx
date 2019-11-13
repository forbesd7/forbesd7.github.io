import React, { Component } from 'react';
import './styles/Navbar.css';

export default function Navbar(props) {
    return (
        <div id="NavbarLayout">
            <div className="title" 
        onClick={props.mainViewChanger}>Habitify</div>
        <div id="time">{props.time}</div>
        </div>
    );
}
  
  
  