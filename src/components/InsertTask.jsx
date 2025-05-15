import React from 'react'

const InsertTask = (props) => {
  return (
    <div className='insert'>
      <input type="text" value={props.newTask} onChange={(e) => props.setNewTask(e.target.value)} className='form-control' placeholder='Enter Task Here...'/>
      <button type="submit" onClick={props.handleInsert} className='btn'>Go</button>
    </div>
  )
}

export default InsertTask