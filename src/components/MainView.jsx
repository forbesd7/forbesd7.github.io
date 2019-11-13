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
                <div className="mainViewTitle">Fix your shi*</div>
                <div className="habitListOptions" onClick={this.props.newListViewChanger}>Make a new habit list</div>
                <div>{habitLists}</div>
            </div>
        );
    }
}
  
  
  