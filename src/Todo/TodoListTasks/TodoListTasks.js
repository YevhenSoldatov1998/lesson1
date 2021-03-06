import React from 'react'
import TodoListTask from "./TodoListTask/TodoListTask";

const TodoListHeader = (props) => {
    return (
        <div className="todoList-tasks">
            <TodoListTask changeIsTitle ={props.changeIsTitle}
                          changeIsDone={props.changeIsDone}
                          state={props.state}/>
        </div>
    )
}

export default TodoListHeader