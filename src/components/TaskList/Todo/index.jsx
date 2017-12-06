import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component {
    render() {
        return (
            <li><input
                type="checkbox"
                checked={this.props.done}
                onChange={
                    () => { this.props.toggleDone(this.props.index) }
                }
            /> {this.props.text}
            </li>
        )
    }
}

Todo.propTypes = {
    done: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    toggleDone: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
}

export default Todo;