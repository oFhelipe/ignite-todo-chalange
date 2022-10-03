import { ClipboardText } from "phosphor-react";
import { TaskType } from "../../App";
import { Task } from "../Task";
import styles from "./TaskList.module.css";

type TaskListProps = {
  tasks: TaskType[];
  removeTask: (taskId: string) => void;
  changeTaskConcludedStatus: (taskToEdit: TaskType) => void;
};

export function TaskList({
  tasks,
  removeTask,
  changeTaskConcludedStatus,
}: TaskListProps) {
  const tasksNumber = tasks.length;
  const colcludesTasksNumber = tasks.filter((t) => t.isConcluded).length;

  return (
    <div className={styles.container}>
      <header>
        <div className={styles.createdTasks}>
          <p>Tarefas criadas</p>
          <span>{tasksNumber}</span>
        </div>
        <div className={styles.concludedTasks}>
          <p>Concluídas</p>
          <span>
            {colcludesTasksNumber} {tasksNumber > 0 && `de ${tasksNumber}`}
          </span>
        </div>
      </header>
      <div>
        {tasks.length ? (
          tasks.map((t) => (
            <Task
              key={t.id}
              task={t}
              onRemoveTask={removeTask}
              changeTaskConcludedStatus={changeTaskConcludedStatus}
            />
          ))
        ) : (
          <div className={styles.noTasks}>
              <ClipboardText size={64} weight="thin" />
              <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
              <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      </div>
    </div>
  );
}
