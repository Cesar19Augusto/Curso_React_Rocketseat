import style from '../components/TaskBar.module.css';

export function TaskBar(){
    return(
        <div className={style.TaskBar}>
            <strong>Tarefas Criadas</strong>
            <strong>Concluidas</strong>
        </div>
    );
}