import React from 'react'

const TodoListHeader = (props) => {
    const inputText = (e) => {
        let text = e.target.value;
        props.taskText(text)
    }
    return (
        <div className="todoList-header">
            <h3 className="todoList-header__title">What to Learn</h3>
            <div className="todoList-newTaskForm">
                <input type="text" value={props.value} onChange={inputText.bind(this)} placeholder="New task name"/>
                <button onClick={() => props.addTask()}>Add</button>
            </div>
        </div>
    )
}

export default TodoListHeader