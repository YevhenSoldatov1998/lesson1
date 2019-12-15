import React from 'react'
const TodoListTask = (props)=>{
    debugger
    return (
        <React.Fragment>
            {props.tasks.map( el => {
                return (
                    <div key={el.id} className="todoList-task">
                        <input type="checkbox" defaultChecked={el.isDone}/>
                        <span>{el.title}</span>
                        <small> , priority: {el.priority}</small>
                    </div>
                )
            })}
        </React.Fragment>

    )
}
export default TodoListTask