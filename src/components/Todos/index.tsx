import React from "react"
import { useState, useEffect } from "react"

function TodoList() {
	const [todos, setTodos] = useState([])
	const [inputValue, setInputValue] = useState("")

	const handleDelete = index => {
		const newTodos = [...todos]
		newTodos.splice(index, 1)
		setTodos(newTodos)
	}

	function handleChange(e) {
		setInputValue(e.target.value)
	}

	function handleSubmit(e) {
		e.preventDefault()
		setTodos([...todos, inputValue])
		setInputValue("")
	}

	return (
		<div className="todo-app m-auto md:w-[760px] justify-between rounded bg-white/10 backdrop backdrop-blur p-2">
			<form className="bg-white-10 rounded flex justify-between mb-2">
				<input type="text" value={inputValue} onChange={handleChange} className="p-2 pl-4 text-base rounded w-full mr-2" placeholder={chrome.i18n.getMessage("newTodo")} />
				<span className="inline-flex justify-between">
					<button onClick={handleSubmit} className="bg-blue-600 text-white rounded p-3 hover:bg-blue-500">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
						</svg>
					</button>
				</span>
			</form>
			<ul className="todo-list">
				{todos.map(todo => (
					<li className="flex justify-between bg-white rounded-sm" key={todo}>
						<span>{todo}</span>
						<button onClick={() => handleDelete(index)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default TodoList
