import { ADDTASK, MOVELEFT, MOVERIGHT } from "../actions";

export default (tasks = [], action) => {
  switch (action.type) {
    case ADDTASK:
      return [...tasks, action.payload];

    case MOVELEFT:
      const filteredTask = tasks.filter(task => task.text !== action.payload);
      const leftMoveTask = tasks.filter(task => task.text === action.payload)[0];
      if (leftMoveTask.status === "todo") {
        leftMoveTask.status = "backlog";
      }
      if (leftMoveTask.status === "inProgress") {
        leftMoveTask.status = "todo";
      }
      if (leftMoveTask.status === "done") {
        leftMoveTask.status = "inProgress";
      }
      return [...filteredTask, leftMoveTask];

    case MOVERIGHT:
      const filteredTasks = tasks.filter(task => task.text !== action.payload);
      const rightMoveTask = tasks.filter(task => task.text === action.payload)[0];
      if (rightMoveTask.status === "inProgress") {
        rightMoveTask.status = "done";
      }
      if (rightMoveTask.status === "todo") {
        rightMoveTask.status = "inProgress";
      }
      if (rightMoveTask.status === "backlog") {
        rightMoveTask.status = "todo";
      }
      return [...filteredTasks, rightMoveTask];

    default:
      return tasks;
  }
};
