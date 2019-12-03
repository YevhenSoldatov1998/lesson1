import React from 'react';
import TodoListHeader from "./Todo/TodoListHeader";
import TodoListTasks from "./Todo/TodoListTasks";
import TodoListFooter from './Todo/TodoListFooter';
import './App.css';

class App extends React.Component {
    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader/>
                    <TodoListTasks />
                    <TodoListFooter />
                </div>
            </div>
        );
    }
}

export default App;

