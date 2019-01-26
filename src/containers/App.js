import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import ToDoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import { hot } from 'react-hot-loader';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: [{
				id: 1,
				    text: 'clean room'
				}, {
				id: 2,
				    text: 'wash the dishes'
				}, {
				id: 3,
				    text: 'feed my cat'
			}]
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
				<TodoForm 
				//Pytanie
					addTodo={event => this.addTodo(event)}
				/>
				<ul>
					<ToDoList			
						data={this.state.data}
						removeTodo={id => this.removeTodo(id)}
					/>
				</ul>
			</div>
		);
	}
}

export default hot(module)(App);
//tem komponent ma byc odswiezany