import React, { Component } from 'react';
import './components/styles/App.css';
import MainView from './components/MainView'
import Navbar from './components/Navbar'
import NewListView from './components/NewListView'
import AllLists from './components/AllLists'
import CurList from './components/CurList'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      habitList: [],
      currentView: "main"
    }
  }

  newListViewChanger = (e) => {
    this.setState({currentView: "newList"})
    console.log(this.state);
  }

  mainViewChanger = e => {
    this.setState({currentView: "main"})
  }

  allListsChanger = e => {
    this.setState({currentView: "allLists"})
  }

  curListChanger = e => {
    this.setState({currentView: "curList"})
  }
  
  render() {
    let viewRenderer;
    if(this.state.currentView === 'main') {
      viewRenderer = <MainView 
      newListViewChanger={this.newListViewChanger}
      allListsChanger= {this.allListsChanger}
      />
    } else if(this.state.currentView === 'newList') {
      viewRenderer = <NewListView />
    } else if(this.state.currentView === 'allLists') {
      viewRenderer = <AllLists curListChanger={this.curListChanger}/>
    } else if (this.state.currentView === 'curList') {
      viewRenderer = <CurList />
    }
    return (
      <div className="App">
        <Navbar 
        mainViewChanger={this.mainViewChanger}
        />
        {viewRenderer}
      </div>
    );
  }
}












// import React, { Component } from 'react';
// import './App.css';
// import Axios from 'axios'

// export default class App extends Component {

//   state = {
//     posts: []
//   }
//   componentDidMount() {

//     Axios.get("https://reddit.com/r/aww.json")
//     .then(response => {
//       this.setState({
//         posts: response.data.data.children
//       })
//       console.log(response.data.data.children)
//     })
//     .catch(error => {
//       console.log(error);
//     })
//   }
//   render() {
//     return (
//       <div className="App">
//       <ul> 
//         {this.state.posts.map(post => 
//            <li key={post.data.id} className="list-group-item flex-container">{post.data.title}</li>
//         )}
        
//       </ul>
//       </div>
//     );
//   }
// }

