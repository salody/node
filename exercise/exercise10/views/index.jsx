import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default class TodoBox extends Component {
	render() {
		return (
			<div className="todoBox">
				<h1>Todos</h1>
				<TodoList data={this.props.data}/>
				<TodoForm />
			</div>
		);
	}
}