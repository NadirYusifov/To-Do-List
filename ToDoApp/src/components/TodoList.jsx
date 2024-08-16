import React, { useState } from 'react'
import Form from './Form'
import {v4 as uuidv4} from 'uuid'
import Todo from './Todo';
import Edit from './Edit';
uuidv4()

function TodoList() {
 const [todovalue, setTodo] = useState([]);

 const createtodo = todo =>  {
    setTodo([...todovalue, {id: uuidv4(), task: todo}])
 }
 
const deleteTodo = id => 
setTodo(todovalue.filter(todo => todo.id !== id))

const editTodo = id => {
    setTodo(todovalue.map(todo => todo.id === id ? {...todo, isediting:!todo.isediting}: todo))
}

const editTask = (task, id) => {
    setTodo(todovalue.map(todo => todo.id === id ? {...todo, task, isediting:!todo.isediting} : todo))
}

    return (
    <div className='container h-12 p-[130px] text-center'>
    <h3 className='text-white pb-5 text-4xl'>Todo List</h3>
        <Form createtodo = {createtodo}/>
        {todovalue.map((todo, index) => ( 
            todo.isediting ? (<Edit key = {index} editTodo={editTask} task={todo}/>) : (
            <Todo task={todo}
                key={index}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
            />
            )
        ))} 
    </div>
  )
}

export default TodoList