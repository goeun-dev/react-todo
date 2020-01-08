import React, {useState} from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoMenu from './TodoMenu'

let sequence = 0

const TodoWrapper = () => {

    const [todos, setTodos] = useState([])
    const [type, setType] = useState('A')

    const changeType = (typeValue) => {
        console.log('type:' + type)
        setType(typeValue)
    }

    const addTodo = (title) => {
        const newTodo = {tno:++sequence, title:title, done:false} 
        setTodos(todos.concat(newTodo))
    }

    const deleteTodo = (tno) => {
        setTodos(todos.filter(t => t.tno !== tno))
    }

    const updateDone = (tno) => {
        console.log("updateDone: " + tno)
        const target = todos.filter(t => t.tno === tno)[0]
        target.done = !target.done
        console.log(todos)
        const newTodos = todos.slice()
        setTodos(newTodos)
    }

    const oper = {deleteTodo, updateDone, type}

    return(
        <div>
            <h1>Todo Wrapper Component</h1>
            <TodoMenu changeType={changeType}></TodoMenu>
            <TodoInput addTodo = {addTodo}></TodoInput>
            <TodoList todos={todos} oper={oper}></TodoList>
        </div>
    )
}
export default TodoWrapper