import React from 'react';
import './App.css';
import TodoList from "./Todo/TodoList";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks:[
                {id: 1, title: "CSS", isDone: false, priority: 'low'},
                {id: 2, title: "JS", isDone: false, priority: 'height'},
                {id: 3, title: "ReactJS", isDone: true, priority: 'low'},
                {id: 4, title: "JS", isDone: false, priority: 'low'},
            ],
            value: '',
            filterValue: 'All'
        }
    }

    addTask = () => {
        let {id, title, isDone, priority} = this.state.tasks;
        let lastId = this.state.tasks[this.state.tasks.length-1].id + 1;
        let obj = {
            id: lastId,
            title: this.state.value,
            isDone: false,
            priority: 'low'
        }
        if(this.state.value){
            this.setState({
                tasks: [...this.state.tasks, obj],
                value: ''
            })
        }

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
    changeIsTask = (taskId , obj) => {
        let newTasks = this.state.tasks.map( t =>{
            if(t.id === taskId){
                return {...t, ...obj}
            }
            else{
                return t
            }
        })
        this.setState({
            tasks: newTasks
        })
    }
    changeIsDone = (taskId , isDone) => {
        this.changeIsTask(taskId , {isDone: !isDone})
    }
    changeIsTitle = (taskId , title) => {
        this.changeIsTask(taskId , {title})
    }

    render = () => {
        return (
            <div className="App">
                <TodoList taskText={this.taskText}
                          addTask={this.addTask}
                          changeFilterValue = {this.changeFilterValue}
                          changeIsDone ={this.changeIsDone}
                          changeIsTitle = {this.changeIsTitle}
                          state={this.state}
                />
            </div>
        );
    }
}

export default App;

