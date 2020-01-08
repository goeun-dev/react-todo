import React from 'react'

const TodoMenu = ({changeType}) => {

    const handleClick = (e) => {
        const target = e.target
        changeType(target.getAttribute('custom-type'))
    }

    return (
        <div className = 'menu' onClick={handleClick}>
            <span custom-type='A'>ALL</span>
            <span custom-type='D'>DONE</span>
            <span custom-type='Y'>YET</span>
        </div>
    )

}
export default TodoMenu