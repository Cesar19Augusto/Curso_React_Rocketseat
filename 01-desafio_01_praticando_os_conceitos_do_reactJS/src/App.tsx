import { Header } from './components/Header';
import { Task } from './components/Task';
import { TaskBar } from './components/TaskBar';
import './App.css';
import './global.css';
import { useState } from 'react';

function App() {

  const [taskList, setTaskList] = useState<string[]>([]);
    function handleDeleteTask (taskContent:string):void {
      const newTaskList = taskList.filter(task=>{ /*task= A variavél que será utilizada para receber o valor de cada item do tasklist*/ 
        return task !== taskContent;
      })
      setTaskList(newTaskList);/*Define o valor do estado*/
    }

  return (
    <div>
      {/*Precisa da header*/}
      {/*Precisa da addingTask que esta dentro da header*/}
      <Header />
      <main>
        <TaskBar />
        {taskList.map(task => {
          return (<Task content={task} onDeleteTask={handleDeleteTask}/>)
        })
        }
      </main>
    </div>
  )
}

export default App
