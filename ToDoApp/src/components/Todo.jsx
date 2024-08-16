import React from 'react'
import { CiTrash } from "react-icons/ci";
import { PiPencilLine } from "react-icons/pi";

const Todo = ({ task, deleteTodo, editTodo }) => {
  
return (
  <div className='flex justify-center m-3'>
    <div className='w-[300px] flex items-center justify-between px-3 rounded-md py-3 bg-slate-400/25 text-white text-md'>
      <p>{task.task}</p>
      <div className='flex'>
      <PiPencilLine onClick={() => editTodo(task.id)} className='cursor-pointer'/>
      <CiTrash onClick={() => deleteTodo(task.id)} className='cursor-pointer' />
      </div>
    </div>
    </div>
  )
}

export default Todo