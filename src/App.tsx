import { useState } from "react";
import { Header } from "./Components/Header";
import { NewTaskForm } from "./Components/NewTaskForm";
import { TaskList } from "./Components/TaskList";

export type TaskType = {
  id: string;
  desc: string;
  isConcluded: boolean;
};

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  function addTask(newTask: TaskType) {
    setTasks((oldTasks) => [...oldTasks, newTask]);
  }

  function removeTask(taskId: string) {
    setTasks((oldTasks) => [...oldTasks.filter((task) => task.id !== taskId)]);
  }

  function changeTaskConcludedStatus(taskToEdit: TaskType) {
    setTasks((oldTasks) => [
      ...oldTasks.map((task) => ({
        ...task,
        isConcluded:
          task.id === taskToEdit.id ? !task.isConcluded : task.isConcluded,
      })),
    ]);
  }

  return (
    <>
      <Header />
      <NewTaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        removeTask={removeTask}
        changeTaskConcludedStatus={changeTaskConcludedStatus}
      />
    </>
  );
}

export default App;
