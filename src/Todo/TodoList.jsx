import React from 'react'
import TodoListHeader from "./TodoListHeader/TodoListHeader";
import TodoListTasks from "./TodoListTasks/TodoListTasks";
import TodoListFooter from "./TodoListFooter/TodoListFooter";
class TodoList extends React.Component{

    render() {
        return(
            <div className="todoList">
                <TodoListHeader value ={this.props.state.value} taskText={this.props.taskText} addTask={this.props.addTask}/>
                <TodoListTasks  state = {this.props.state.tasks} />
                <TodoListFooter  filterValue = "All"/>
            </div>
        )
    }


}
export default TodoList