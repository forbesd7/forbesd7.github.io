import React, { Component, useEffect } from 'react';
import './styles/Habit.css';

export default function HabitList(props) {
    useEffect(()=> {
        if(props.time === props.selectedTime) {
            const notify = new Notification(props.text)
        }
    });

    return (
        <div className="habit">
            <div className="habitText">{props.text}</div>
            <div className="habitSelectedTime">{props.selectedTime}</div>     
      </div>
    );
  }