import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { AppSchema } from "@/schemas"

import { FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { BsTrash3 } from "react-icons/bs"
import { cn } from "@/lib/utils"
import { useTodoStore } from "@/stores/use-todo-store"

const UserTodos = () => {
	const newTodoPlaceholder = chrome.i18n.getMessage("new_todo_placeholder")
	const createFirstTask = chrome.i18n.getMessage("create_your_first_task")

	const currentTodos = useTodoStore(state => state.todos)
	const addTodo = useTodoStore(state => state.addTodo)
	const toggleTodo = useTodoStore(state => state.toggleTodo)
	const deleteTodo = useTodoStore(state => state.deleteTodo)

	let form = useForm<z.infer<typeof AppSchema>>({
		resolver: zodResolver(AppSchema),
		defaultValues: { title: "", url: "" }
	})

	const handleTodoSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const title = formData.get("title") as string
		if (title.trim() === "") return
		addTodo(title)
		e.currentTarget.reset()
	}

	return (
		<div className="flex flex-col bg-white/30 backdrop-blur p-1 rounded">
			<form className="flex flex-row w-full gap-1" onSubmit={handleTodoSubmit}>
				<input type="text" name="title" className="px-2 w-full bg-white rounded focus:outline-none" placeholder={newTodoPlaceholder} />
				<Button className="bg-blue-500 text-white rounded size-[36px] hover:cursor-pointer">
					<Plus />
				</Button>
			</form>
			<ul className="w-full flex flex-col space-y-2 mt-2 bg-white rounded p-1">
				{currentTodos.length === 0 && <p className="text-center text-md bg-white rounded text-white mb-2">{createFirstTask}</p>}
				{currentTodos.map(todo => (
					<li key={todo.id} className="flex justify-start items-start p-.5 hover:text-slate-500">
						<Input type="checkbox" name={todo.id} checked={todo.done} onChange={() => toggleTodo(todo.id)} className="mt-2 mx-2 size-4 hover:cursor-pointer" />
						<span className={cn("w-full flex-grow mt-1.5", todo.done && "line-through text-slate-500")}>{todo.title}</span>
						<Button variant="delete" size="sm" onClick={() => deleteTodo(todo.id)}>
							<BsTrash3 />
						</Button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default UserTodos
