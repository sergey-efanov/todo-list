import styleTaskInfo from "./taskinfo.module.css";

export default function TaskInfo({ task }) {
  // console.log(task.description);
  return (
    <div>
      <p>Описание: {task.description}</p>
      <p>Участники: {task.participants.join(", ")}</p>
      <p>Дата создания: {task.created_date}</p>
      {task.completion_date && <p>Дата завершения: {task.completion_date}</p>}
    </div>
  );
}
