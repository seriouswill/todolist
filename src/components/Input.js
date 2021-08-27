import React, {useState} from 'react';


const InputDisplay = (props) => {

    const addTaskHandler = () => {
      const newTasks = [...props.tasks]
      newTasks.push(props.input)
      props.setTasks(newTasks)
      props.setInput("")
    }
    const deleteTask = () => {
        const newTasks = [...props.tasks]
        newTasks.pop(props.input)
        props.setTasks(newTasks)
        props.setInput("")
    }
    return <div id="input">
      <div>
      
      <input 
      value={props.input}
      type="text" 
      onChange={(e) => props.setInput(e.target.value)}
      ></input>
      <button onClick={addTaskHandler}>Add Task</button>
      <button onClick={deleteTask}>Delete Last Task</button>
    </div></div>
  }
export default InputDisplay;  