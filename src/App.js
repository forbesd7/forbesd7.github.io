import React, { Component } from 'react';
import './components/styles/App.css';
import MainView from './components/MainView'
import Navbar from './components/Navbar'
import NewListView from './components/NewListView'


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      createdHabitLists: [],
      currentView: "main",
      time: new Date(),
      
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
      clearInterval(this.timerID);
  }

  tick = ()=> {
    this.setState({
      time: new Date()
    });

    if(this.state.time.toLocaleTimeString() === "5:21:55 PM") {
      const notify = new Notification('hi')
    }
  }

  newListViewChanger = (e) => {
    this.setState({currentView: "newList"})
    console.log(this.state);
  }

  mainViewChanger = e => {
    this.setState({currentView: "main"})
  }

  saveList = (list) => {
    let curList = this.state.createdHabitLists;
    curList.push(list);
    console.log(curList);
    this.setState({createdHabitLists: curList})
    console.log(this.state);
}

  
  
  render() {

    let viewRenderer;
    if(this.state.currentView === 'main') {
      viewRenderer = <MainView 
      newListViewChanger={this.newListViewChanger}
      allListsChanger= {this.allListsChanger}
      createdHabitLists={this.state.createdHabitLists}
      time={this.state.time.toLocaleTimeString()}
      />
    } else if(this.state.currentView === 'newList') {
      viewRenderer = <NewListView time={this.state.time.toLocaleTimeString()} saveList={this.saveList} mainViewChanger={this.mainViewChanger}/>
    }


    return (
      <div className="App">
        <Navbar 
        mainViewChanger={this.mainViewChanger}
        time={this.state.time.toLocaleTimeString()}
        />
        {viewRenderer}
      </div>
    );
  }
}

