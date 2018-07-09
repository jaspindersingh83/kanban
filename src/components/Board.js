import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask } from "../actions";
import Task from "./Task";
import "./Board.css";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: {
        text: "",
        status: ""
      }
    };
  }
  async componentWillReceiveProps(nextProps) {
    await this.setState({
      tasks: nextProps.tasks
    });
  }

  addInput = async (text, status) => {
    await this.setState({
      newTask: {
        text,
        status
      }
    });
    await this.props.addTask(this.state.newTask);
    await this.setState({
      newTask: {
        text: "",
        status: ""
      }
    });
  };

  render() {
    const allTasks = this.state.tasks;
    const backlogTasks = allTasks.filter(task => {
      if (task.status === "backlog") return task;
      return null;
    });
    const todoTasks = allTasks.filter(task => {
      if (task.status === "todo") return task;
      return null;
    });
    const inProgressTasks = allTasks.filter(task => {
      if (task.status === "inProgress") return task;
      return null;
    });
    const doneTasks = allTasks.filter(task => {
      if (task.status === "done") return task;
      return null;
    });
    return (
      <div className="Board">
        <div className="Board__Column" style={{ color: "red" }}>
          <h2> Backlog </h2>
          <div
            className="Addbutton"
            onClick={() => {
              const sign = window.prompt("Add Task Here");
              this.addInput(sign, "backlog");
            }}
          >
            Add
          </div>
          {backlogTasks.map((task, index) => {
            return <Task key = {index} text={task.text} />;
          })}
        </div>
        <div className="Board__Column" style={{ color: "blue" }}>
          <h2> Todo </h2>
          <div
            className="Addbutton"
            onClick={() => {
              const sign = window.prompt("Add Task Here");
              this.addInput(sign, "todo");
            }}
          >
            Add
          </div>
          {todoTasks.map((task, index) => {
            return <Task key = {index} text={task.text} />;
          })}
        </div>
        <div className="Board__Column" style={{ color: "yellow" }}>
          <h2> Inprogress </h2>
          <div
            className="Addbutton"
            onClick={() => {
              const sign = window.prompt("Add Task Here");
              this.addInput(sign, "inProgress");
            }}
          >
            Add
          </div>
          {inProgressTasks.map((task, index) => {
            return <Task key = {index} text={task.text} />;
          })}
        </div>
        <div className="Board__Column" style={{ color: "green" }}>
          <h2> Done </h2>
          <div
            className="Addbutton"
            onClick={() => {
              const sign = window.prompt("Add Task Here");
              this.addInput(sign, "done");
            }}
          >
            Add
          </div>
          {doneTasks.map((task, index) => {
            return <Task key = {index} text={task.text} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state
  };
};

export default connect(
  mapStateToProps,
  { addTask }
)(Board);
