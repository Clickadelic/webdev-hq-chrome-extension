import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

import { FormError } from "@/components/global/forms/form-error"
import { FormSuccess } from "@/components/global/forms/form-success"
import { Switch } from "@/components/ui/switch"

import { Plus } from "lucide-react"
import { BsTrash3 } from "react-icons/bs"
import { cn } from "@/lib/utils"
import { FaArrowUpRightDots } from "react-icons/fa6"
import { useTodoStore } from "@/stores/use-todo-store"
import { TodoSchema } from "@/schemas"
import { useState } from "react"
import { TbEdit } from "react-icons/tb"
import { BsListCheck } from "react-icons/bs"

const TodoList = () => {
	const { todos, addTodo, toggleTodo, deleteTodo } = useTodoStore()

	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [isEditing, setIsEditing] = useState<boolean>(false)
	const [editingTodoId, setEditingTodoId] = useState<string | null>(null)
	const [error, setError] = useState<string | undefined>("")
	const [success, setSuccess] = useState<string | undefined>("")
	const [quickFormError, setQuickFormError] = useState<string | undefined>("")
	const [quickFormSuccess, setQuickFormSuccess] = useState<string | undefined>("")

	const QuickFormSchema = TodoSchema.pick({ title: true })

	const quickForm = useForm<z.infer<typeof QuickFormSchema>>({
		resolver: zodResolver(QuickFormSchema),
		defaultValues: { title: "" }
	})

	const form = useForm<z.infer<typeof TodoSchema>>({
		resolver: zodResolver(TodoSchema),
		defaultValues: { title: "", description: "", done: false }
	})

	const openAdvancedAdd = () => {
		setIsModalOpen(true)
	}

	const onAddSubmit = (values: z.infer<typeof TodoSchema>) => {
		setError("")
		setSuccess("")
		setQuickFormError("")
		setQuickFormSuccess("")
		addTodo(values.title)
		form.reset()
		quickForm.reset()
		setIsModalOpen(false)
		toast.success(chrome.i18n.getMessage("todo_added", "Todo added."))
	}

	const onQuickAddSubmit = (values: z.infer<typeof QuickFormSchema>) => {
		try {
			addTodo(values.title)
			setQuickFormSuccess("")
			setQuickFormError("")
			quickForm.reset()
			toast.success(chrome.i18n.getMessage("todo_added", "Todo added."))
		} catch (e) {
			setQuickFormError("Something went wrong.")
			setQuickFormSuccess("")
		}
	}

	const onEdit = (id: string) => {
		setIsEditing(true)
		setEditingTodoId(id)
		setIsModalOpen(true)
		quickForm.reset()
		const todo = todos.find(todo => todo.id === id)
		if (todo) {
			form.setValue("title", todo.title)
			form.setValue("description", todo.description)
			form.setValue("done", todo.done)
		}
	}

	const onEditSubmit = (values: z.infer<typeof TodoSchema>) => {
		if (!editingTodoId) return

		setError("")
		setSuccess("")
		setQuickFormError("")
		setQuickFormSuccess("")

		const currentTodo = todos.find(todo => todo.id === editingTodoId)
		if (currentTodo) {
			currentTodo.title = values.title
			currentTodo.description = values.description
			currentTodo.done = values.done
			setSuccess(chrome.i18n.getMessage("todo_updated", "Todo updated successfully."))
		}

		setSuccess(chrome.i18n.getMessage("todo_updated", "Todo updated successfully."))
		form.reset()
		quickForm.reset()
		setIsModalOpen(false)
		setEditingTodoId(null)
		setIsEditing(false)
		toast.success(chrome.i18n.getMessage("todo_edited", "Todo edited."))
	}

	const onDelete = (id: string) => {
		deleteTodo(id)
		toast.success(chrome.i18n.getMessage("todo_deleted", "Todo deleted."))
	}

	return (
		<div className="flex flex-col bg-white/30 dark:bg-slate-800/30 backdrop-blur p-1 space-y-1 rounded">
			<div className="bg-white  dark:bg-slate-800 rounded p-1 backdrop-blur">
				<Form {...quickForm}>
					<form onSubmit={quickForm.handleSubmit(onQuickAddSubmit)} className="flex flex-row w-full gap-1">
						<div className="flex flex-row w-full gap-1">
							<FormField
								control={quickForm.control}
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
							<Dialog
								open={isModalOpen}
								onOpenChange={open => {
									setIsModalOpen(open)
									if (!open) {
										setIsEditing(false)
										setEditingTodoId(null)
										form.reset()
										quickForm.reset()
									}
								}}
							>
								<DialogTrigger
									onClick={() => openAdvancedAdd()}
									className="hover:bg-slate-100 text-slate-400 hover:text-slate-400 dark:hover:text-slate-400 dark:bg-slate-700 border border-transparent flex items-center justify-center py-2 px-3 rounded hover:cursor-pointer dark:hover:bg-slate-600"
								>
									<FaArrowUpRightDots className="size-4" />
								</DialogTrigger>
								<DialogContent className="rounded">
									<DialogHeader>
										<DialogTitle className="flex items-start gap-2">
											<BsListCheck className="mt-[2px] size-4" />
											{isEditing ? chrome.i18n.getMessage("edit_todo_title", "Edit Todo") : chrome.i18n.getMessage("add_todo_title", "Add todo")}
										</DialogTitle>
										<DialogDescription>
											{isEditing ? chrome.i18n.getMessage("edit_todo_description") : chrome.i18n.getMessage("add_todo_description", "Add a new task to your list.")}
										</DialogDescription>
									</DialogHeader>
									<div className="flex">
										<Form {...form}>
											<form onSubmit={form.handleSubmit(isEditing ? onEditSubmit : onAddSubmit)} className="w-full space-y-6">
												<div className="space-y-4">
													<FormField
														control={form.control}
														name="title"
														render={({ field }) => (
															<FormItem>
																<FormLabel>{chrome.i18n.getMessage("new_todo_title", "Title")}:</FormLabel>
																<FormControl>
																	<Input type="text" {...field} placeholder={chrome.i18n.getMessage("new_todo_placeholder", "Todo")} />
																</FormControl>
																<FormMessage />
															</FormItem>
														)}
													/>
													<FormField
														control={form.control}
														name="description"
														render={({ field }) => (
															<FormItem>
																<FormLabel>{chrome.i18n.getMessage("new_todo_description_label", "Description")}:</FormLabel>
																<FormControl>
																	<Textarea {...field} placeholder={chrome.i18n.getMessage("new_todo_description_placeholder", "Description")} />
																</FormControl>
																<FormMessage />
															</FormItem>
														)}
													/>

													<FormField
														control={form.control}
														name="done"
														render={({ field }) => (
															<FormItem className="flex flex-row flex-start">
																<FormLabel>{chrome.i18n.getMessage("done_label", "Done")}:</FormLabel>
																<FormControl>
																	<Switch className="ml-3" checked={field.value} onCheckedChange={field.onChange} />
																</FormControl>
																<FormMessage />
															</FormItem>
														)}
													/>
												</div>
												<FormError message={error} />
												<FormSuccess message={success} />
												<Button variant="primary" type="submit" className="w-full rounded" disabled={isLoading}>
													{isEditing ? <TbEdit /> : <Plus />}
													{isEditing ? chrome.i18n.getMessage("edit_todo", "Edit todo") : chrome.i18n.getMessage("add_todo", "Add todo")}
												</Button>
											</form>
										</Form>
									</div>
								</DialogContent>
							</Dialog>
							<Button
								type="submit"
								className="bg-mantis-primary hover:bg-mantis-primary-hover text-white dark:bg-mantis-primary dark:hover:bg-mantis-primary-hover dark:text-slate-200 rounded py-2 px-3 hover:cursor-pointer"
								disabled={isLoading}
							>
								{isEditing ? <TbEdit /> : <Plus />}
							</Button>
						</div>
						{quickFormError && <FormError message={quickFormError} />}
						{quickFormSuccess && <FormSuccess message={quickFormSuccess} />}
					</form>
				</Form>
			</div>
			<ul className="w-full flex flex-col space-y-1 bg-white dark:bg-slate-800 rounded p-1 backdrop-blur">
				{todos.length === 0 && (
					<p className="text-center text-md bg-white dark:bg-slate-800 rounded text-slate-500 dark:text-slate-300 my-2">
						{chrome.i18n.getMessage("create_your_first_todo", "Create your first todo.")}
					</p>
				)}
				{todos.map(todo => (
					<li key={todo.id} className="flex justify-start items-start p-.5 hover:text-slate-500 dark:text-slate-300 space-x-1">
						<Input type="checkbox" name={todo.id} checked={todo.done} onChange={() => toggleTodo(todo.id)} className="mt-2 mx-2 size-4 hover:cursor-pointer " />
						<span className={cn("w-full flex-grow mt-1.5 ", todo.done && "line-through text-slate-500 dark:text-slate-300")}>{todo.title}</span>
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
