import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title'

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: []
		};
	}

	addTodo(val) {
		const todo = {
			text: val,
			id: uuid.v4(), //biblioteka uuid aby moc odrozniac elementy za pomocą id
			//unikatowa kombinacja i przypisanie do klucz id
		};
		//tworzenie obiektu z danymi
		//spread na tablicy i nowa tablica z dodatkowym elementem todo
		//push bez modyfikacji stanu
		const data =[...this.state.data, todo];
		this.setState({data});
	}

	removeTodo(id) {
		const remainder = this.state.data.filter(todo => todo.id !== id);
		this.setState({data: remainder});
	}

	render() {
		return(
			<div className={style.TodoApp}>
				<Title 
					todosNumber={this.state.data.length}
				/>
				Komponenty aplikacji TodoApp
			</div>
		);
	}
}

export default App;