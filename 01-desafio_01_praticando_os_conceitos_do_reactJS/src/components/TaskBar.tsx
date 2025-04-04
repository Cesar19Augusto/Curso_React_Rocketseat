import style from '../components/TaskBar.module.css';

interface TaskBarProps {
    allTodo: number;
    allCompleted: number;
}
export function TaskBar({allTodo, allCompleted}: TaskBarProps){
    return(
        <div className={style.TaskBar}>
            <strong className={style.strong1}>Tarefas Criadas <span>{allTodo}</span></strong>
            <strong className={style.strong2}>Concluidas <span>{allCompleted} de {allTodo}</span></strong>
        </div>
    );
}