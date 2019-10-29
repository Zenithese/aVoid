import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        body: ""
    }
    handleChange = (e) => {
        this.setState({
            body: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            body: ""
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new avoidance:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.body}></input>
                </form>
            </div>
        )
    }
}

export default AddTodo;