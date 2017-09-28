import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: false
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
		this.setState({
			checked: !this.state.checked
		});
		alert('hello');
	}

	render() {
		return (
			<tr>
				<td style={styles.td}>
					<input type="checkbox"
					       checked={this.state.checked}
					       onChange={this.handleChange}
					/>
				</td>
				<td style={styles.td}>{this.props.title}</td>
				<td style={styles.td}>{this.props.children}</td>
			</tr>
		);
	}
}

Todo.propTypes = {
	title: PropTypes.string.isRequired,
};

const styles = {
	td: {
		border: '1px solid black'
	}
};