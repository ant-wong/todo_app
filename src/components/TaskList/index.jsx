import React from 'react';
import Todo from './Todo'

class TaskList extends React.Component {
    render() {

        let filteredTodos = this.props.todos.filter((todo) => {
            if (this.props.filter === 'active') {
                return todo.done === false
            } else if (this.props.filter === 'complete') {
                return todo.done === true
            } else {
                return true
            }
        })

        let taskJSX = filteredTodos.map((todo, i) => {
            return <Todo 
                    text={todo.text}
                    done={todo.done}
                    key={i}
                    toggleDone={this.props.toggleDone}
                    index={i} />
        })

        return (
            <div id="list">
                <ul>
                    { taskJSX }
                </ul>
            </div>
        )
    }
}

export default TaskList;