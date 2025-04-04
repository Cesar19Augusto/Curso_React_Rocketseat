import style from '../components/Header.module.css'; 
import todologo from '../assets/Logo.png';  
import { PlusCircle } from '@phosphor-icons/react';  
import { useState } from 'react';  

interface HeaderProps {
    addTodo: (text: string) => void;  
  }

export function Header({addTodo}: HeaderProps) {
    const [value, setValue] = useState("")

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        addTodo(value)
        setValue("")
    }

    return (
        <>
            <header className={style.header}>  
                <div>
                    <img src={todologo} alt="Logotipo Todo" />  
                    <form className={style.addingTask} onSubmit={handleSubmit}>  
                        <input 
                            name="addingTask"  
                            placeholder="Adicione uma nova tarefa" 
                            value={value}
                            onChange={(event) => setValue(event.target.value)}
                            />
                        <footer>
                            <button type="submit">  
                                Criar
                                <PlusCircle size={18} className={style.plusCircle}/>  
                            </button>
                        </footer>
                    </form>
                </div>
            </header>
        </>
    );
}
