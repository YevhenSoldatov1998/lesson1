import React from 'react';
import './App.css';
import TodoList from "./Todo/TodoList";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks:[ {id: 1, title: "CSS", isDone: false, priority: 'low'},
                {id: 2, title: "JS", isDone: false, priority: 'height'},
                {id: 3, title: "ReactJS", isDone: true, priority: 'low'},
                {id: 4, title: "JS", isDone: false, priority: 'low'},],
            value: 'null',
            filterValue: 'All'
        }
    }

    addTask = () => {
        let obj = {
            id: 2,
            title: this.state.value,
            isDone: false,
            priority: 'ds'
        }
        this.setState({
            tasks: [...this.state.tasks, obj],
            value: ''
        })
    }
    taskText = (text) => {
        this.setState({
            value: text
        })
    }
    changeFilterValue = (filterText) =>{
        this.setState({
            filterValue: filterText
        })
    }
    changeIsDone = (task , isDone) => {
        let newTasks = this.state.tasks.map( t =>{
            if(t === task){
               return {...t, isDone: !isDone}
            }
            else{
                return t
            }
        })
        this.setState({
            tasks: newTasks
        })
    }
    render = () => {
        return (
            <div className="App">
                <TodoList taskText={this.taskText}
                          addTask={this.addTask}
                          changeFilterValue = {this.changeFilterValue}
                          changeIsDone ={this.changeIsDone}
                          state={this.state}
                />
            </div>
        );
    }
}

export default App;

