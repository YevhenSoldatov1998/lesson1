import React from 'react';
import './App.css';
import TodoList from "./Todo/TodoList";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: props.store.getState().TodoList.TodoListTasks.tasks,
            value: 'null'
        }

    }
    addTask = () =>{
        let obj = {
            id: 2,
            title: this.state.value,
            isDone: false,
            priority: 'ds'
        }
        this.setState({
            tasks: [...this.state.tasks , obj],
            value: ''
        })
    }

    taskText = (text)=>{
        this.setState({
            value: text
        })
    }
    render = () => {
        return (
            <div className="App">
                <TodoList taskText = {this.taskText} addTask={this.addTask} state={this.state}/>
            </div>
        );
    }
}

export default App;

