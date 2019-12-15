import React from 'react'
import TodoListTask from "./TodoListTask/TodoListTask";

const TodoListHeader = (props) => {
    return (
        <div className="todoList-tasks">
            <TodoListTask tasks={props.TodoListTasks.tasks}/>
        </div>
    )
}

export default TodoListHeader