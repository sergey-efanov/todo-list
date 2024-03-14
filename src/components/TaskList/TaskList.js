import { useState } from "react";

import tasks from "../../tasks";
import Task from "../Task/Task";
import tasklistStyle from "./tasklist.module.css";

import TaskInfo from "../TaskInfo/TaskInfo";

function filterByStatus(task) {
  return task.execution_status !== "Завершена";
}

function TaskList() {

  const [isStatus, setIsStatus] = useState("all");

  const filterTaskCards = tasks.filter((task) => {
    if (isStatus === "all") {
      return tasks
    } else {
      return task.execution_status.toLocaleLowerCase() === isStatus
    }
  });

  // все задачи отсортированные по дате
  const allTaskCards = filterTaskCards.map((task) => <Task task={task} />);

  // задачи отсортированные по приоритету
  const sortList = filterTaskCards.sort((a, b) => {
    if (new Date(b.created_date) < new Date(a.created_date)) {
      return 1;
    }
    if (new Date(b.created_date) > new Date(a.created_date)) {
      return -1;
    }
    // return b.priority.id - a.priority.id;
  });

  const taskCards = sortList.map((task) => (
    <Task key={task.id} task={task}>
      <TaskInfo task={task} />
    </Task>
  ));

  const handleStatusSearch = (e) => {
    let status = e.target.value
    if (status.length > 0) {
      setIsStatus(status.toLowerCase())
    } else {
      setIsStatus("all")
    }
  }

  return (
    <div className={tasklistStyle.container}>
      <div className={tasklistStyle.search}>
        <label className={tasklistStyle.title__search}>Поиск</label>
        <input onChange={(e) => handleStatusSearch(e)} />
      </div>
      {taskCards}
    </div>
  )
}

export default TaskList;
