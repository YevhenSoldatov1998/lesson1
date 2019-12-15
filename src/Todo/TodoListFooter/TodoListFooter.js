import React from 'react'
import './TodoListFooter.sass'

const TodoListHeader = (props) => {
    let classForAll = props.filterValue === "All" ? "filterActive" : "";
    let classForCompleted = props.filterValue === "Completed" ? "filterActive" : "";
    let classForActive = props.filterValue === "Active" ? "filterActive" : "";
    return (
        <div className="todoListFooter">
            <button className={classForAll}>All</button>
            <button className={classForCompleted}>Completed</button>
            <button className={classForActive}>Active</button>
        </div>
    )
}
export default TodoListHeader