import React from 'react';
import style from './TodoList.css';

const ToDoList = props => { return (
	props.data.map(item => {
		return (
			<li key={item.id} className={style.todoContainer}>
				<div className="todoId">{item.id}. </div>
				<div className="todoText">{item.text} </div>
				<button className={style.btnRemoveTodo}
					onClick = {() => props.removeTodo(item.id)}
					title="Remove this todo.">x
				</button>
			</li>
			);
		})
	);
};

export default ToDoList;