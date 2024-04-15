import React from "react";
import './Header.css'

const Header = ({todos}) => {
    const activeTodosCount = todos.filter(todo => todo.isActive && !todo.isDeleted).length
    const doneTodosCount = todos.filter(todo => !todo.isActive && !todo.isDeleted).length
    return(
        <div className="todo-list-header">
            <h1>Todo List</h1>
            <div className="status">
                <span>{activeTodosCount} more, {doneTodosCount} done</span>
            </div>

        </div>
    )
}

export default Header