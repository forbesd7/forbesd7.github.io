import React, { Component } from 'react';
import './styles/AllLists.css';


export default class AllLists extends Component {

    render() {
        return (
            <div className="AllListsViewContainer">
                <div onClick={this.props.curListChanger}>List 1</div>
                <div>List 2</div>
            </div>
        );
    }
}
  
  
  