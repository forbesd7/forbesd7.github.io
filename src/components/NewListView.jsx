import React, { Component } from "react";
import "./styles/NewListView.css";
import Habit from "./Habit";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker
} from "@material-ui/pickers";

export default class NewListView extends Component {
  constructor() {
    super();
    this.habitInput = React.createRef();
    this.state = {
      currentHabitList: [],
      selectedTime: new Date("2014-08-18T21:11:54")
    };
  }

  addNewItem = e => {
    if (this.habitInput.current.value !== "") {
      this.setState({
        currentHabitList: [
          ...this.state.currentHabitList,
          {
            text: this.habitInput.current.value,
            selectedTime: this.state.selectedTime.toLocaleTimeString()
          }
        ]
      });
      this.habitInput.current.value = "";
    }

    console.log(this.state.currentHabitList);
  };

  deleteItem = (e, index) => {
    const newHabitList = [...this.state.currentHabitList];
    newHabitList.splice(index, 1);
    this.setState({ currentHabitList: newHabitList });
    console.log("hey", this.state);
  };

  handleDateChange = date => {
    this.setState({ selectedTime: date });
    console.log(this.state.selectedTime);
  };

  resetList = () => {
    this.props.saveList(this.state.currentHabitList);
    this.setState({ currentHabitList: [] });
    alert("List saved!");
    this.props.mainViewChanger();
  };
  render() {
    let saveButton;

    const habit = this.state.currentHabitList.map((habit, index) => {
      return (
        <Habit
          key={index}
          listId={index}
          habitName={habit.text}
          deleteItem={this.deleteItem}
          time={this.props.time}
          habitList={this.state.currentHabitList}
        />
      );
    });
    setTimeout(() => {}, 1000);

    //make sure there is at least one item

    const saveButtonRenderer = () => {
      if (this.state.currentHabitList.length >= 1) {
        saveButton = (
          <button className="button" onClick={this.resetList}>
            Save list
          </button>
        );
      } else {
        saveButton = "";
      }
    };
    saveButtonRenderer();

    return (
      <div className="NewListViewContainer">
        <div id="habitAdder">
          <input
            type="text"
            ref={this.habitInput}
            className="inputField"
            placeholder="Enter Task"
          ></input>
          <div className="timeContainer">
            <MuiPickersUtilsProvider
              className="timeSelector"
              utils={DateFnsUtils}
            >
              <Grid container justify="space-around">
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Notification Time"
                  value={this.state.selectedDate}
                  onChange={this.handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change time"
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </div>
          <button className="button" onClick={this.addNewItem}>
            Add Tasks
          </button>
        </div>

        <div className="habitContainer">{habit}</div>
        {saveButton}
      </div>
    );
  }
}
