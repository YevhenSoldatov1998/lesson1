import React from 'react'
const TodoListTask = (props)=>{
    const callChangeIsDone = (el) => {
        props.changeIsDone(el, el.isDone )
    }
    return (
        <React.Fragment>
            {props.state.map( el => {
                return (
                    <div key={el.id} className="todoList-task">
                        <input type="checkbox" onChange={callChangeIsDone.bind(this, el)} defaultChecked={el.isDone}/>
                        <span>{el.title}</span>
                        <small> , priority: {el.priority}</small>
                    </div>
                )
            })}
        </React.Fragment>
    )
}
export default TodoListTask