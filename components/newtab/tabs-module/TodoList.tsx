import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FormError } from "@/components/global/forms/form-error"
import { FormSuccess } from "@/components/global/forms/form-success"

import { Plus } from "lucide-react"
import { BsTrash3 } from "react-icons/bs"
import { cn } from "@/lib/utils"

import { useTodoStore } from "@/stores/use-todo-store"
import { TodoSchema } from "@/schemas"
import { useState, FormEvent } from "react"
import { TbEdit } from "react-icons/tb"
import { LucidePlus } from "lucide-react"

/**
 * TodoList
 *
 * Component that displays a list of todos and allows the user to add, toggle and delete them.
 *
 * @returns The TodoList component.
 */
const TodoList = () => {
	const { todos, addTodo, toggleTodo, deleteTodo } = useTodoStore()

	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [isEditing, setIsEditing] = useState<boolean>(false)
	const [editingAppId, setEditingAppId] = useState<string | null>(null)
	const [error, setError] = useState<string | undefined>("")
	const [success, setSuccess] = useState<string | undefined>("")

	let form = useForm<z.infer<typeof TodoSchema>>({
		resolver: zodResolver(TodoSchema),
		defaultValues: { title: "", description: "", done: false }
	})

	const onAddSubmit = (values: z.infer<typeof TodoSchema>) => {
		setError("")
		setSuccess("")
		console.log(values)
		addTodo(values.title)
		form.reset()
	}

	const onEdit = (id: string) => {
		setIsEditing(true)
		setEditingAppId(id)

		const currentApp = todos.find(todo => todo.id === id)
		if (currentApp) {
			form.setValue("title", currentApp.title)
			form.setValue("done", currentApp.done)
		}
	}

	const onEditSubmit = (values: z.infer<typeof TodoSchema>) => {
		if (!editingAppId) return

		setError("")
		setSuccess("")

		const currentTodo = todos.find(todo => todo.id === editingAppId)
		if (currentTodo) {
			currentTodo.title = values.title
			currentTodo.done = values.done
			setSuccess(chrome.i18n.getMessage("todo_updated", "Todo updated successfully."))
		}

		setSuccess(chrome.i18n.getMessage("todo_updated", "Todo updated successfully."))
		form.reset()
		setEditingAppId(null)
		setIsEditing(false)
		setTimeout(() => {
			setSuccess("")
		}, 2000)
	}

	const onDelete = (id: string) => {
		deleteTodo(id)
		setSuccess(chrome.i18n.getMessage("todo_deleted", "Todo deleted successfully."))
	}

	return (
		<div className="flex flex-col bg-white/30 backdrop-blur p-1 space-y-2 rounded">
			<div className="bg-white rounded p-1 backdrop-blur">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(isEditing ? onEditSubmit : onAddSubmit)} className="flex flex-row w-full gap-1">
						<div className="flex flex-row w-full gap-2">
							<FormField
								control={form.control}
								name="title"
								render={({ field }) => (
									<FormItem className="w-full flex flex-col">
										<FormLabel className="hidden">{chrome.i18n.getMessage("new_todo_title", "Title")}:</FormLabel>
										<FormControl>
											<Input
												type="text"
												{...field}
												className="border-0 shadow-none"
												disabled={isLoading}
												placeholder={chrome.i18n.getMessage("new_todo_placeholder", "New todo")}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<Button type="submit" className="bg-mantis-primary text-white rounded size-[36px] hover:cursor-pointer" disabled={isLoading}>
								{isEditing ? <TbEdit /> : <Plus />}
							</Button>
						</div>
						<FormError message={error} />
						<FormSuccess message={success} />
					</form>
				</Form>
			</div>
			<ul className="w-full flex flex-col space-y-1 bg-white rounded p-1 backdrop-blur">
				{todos.length === 0 && <p className="text-center text-md bg-white rounded text-slate-500 my-2">{chrome.i18n.getMessage("create_your_first_todo", "Create your first todo.")}</p>}
				{todos.map(todo => (
					<li key={todo.id} className="flex justify-start items-start p-.5 hover:text-slate-500 space-x-1">
						<Input type="checkbox" name={todo.id} checked={todo.done} onChange={() => toggleTodo(todo.id)} className="mt-2 mx-2 size-4 hover:cursor-pointer" />
						<span className={cn("w-full flex-grow mt-1.5", todo.done && "line-through text-slate-500")}>{todo.title}</span>
						<Button variant="ghost" className="text-slate-400" size="sm" onClick={() => onEdit(todo.id)}>
							<TbEdit className="size-4" />
						</Button>
						<Button variant="ghost" size="sm" className="text-slate-400 hover:text-rose-400" onClick={() => onDelete(todo.id)}>
							<BsTrash3 className="size-4" />
						</Button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default TodoList
