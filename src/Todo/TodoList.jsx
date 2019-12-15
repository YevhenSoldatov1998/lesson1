import React from 'react'
import TodoListHeader from "./TodoListHeader/TodoListHeader";
import TodoListTasks from "./TodoListTasks/TodoListTasks";
import TodoListFooter from "./TodoListFooter/TodoListFooter";
const TodoList = (props) =>{
    return(
        <div className="todoList">
            <TodoListHeader/>
            <TodoListTasks TodoListTasks = {props.TodoList.TodoListTasks} />
            <TodoListFooter filterValue = {props.TodoList.TodoListFooter.filter.filterValue}/>
        </div>
    )
}
export default TodoList