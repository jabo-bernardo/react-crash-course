import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {

    getStyle = () => {
        return {
            background: "#f4f4f4",
            borderBottom: "1px dotted #CCC",
            padding: "10px",
            textDecoration: this.props.todo.completed ? "line-through" : "none"
        }
    }

    markComplete = () => {

    }

    render() {
        let { title, id } = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                    { title }
                    <button style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: "red",
    display: "inline-block",
    border: "none",
    lineHeight: "0",
    textAlign: "center",
    color: "white",
    borderRadius: "16px",
    width: "16px",
    height: "16px",
    padding: "10px",
    position: "absolute",
    right: "1rem",
    outline: "none",
    cursor: "pointer"
}

export default TodoItem;