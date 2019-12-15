let store = {
    _state: {
        TodoList: {
            TodoListTasks: {
                tasks: [
                    {id: 1, title: "CSS", isDone: false, priority: 'low'},
                    {id: 2, title: "JS", isDone: false, priority: 'height'},
                    {id: 3, title: "ReactJS", isDone: true, priority: 'low'},
                    {id: 4, title: "JS", isDone: false, priority: 'low'},
                ]
            },
            TodoListFooter: {
                filter: {
                    filterValue: 'All'
                }
            }

        }
    },
    getState() {
        return this._state
    }
}
export default store