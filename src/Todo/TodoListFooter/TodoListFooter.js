import React from 'react'
import './TodoListFooter.sass'

const TodoListHeader = (props) => {
    let classForAll = props.filterValue === "All" ? "filterActive" : "";
    let classForCompleted = props.filterValue === "Completed" ? "filterActive" : "";
    let classForActive = props.filterValue === "Active" ? "filterActive" : "";
    return (
        <div className="todoListFooter">
            <button onClick={()=> props.changeFilterValue('All')}className={classForAll}>All</button>
            <button onClick={()=> props.changeFilterValue('Completed')}className={classForCompleted}>Completed</button>
            <button onClick={()=> props.changeFilterValue('Active')}className={classForActive}>Active</button>
        </div>
    )
}
export default TodoListHeader