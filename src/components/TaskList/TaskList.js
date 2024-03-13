import tasks from "../../tasks";
import Task from "../Task/Task";
import tasklistStyle from "./tasklist.module.css";

import TaskInfo from "../TaskInfo/TaskInfo";

function filterByStatus(task) {
  return task.execution_status !== "Завершена";
}

function TaskList() {
  const sortListDate = tasks.sort(
    (a, b) => new Date(b.created_date) - new Date(a.created_date)
  );

  const filterTaskCards = tasks.filter((task) => filterByStatus(task));

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
    return b.priority.id - a.priority.id;
  });

  console.log();

  const taskCards = sortList.map((task) => (
    <Task key={task.id} task={task}>
      <TaskInfo task={task} />
    </Task>
  ));

  return <div className={tasklistStyle.container}>{taskCards}</div>;
}

export default TaskList;
