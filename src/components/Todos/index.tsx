import React from 'react'
import {useState, useEffect} from 'react'

function Todos() {

	const [todoList, setTodoList] = useState([]);
	const [inputs, setInputs] = useState({});

	function handleChange (e) {

		const name = e.target.name;
		const value =
		e.target.type === "checkbox" ? e.target.checked : e.target.value;

		setInputs((prevState) => ({ ...prevState, [name]: value }));
		console.log(inputs)
	};

	function addTodo(e){
		e.preventDefault()
		todoList.push(inputs)
		setTodoList(todoList)
		renderTodoList(todoList)
		console.log(todoList)
		
	}

	function renderTodoList(todoList){

		todoList.forEach(item => {
			return <li key={item.index}>{item.todo}</li>
		})

	}

	useEffect(() => {
		renderTodoList(todoList)
	}, [todoList])

	return (
		<div className="todo-app m-auto md:w-[760px] justify-between rounded bg-white/10 backdrop backdrop-blur p-2">
			<form className="bg-white-10 rounded flex justify-between mb-2" onSubmit={addTodo}>
				<input
					type="text"
					name="todo"
					id="todo"
					className="p-2 pl-4 text-base rounded w-full mr-2"
					onChange={handleChange}
					placeholder={chrome.i18n.getMessage("newTodo")}
				/>
				<span className="inline-flex justify-between">
					<button onSubmit={addTodo} className="bg-blue-600 text-white rounded p-3 hover:bg-blue-500">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
						</svg>
					</button>
				</span>
			</form>
			<ul className="todo-list">
				{todoList}
			</ul>
		</div>
	)
}

export default Todos