import React, { Component } from 'react';
import './TodoForm.css';

class TodoForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputVal : ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ inputVal: event.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addTodo(this.state.inputVal);
        this.setState({inputVal : ""})
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        onChange={this.handleChange}
                        value={this.state.inputVal}
                    />
                    <button
                        className="button"
                        onClick={this.handleSubmit}
                    >
                        Add
                    </button>
                </form>
            </div>
        )
    }
}

export default TodoForm;