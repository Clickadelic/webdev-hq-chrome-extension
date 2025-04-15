import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

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
		const formData = new FormData(e.currentTarget)
		const todoName = formData.get("todo") as string
		const newTodo = { id: crypto.randomUUID(), name: todoName, done: false }
		setTodos([...todos, newTodo])
		e.currentTarget.reset()
	}

	const renderTodoList = ({ todos }: { todos: TodosProps[] }) => {
		return todos.map(todo => (
			<>
				<form className="flex flex-row" onSubmit={handleTodoSubmit}>
					<input type="text" className="w-full p-2 text-md border focus:outline-none" placeholder={newTodoPlaceholder} />
					<Button size="sm" className="bg-blue-500 text-white size-16 rounded hover:cursor-pointer">
						<Plus />
					</Button>
				</form>
				<ul>{renderTodoList({ todos })}</ul>
			</>
		))
	}
	// Todos logik
	return <div>UserTodos</div>
}

export default UserTodos
