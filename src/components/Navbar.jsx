import React, { Component } from 'react';
import './styles/Navbar.css';

export default function Navbar(props) {
    return (
        <div id="NavbarLayout">
        <img 
        src="https://wallpaperaccess.com/full/91365.jpg" 
        className="bear" 
        onClick={props.mainViewChanger}
        />
        </div>
    );
}
  
  
  