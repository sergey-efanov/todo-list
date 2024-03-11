// const priorityTask = ["Низкий", "Средний", "Высокий"];
// const priorityTask = { "1": "Низкий", "2": "Средний", "3": "Высокий" };
const priorityTask = [
  { id: 1, status: "Низкий" },
  { id: 2, status: "Средний" },
  { id: 3, status: "Высокий" }]
const statusTask = ["В работе", "Приостановлена", "Завершена"];
const participantsTask = ["User1", "User2", "User3", "User4", "User5"];

export default [
  {
    id: 1,
    created_date: "2024-03-03",
    completion_date: null,
    priority: priorityTask[2],
    description: "Задача 1",
    participants: [participantsTask[1], participantsTask[4]],
    execution_status: statusTask[0],
  },
  {
    id: 2,
    created_date: "2024-03-02",
    completion_date: null,
    priority: priorityTask[1],
    description:
      "Задача2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur consequatur rem ut rerum corporis deleniti quia reiciendis delectus, qui suscipit magni sapiente odit deserunt possimus culpa minima porro veniam molestiae.",
    participants: [
      participantsTask[0],
      participantsTask[2],
      participantsTask[3],
    ],
    execution_status: statusTask[0],
  },
  {
    id: 3,
    created_date: "2024-03-06",
    completion_date: null,
    priority: priorityTask[2],
    description: "Задача 3",
    participants: [participantsTask[0]],
    execution_status: statusTask[1],
  },
  {
    id: 4,
    created_date: "2024-03-07",
    completion_date: "2024-03-10",
    priority: priorityTask[1],
    description: "Задача 4",
    participants: [participantsTask[0]],
    execution_status: statusTask[2],
  },
  {
    id: 5,
    created_date: "2024-03-06",
    completion_date: null,
    priority: priorityTask[1],
    description: "Задача 5",
    participants: [participantsTask[0]],
    execution_status: statusTask[0],
  },
];
