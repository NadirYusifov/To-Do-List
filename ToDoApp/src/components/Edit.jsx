import React, { useState } from 'react'

const Edit = ({ editTodo, task }) => {
    const [value, setValue] = useState("")

    const handleSumbit = e => {
        e.preventDefault()
        editTodo(value, task.id);
        setValue("")
    }

    return (
        <div>
            <form className='w-full text-md my-5' onSubmit={handleSumbit}>
                <input required className='focus:outline-none focus:shadow-outline leading-light px-3 rounded-md py-2 w-[300px] bg-slate-400/25 text-white placeholder:text-gray-300/50' placeholder = "Update Task" type='text' onChange={(e) => setValue(e.target.value)} value={value}/>
                <button className='px-3 py-2 bg-blue-500 rounded-md text-white mx-3' type='submit'>Update Task</button>
            </form>
        </div>
    )
}

export default Edit