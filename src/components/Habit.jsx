import React, { Component } from 'react';
import './styles/Habit.css';



export default function Habit(props) {
    // The first commit of Material-UI
   
    
    // React.useEffect(()=> {
    //     console.log(props.time, selectedDate.toLocaleTimeString());
    //     console.log(props.time === selectedDate.toLocaleTimeString())
    //     if(props.time === selectedDate.toLocaleTimeString()) {
    //         const notification= new Notification('hey');
    //     }
    // });

    

    return (
        <div className="habit">
            <div className="deleteButton" onClick={()=>props.deleteItem(props.listId)}>Delete</div>
            <div className="habitText">{props.habitName}</div>     
      </div>
    );
  }

// export default class Habit extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             time: '10:00',
//         } 
//     }

//     onChange = time => this.setState({ time })

//     render() {
//         return (
//             <div className="habit">
//                 <div className="deleteButton" onClick={()=>this.props.deleteItem(this.props.listId)}>Delete</div>
//                 <div className="habitText">{this.props.habitName}</div>
                
//             </div>
//         );
//     }
// }