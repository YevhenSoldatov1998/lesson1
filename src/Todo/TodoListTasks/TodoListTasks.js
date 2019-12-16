import React from 'react'
import TodoListTask from "./TodoListTask/TodoListTask";

const TodoListHeader = (props) => {
    return (
        <div className="todoList-tasks">
            <TodoListTask state={props.state}/>
        </div>
    )
}

export default TodoListHeader