import React from 'react'
import TodoListHeader from "./TodoListHeader/TodoListHeader";
import TodoListTasks from "./TodoListTasks/TodoListTasks";
import TodoListFooter from "./TodoListFooter/TodoListFooter";

class TodoList extends React.Component {

    render() {
        return (
            <div className="todoList">
                <TodoListHeader value={this.props.state.value} taskText={this.props.taskText}
                                addTask={this.props.addTask}/>
                <TodoListTasks changeIsDone={this.props.changeIsDone}
                               state={this.props.state.tasks.filter(t => {
                    switch (this.props.state.filterValue) {
                        case "All":
                            return true;
                        case "Completed":
                            return t.isDone;
                        case "Active":
                            return !t.isDone;
                        default:
                            return true;

                    }
                })}
                />
                <TodoListFooter changeFilterValue={this.props.changeFilterValue}
                                filterValue={this.props.state.filterValue}/>
            </div>
        )
    }


}

export default TodoList