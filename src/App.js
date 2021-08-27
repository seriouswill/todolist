
import React, {useState} from 'react'
import InputDisplay from './components/Input';
import TaskList from './components/ToDoList';

function App() {

  const [input, setInput] = useState("")
  const [tasks, setTasks] = useState([])
  return (
    <div className="App">
      
        <h1>Will's ToDo App!</h1>
        
        <TaskList id="tasklist" tasks={tasks} setTasks={setTasks}/>
        <InputDisplay  input={input} setInput={setInput} tasks={tasks} setTasks={setTasks}/>
      
    </div>
  );
}



export default App;
