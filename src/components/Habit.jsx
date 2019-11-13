import React, { Component } from 'react';
import './styles/Habit.css';



export default function Habit(props) {

    return (
        <div className="habit">
            <div className="deleteButton" onClick={()=>props.deleteItem(props.listId)}>Delete</div>
            <div className="habitText">{props.habitName}</div>     
      </div>
    );
  }
