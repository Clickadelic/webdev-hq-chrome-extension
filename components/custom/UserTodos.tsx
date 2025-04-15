import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { BsTrash3 } from "react-icons/bs"

interface TodosProps {
	id: string
	name: string
	done: boolean
}

const UserTodos = () => {
	const newTodoPlaceholder = chrome.i18n.getMessage("new_todo_placeholder")
	const createFirstTask = chrome.i18n.getMessage("create_your_first_task")
	const [todos, setTodos] = useState<TodosProps[]>([])
	const handleTodoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData: FormData = new FormData(e.currentTarget)
		const todoName: string = formData.get("name") as string
		const newTodo = { id: crypto.randomUUID(), name: todoName, done: false }
		setTodos([...todos, newTodo])
		e.currentTarget.reset()
	}

	// Todos logik
	return (
		<div className="flex flex-col bg-white/30 backdrop-blur p-2 rounded">
			<form className="flex flex-row w-full gap-2" onSubmit={handleTodoSubmit}>
				<input type="text" name="name" className="px-2 w-full bg-white rounded focus:outline-none" placeholder={newTodoPlaceholder} />
				<Button size="sm" className="bg-blue-500 text-white rounded hover:cursor-pointer">
					<Plus />
				</Button>
			</form>
			<ul className="w-full flex flex-col space-y-3 mt-3">
				{todos.length === 0 && <p className="text-center text-md text-slate-800">{createFirstTask}</p>}
				{todos.map(todo => (
					<li key={todo.id} className="flex justify-start bg-white rounded p-1">
						<Input type="checkbox" className="m-1 size-4" />
						<span className="w-full">{todo.name}</span>
						<Button variant="delete" size="sm">
							<BsTrash3 />
						</Button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default UserTodos
