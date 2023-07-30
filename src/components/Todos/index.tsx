import React from 'react'
import {useState, useEffect} from 'react'

function Todos({classes}) {

	const [todos, setTodos] = useState([])
	
	function renderList(){

	}

	useEffect(() => {

	})

	return (
		<div className={"todo-app "+`${classes}`}>
			<ul className="todo-list">
				<li className="bg-white-10 rounded flex justify-between">
					<div className="p-1">  
						<div className="flex items-center mr-4">  
							<input type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" className="opacity-0 absolute h-8 w-8" />  
							<div className="bg-white border-2 rounded-md border-blue-400 w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">  
								<svg className="fill-current hidden w-3 h-3 text-blue-600 pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">  
									<g fill="none" fillRule="evenodd">  
										<g transform="translate(-9 -11)" fill="#1F73F1" fillRule="nonzero">  
											<path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />  
										</g>  
									</g>  
								</svg>
							</div>
							<label htmlFor="A3-yes" className="select-none hidden">Yes</label>  
						</div>  
					</div>
					<input
						type="text"
						name="new-todo"
						id="new-todo"
						className="p-2 text-base w-full"
						placeholder={chrome.i18n.getMessage('newTodo')}
					/>
					<span className="inline-flex justify-between">
						<button className="rounded px-3 mr-3">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
								<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
							</svg>
						</button>
						<button className="rounded px-3 mr-3">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
								<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
							</svg>
						</button>
					</span>
				</li>
			</ul>
		</div>
	)
}

export default Todos