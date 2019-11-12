import React, { Component } from 'react';
import './styles/MainView.css';

export default class App extends Component {

    render() {
        return (
            <div className="mainViewContainer">
                <div className="mainViewTitle">Fix your shi*</div>
                <div className="habitListOptions" onClick={this.props.newListViewChanger}>Make a new habit list</div>
                <div className="habitListOptions" onClick={this.props.allListsChanger}>View all habit lists</div>
            </div>
        );
    }
}
  
  
  