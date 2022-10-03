import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { TaskType } from "../../App";
import styles from "./NewTaskForm.module.css";
import { v4 as uuid } from "uuid";

type NewTaskFormProps = {
  onAddTask: (newTask: TaskType) => void;
};

export function NewTaskForm({ onAddTask }: NewTaskFormProps) {
  const [taskDesc, setTaskDesc] = useState("");

  function handleAddTask(e: FormEvent) {
    e.preventDefault();
    const newTask: TaskType = {
      id: uuid(),
      desc: taskDesc,
      isConcluded: false,
    };
    onAddTask(newTask);
    setTaskDesc("");
  }

  function handleChangeTaskDesc(e: ChangeEvent<HTMLInputElement>) {
    e.currentTarget.setCustomValidity("");
    setTaskDesc(e.currentTarget.value);
  }

  function handleInvalidTaskDesc(e: ChangeEvent<HTMLInputElement>) {
    e.currentTarget.setCustomValidity("Descrição da tarefa é obrigatório");
  }

  return (
    <form className={styles.form} onSubmit={handleAddTask}>
      <input
        value={taskDesc}
        required
        placeholder="Adicione uma nova tarefa"
        onChange={handleChangeTaskDesc}
        onInvalid={handleInvalidTaskDesc}
      />
      <button>
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
}
