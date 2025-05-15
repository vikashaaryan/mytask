import React from 'react'
import InsertTask from './InsertTask'
import CallingTask from './CallingTask'
import { useState } from 'react'
export const TaskApp = () => {
    const [task, setTask] = useState ([""]);
    const [newTask, setNewTask] = useState("")

    const handleInsert=() =>{
        setTask([...task, {id:task.length + 1, task:newTask, isCompleted:false}])
        setNewTask("")
    }
    const handleDelete = (id) =>{
        const newtasklist = task.filter((t) => t.id !==id)
        setTask(newtasklist);
    }
  return (
    <div>
        <InsertTask newTask={newTask} setNewTask={setNewTask} handleInsert={handleInsert}/>
        <CallingTask data={task} handleDelete={handleDelete}/>
     
    </div>
  )
}
