import tasks from "../../tasks";
import Task from "../Task/Task";
import tasklistStyle from "./tasklist.module.css";

function filterByStatus(task) {
  if (task.execution_status == "Завершена") {
    return false;
  } else {
    return true;
  }
}

function TaskList() {
  const sortListDate = tasks.sort(
    (a, b) => new Date(b.created_date) - new Date(a.created_date)
  );
  // все задачи отсортированные по дате
  const allTaskCards = sortListDate.map((task) => <Task task={task} />);
  const filterTaskCards = sortListDate.filter((task) => filterByStatus(task));
  // задачи отсортированные по приоритету
  const sortByPriority = filterTaskCards.sort((a, b) => {
    if (a.priority > b.priority) {
      return 1;
    }
    if (a.priority < b.priority) {
      return -1;
    }
    return 0;
  });

  const taskCards = sortByPriority.map((task) => <Task task={task} />);

  return <div className={tasklistStyle.container}>{taskCards}</div>;
}

export default TaskList;
