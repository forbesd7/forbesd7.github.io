import React, { Component } from 'react';
import './styles/MainView.css';
import HabitList from './HabitList'

export default class App extends Component {

    constructor() {
        super()
        this.createdHabitLists = [];
    }
    showList = (list) => {
        
    }
    render() {
        const habitLists = this.props.createdHabitLists.map(lists => {
            return lists.map( list => {
                return <HabitList selectedTime={list.selectedTime} text={list.text} time={this.props.time}/>
            })
        })
        return (
            <div className="mainViewContainer">
                <div className="mainViewTitle">Habitify your life.</div>
                <button className="makeButton" onClick={this.props.newListViewChanger}>Make a new habit</button>
                <div className="habitLister">{habitLists}</div>
            </div>
        );
    }
}
  
  
  