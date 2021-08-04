import React, { Component } from 'react';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: 'Low'
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {

    const { value, name } = e.target;
    this.setState({

      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    console.log(this.state)

  }


  render() {
    return (
      <div className="card p-4">
				<form className="card-body" onSubmit={this.handleSubmit}>
					<div className="form-group">
						<input type="text" name="title" onChange={this.handleInput} className="form-control" placeholder="Title"/>
					</div>
					<div className="form-group">
						<input type="text" name="responsible" onChange={this.handleInput} className="form-control" placeholder="Responsible"/>
					</div>
					<div className="form-group">
						<input type="text" name="description" onChange={this.handleInput} className="form-control" placeholder="Description"/>
					</div>
					<div className="form-group">
						<select name="priority" onChange={this.handleInput} className="form-control" value={this.state.priority}>
      				<option>Low</option>
      				<option>Medium</option>
      				<option>High</option>
      			</select>
					</div>
					<div class="form-group">
						<button class="btn btn-primary btn-block" type="submit">Save</button>
					</div>
				</form>
			</div>
    );
  }
}


export default TodoForm;