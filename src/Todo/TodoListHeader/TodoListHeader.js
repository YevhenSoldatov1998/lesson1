import React from 'react'

class TodoListHeader extends React.Component {
    state ={
        error: false
    }
    inputText = (e) => {
        let text = e.target.value;
        this.props.taskText(text)
        this.setState({
            error: false
        })
    }
    callAddTask = () => {
        this.props.addTask()
        if(!this.props.value){
            this.setState({
                error: true
            })

        }
        else {
            this.setState({
                error: false
            })
        }

    }

    render = () => {
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input type="text" className={this.state.error ? 'error' : ''} value={this.props.value} onChange={this.inputText.bind(this)} placeholder="New task name"/>
                    <button onClick={this.callAddTask.bind(this)}>Add</button>
                </div>
            </div>
        )
}
}

export default TodoListHeader