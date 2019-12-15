import React from 'react';
import './App.css';
import TodoList from "./Todo/TodoList";

class App extends React.Component {
    render = () => {
        return (
            <div className="App">
                <TodoList TodoList={this.props.store.getState().TodoList}/>
            </div>
        );
    }
}

export default App;

