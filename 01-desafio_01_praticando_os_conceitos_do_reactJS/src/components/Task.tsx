import style from '../components/Task.module.css'
import { Trash } from '@phosphor-icons/react';

interface TaskProps {
  todo: {
    id: number;
    text: string;
    isCompleted: boolean;
  }
  removeTodo: (id: number) => void;
  completeTodo:(id:number) => void;
}

export function Task({ todo, removeTodo, completeTodo }: TaskProps) {

  return (
    <div className={style.taskTodo}>
      <input type="checkbox" checked={todo.isCompleted} onChange={() => completeTodo(todo.id)}/>
      <strong style={{ textDecoration: todo.isCompleted ? "line-through" : "none"}}>{todo.text}</strong>
      <button onClick={() => removeTodo(todo.id)}> <Trash size={24} /> </button>
    </div>
  );
}
