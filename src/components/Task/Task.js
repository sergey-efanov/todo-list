import { useState } from "react";

import taskStyle from "./task.module.css";

function Task({ task, children }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleTaskClick = () => {
    if (isVisible) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <div className={taskStyle.container} onClick={handleTaskClick}>
      <h3 className={taskStyle.title}>Задача №{task.id}</h3>
      <p>Статус: {task.execution_status}</p>
      <p>Приоритет: {task.priority.status}</p>
      {isVisible && children}
    </div>
  );
}

export default Task;
