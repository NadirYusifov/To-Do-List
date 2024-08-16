import React, { useState } from 'react'

const Form = ({ createtodo }) => {
    const [value, setValue] = useState("")

    const handleSumbit = e => {
        e.preventDefault()
        createtodo(value);
        setValue("")
    }

    return (
        <div>
            <form className='w-full text-md' onSubmit={handleSumbit}>
                <input required className='focus:outline-none focus:shadow-outline leading-light px-3 rounded-md py-2 w-[300px] bg-slate-400/25 text-white placeholder:text-gray-300/50' placeholder = "Todo Əlavə Edin" type='text' onChange={(e) => setValue(e.target.value)} value={value}/>
                <button className='px-3 py-2 bg-blue-500 rounded-md text-white mx-3' type='submit'>Add Task</button>
            </form>
        </div>
    )
}

export default Form