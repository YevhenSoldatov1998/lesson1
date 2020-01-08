import React from 'react'

class TodoListTask extends React.Component {
    state = {
        editMode: false
    }
    callChangeIsDone = (el) => {
        this.props.changeIsDone(el.id, el.isDone)
    };
    callChangeIsTitle = (e, el) => {
        debugger
        let body = e.target.value;
        this.props.changeIsTitle(el.id, body);
    };
    activatedEditMode =(id)=>{
        this.setState({
            editMode: true
        })
    }
    deActivatedEditMode =(id)=>{
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <React.Fragment>
                {this.props.state.map(el => {
                    return (
                        <div key={el.id} className={el.isDone?"todoList-task done": "todoList-task"}>
                            <input type="checkbox" onChange={this.callChangeIsDone.bind(this, el)}
                                   defaultChecked={el.isDone}/>
                            <span>{`${el.id}-`}</span>
                            {this.state.editMode?
                                <input type="text"
                                       onBlur={this.deActivatedEditMode}
                                       onChange={(e)=>this.callChangeIsTitle(e , el)}
                                       value={el.title}/>:
                                <span onClick={this.activatedEditMode.bind(this)}>{`${el.title}`}</span>
                            }
                            <small> , priority: {el.priority}</small>
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }

}

export default TodoListTask