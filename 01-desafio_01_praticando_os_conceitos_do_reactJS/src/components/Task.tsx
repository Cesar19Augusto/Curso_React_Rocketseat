import style from '../components/Task.module.css'
import { Trash } from '@phosphor-icons/react';

interface TaskProps {
    content: string;
    onDeleteTask: (taskContent: string) => void;
  }
  
  export function Task({ content, onDeleteTask }: TaskProps) {
    function deleteTask() {
      onDeleteTask(content);
    }

    return (
        <div className={style.taskTodo}>
            <input type="checkbox"/>
            <strong>Tarefa colocada</strong>
            <button onClick={deleteTask} title="Deletar comentário"> 
                <Trash size={24} />
            </button>
        </div>
    );
}
