import { useState } from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Numbers } from "./components/Numbers";
import "./global.css";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: "teste",
      title: "teste",
      isCompleted: true,
    },
    {
      id: "teste2",
      title: "teste2",
      isCompleted: false,
    },
  ]);

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function deleteTaskById(taskId: string) {
    const NewTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(NewTasks);
  }

  function toggleTaskCompletedById(taskId: string) {
    const NewTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });

    setTasks(NewTasks);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <div className={styles.wrapper}>
        <Numbers
          tasks={tasks}
          onDelete={deleteTaskById}
          onComplete={toggleTaskCompletedById}
        />
      </div>
    </>
  );
}

export default App;
