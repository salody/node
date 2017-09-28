import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data,
			titleValue: "",
			detailValue: ""
		};
		this.changeTitle = this.changeTitle.bind(this);
		this.changeDetail = this.changeDetail.bind(this);
		this.addTodo = this.addTodo.bind(this);
	}

	changeTitle(e) {
		// Write code here.
		this.setState({
			titleValue: e.target.value
		})
	}

	changeDetail(e) {
		// Write code here.
		this.setState({
			detailValue: e.target.value
		})
	}

	addTodo() {
		// Write code here.
		this.setState({
			data: this.state.data.push({
				title: this.state.titleValue,
				detail: this.state.detailValue
			})
		})
	}


	render() {
		const todos = this.state.data.map((obj) => {
			return(
				<Todo title={obj.title} key={obj.title}>
					{obj.detail}
				</Todo>
			);
		});
		return (
			<div className="todoList">
				<div>
					Title:<input type="text" value={this.state.titleValue} onChange={this.changeTitle} />
					Detail:<input type="text" value={this.state.detailValue} onChange={this.changeDetail} />
					<button onClick={this.addTodo}>Add</button>
				</div>
				<table style={{border: '2px solid black'}}>
					<tbody>
						{todos}
					</tbody>
				</table>
			</div>
		);
	}
}

