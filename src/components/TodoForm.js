import React from 'react';


class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todoText: ''
		}
	 	this.handleKeyUp = this.handleKeyUp.bind(this);
	}

	onChangeHandle(event) {
		this.setState({todoText: event.target.value});
	}

	handleKeyUp(event) {		
		const todoText = this.state.todoText;
		if (event.keyCode === 13) {
			this.props.addTodo(todoText);
			this.setState({todoText: ''})
		}

	}

	render() {
		return(
			<input
				type="text"
				value={this.state.todoText}
				placeholder="Add new task"
				onChange={event => this.onChangeHandle(event)}
				onKeyUp={event => this.handleKeyUp(event)}
			/>
		);
	}
}

export default TodoForm;