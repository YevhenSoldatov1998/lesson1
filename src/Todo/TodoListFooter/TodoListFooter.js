import React from 'react'
import './TodoListFooter.sass'

class TodoListHeader extends React.Component {
    state = {
        isHidden: false
    }
    handleShow = () => {
        this.setState({
            isHidden: false
        })
    }
    handleHidden = () => {
        this.setState({
            isHidden: true
        })
    }
    render(){
        let classForAll = this.props.filterValue === "All" ? "filterActive" : "";
        let classForCompleted = this.props.filterValue === "Completed" ? "filterActive" : "";
        let classForActive = this.props.filterValue === "Active" ? "filterActive" : "";
        return (
            <div className="todoListFooter">
                {!this.state.isHidden &&
                <React.Fragment>
                    <button onClick={()=> this.props.changeFilterValue('All')}className={classForAll}>All</button>
                    <button onClick={()=> this.props.changeFilterValue('Completed')}className={classForCompleted}>Completed</button>
                    <button onClick={()=> this.props.changeFilterValue('Active')}className={classForActive}>Active</button>
                </React.Fragment>
                }
                <br/>
                {this.state.isHidden?
                    <button onClick={this.handleShow}>Show</button>:
                    <button onClick={this.handleHidden}>Hidden</button>
                }
            </div>
        )
    }

}
export default TodoListHeader