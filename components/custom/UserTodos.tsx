import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Input } from "@/components/ui/input"

interface TodosProps {
	id: string
	name: string
	done: boolean
}

const UserTodos = () => {
	const newTodoPlaceholder = chrome.i18n.getMessage("new_todo_placeholder")
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
		<>
			<form className="flex flex-row bg-white backdrop-blur p-2 gap-2" onSubmit={handleTodoSubmit}>
				<input type="text" name="name" className="w-full p-2 text-md border rounded focus:outline-none" placeholder={newTodoPlaceholder} />
				<Button size="sm" className="bg-blue-500 text-white rounded hover:cursor-pointer">
					<Plus />
				</Button>
			</form>
			<ul>
				{todos.map(todo => (
					<li key={todo.id} className="flex justify-between">
						<Input type="checkbox" className="size-4" />
						<span>{todo.name}</span>
						<Button variant="subtle">X</Button>
					</li>
				))}
			</ul>
		</>
	)
}

export default UserTodos
