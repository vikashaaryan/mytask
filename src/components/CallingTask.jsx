import React from 'react'

const CallingTask = (props) => {
  return (
    <div className='task-list'>
        {  props.data.map((task) =><p> {task.id}. {task.task} <span onClick={() =>props.handleDelete(task.id)}>X</span></p> )}
   
    </div>
  )
}

export default CallingTask