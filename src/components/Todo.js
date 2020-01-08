import React from 'react'

const Todo = ({todo, oper}) => {

    const styleDone = {
        textDecoration: 'line-through'
    }
    const styleYet = {
        textDecoration: 'underline'
    }

    const handleChange = () => {
        console.log("handleChange")
        oper.updateDone(todo.tno)
    }

    const handleClick = () => {
        console.log("delete click")
        oper.deleteTodo(todo.tno)
    }

    return (
        <div>
            <input type='checkbox'onChange= {handleChange}></input>
            <span style={todo.done? styleDone:styleYet}>{todo.title}</span>
            <button onClick = {handleClick}>DELETE</button>
        </div>
    )
}
export default Todo