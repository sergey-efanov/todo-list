import taskStyle from "./task.module.css";

function Task({ task }) {
  return (
    <div className={taskStyle.container}>
      <h3 className={taskStyle.title}>Задача №{task.id}</h3>
      <p>Статус: {task.execution_status}</p>
      <p>Приоритет: {task.priority}</p>
      <p>Описание: {task.description}</p>
      <p>Участники: {task.participants.join(", ")}</p>
      <p>Дата создания: {task.created_date}</p>
      {task.completion_date && <p>Дата завершения: {task.completion_date}</p>}
    </div>
  );
}

export default Task;
