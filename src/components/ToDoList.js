import React, { useState } from 'react'

const TaskList = (props) => {
  const removeHandler = (index) => {
		let newTasks = [...props.tasks];
        newTasks.splice(index, 1);
        props.setTasks(newTasks)
        
    }
    return (
      <div>
        {props.tasks.map((task, index) => {
          return <p>{task} <button key={index} onClick={() => removeHandler(index)}>X</button></p>
        })}
      </div>
    )
  }

export default TaskList;
