import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import * as apiCalls from "./api";
import './TodoList.css';


class Todolist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos:[]
        }

        this.addTodo = this.addTodo.bind(this);
    }

    componentDidMount(){
        this.loadTodos();
    }

    async loadTodos() {
        let todos = await apiCalls.getTodo();
        this.setState({ todos });
    }

    async deleteTodo(id) {
        await apiCalls.removeTodo(id);
        const todos = this.state.todos.filter(todo => todo._id !== id);
        this.setState({todos: todos});
    }

    async addTodo(val) {

        let newTodo = await apiCalls.createTodo(val);

        this.setState({ todos:[...this.state.todos, newTodo] });

    }

    async toggleTodo(todo) {
        let updatedTodo = await apiCalls.updateTodo(todo);
        const todos = this.state.todos.map(t =>  
            (t._id === updatedTodo._id ) ? {...t , completed: !t.completed} : t
        )
        this.setState({ todos });
    
    }

    render() {

        let todos = this.state.todos.map( todo =>(
            <TodoItem
                key={todo._id}
                {...todo}
                onDelete={this.deleteTodo.bind(this, todo._id)}
                onToggle={this.toggleTodo.bind(this , todo)}
            />
        ) )
        return (
            <div>
                <header>
                <h1> Todo <span> List </span> </h1>
                <h2>A simple todo list app built with MERN stack </h2>
                </header>
                <TodoForm
                    addTodo={this.addTodo}
                />
                <ul>
                {todos}
                </ul>
            </div>
        )
    }
}

export default Todolist;