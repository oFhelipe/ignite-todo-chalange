import styles from "./Task.module.css";
import { Trash, Check } from "phosphor-react";
import { TaskType } from "../../App";

type TaskProps = {
  task: TaskType;
  onRemoveTask: (taskId: string) => void;
  changeTaskConcludedStatus: (taskToEdit: TaskType) => void;
};

export function Task({
  task,
  onRemoveTask,
  changeTaskConcludedStatus,
}: TaskProps) {
  function handleRemoveTask() {
    onRemoveTask(task.id);
  }

  function handleChangeTaskStatus() {
    console.log(task.desc);
    changeTaskConcludedStatus(task);
  }

  return (
    <div
      className={`${styles.task} ${task.isConcluded ? styles.checked : ""}`}
      onClick={handleChangeTaskStatus}
    >
      <div className={styles.checkbox}>
        {task.isConcluded && <Check size={12} />}
      </div>
      <p>{task.desc}</p>
      <button onClick={handleRemoveTask}>
        <Trash size={18} />
      </button>
    </div>
  );
}
