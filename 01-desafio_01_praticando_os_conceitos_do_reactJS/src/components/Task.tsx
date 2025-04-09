import style from '../components/Task.module.css'
import { Trash } from '@phosphor-icons/react';

interface TaskProps {
  todo: {
    id: number;
    text: string;
    isCompleted: boolean;
  }
  removeTodo: (id: number) => void;
  completeTodo: (id: number) => void;
}

export function Task({ todo, removeTodo, completeTodo }: TaskProps) {

  return (
    <div className={style.taskTodo}>
      <label className={style.checkboxContainer}>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onClick={() => completeTodo(todo.id)}
        />
        <span className={style.customCheckbox}></span>
      </label>
      <strong style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>{todo.text}</strong>
      <div className={style.buttonTrash}>
        <button onClick={() => removeTodo(todo.id)}> <Trash size={16} /> </button>
      </div>
    </div>
  );
}
