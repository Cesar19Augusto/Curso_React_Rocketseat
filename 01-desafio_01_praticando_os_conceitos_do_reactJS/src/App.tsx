import { Header } from './components/Header';
import { Task } from './components/Task';
import { TaskBar } from './components/TaskBar';
import './App.module.css';
import './global.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {            // Dados exemplo
      id: 1,
      text: "Criar funcionalidade X no sistema",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      isCompleted: false,
    },
  ])

  const addTodo = (text: string) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() *10000),
      text,
      isCompleted:false,
    }]
    setTodos(newTodos)
  }

  const removeTodo = (id: number) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo: null)
    setTodos(filteredTodos)
  }

  const completeTodo = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo))
  }

  const allTodo = todos.length;
  const allCompleted = todos.filter(todo=> todo.isCompleted).length;
  
  return (
    <div>
      <Header addTodo={addTodo} />
      <main> 
        <TaskBar allTodo={allTodo} allCompleted={allCompleted}/>
        <div>
        {todos.map((todo) => (<Task key= {todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>))}
        </div>
      </main>
    </div>
  )
}

export default App
