import React from 'react';
import style from './Title.css';

class Title extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: "List of things ToDo"
		}
	}

	render() {
		return(
			<div className="title-wrapper">
				<h1>{this.state.title}</h1>
				<p>Currently there are {this.props.todosNumber} ToDos on the list.</p>
			</div>
		);
	}
}

export default Title;