import React from 'react'

class TodoListTask extends React.Component {

    callChangeIsDone = (el) => {
        this.props.changeIsDone(el, el.isDone)
    }

    render() {
        return (
            <React.Fragment>
                {this.props.state.map(el => {
                    return (
                        <div key={el.id} className={el.isDone?"todoList-task done": "todoList-task"}>
                            <input type="checkbox" onChange={this.callChangeIsDone.bind(this, el)}
                                   defaultChecked={el.isDone}/>
                            <span>{el.title}</span>
                            <small> , priority: {el.priority}</small>
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }

}

export default TodoListTask