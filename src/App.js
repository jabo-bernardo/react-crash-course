import React from 'react';
import Todos from './components/Todos';

import "./App.css";

class App extends React.Component {

    state = {
        todos: [
            {
                id: 0,
                title: "Todo One",
                completed: false
            },
            {
                id: 1,
                title: "Todo Two",
                completed: false
            },
            {
                id: 2,
                title: "Todo Three",
                completed: false
            },
        ]
    }

    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        });
    }

    deleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(v => v.id !== id)
        })
    }

    render() {
        return (
            <div className = "App" >
                <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
            </div>
        );
    }
}

export default App;